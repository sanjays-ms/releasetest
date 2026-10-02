const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const expectedNotes = fs.readFileSync(path.join(__dirname, '..', '..', 'releaseNote.md'), 'utf8');
const useUtf8JsonBytes = process.argv[2] === 'true';
let server;
let child;

function fail(message) {
    console.error(message);
    process.exitCode = 1;
    if (server) {
        server.close();
    }
}

server = http.createServer((request, response) => {
    const chunks = [];
    request.on('data', chunk => chunks.push(chunk));
    request.on('end', () => {
        try {
            const bytes = Buffer.concat(chunks);
            const body = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
            const payload = JSON.parse(body);
            if (payload.body !== expectedNotes) {
                console.error(`Unexpected body: ${JSON.stringify(payload.body)}`);
                console.error(`Expected body: ${JSON.stringify(expectedNotes)}`);
                throw new Error('Request body did not preserve the release notes exactly');
            }

            console.log(`Captured ${bytes.length} UTF-8 bytes; release payload parses and preserves Unicode/newlines.`);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end('{"ok":true}');
        } catch (error) {
            console.error(`Captured release payload validation failed: ${error.message}`);
            process.exitCode = 1;
            response.writeHead(400);
            response.end();
        }
    });
});

server.on('error', error => fail(`Local payload server failed: ${error.message}`));
server.listen(0, '127.0.0.1', () => {
    const url = `http://127.0.0.1:${server.address().port}/releases`;
    child = spawn('pwsh.exe', [
        '-NoLogo',
        '-NoProfile',
        '-NonInteractive',
        '-File',
        path.join(__dirname, 'verifyReleasePayload.ps1'),
    ], {
        env: {
            ...process.env,
            CAPTURE_URL: url,
            RELEASE_NOTES_PATH: path.join(__dirname, '..', '..', 'releaseNote.md'),
            USE_UTF8_JSON_BYTES: useUtf8JsonBytes ? 'true' : 'false',
        },
        stdio: 'inherit',
    });

    child.on('error', error => fail(`Could not start PowerShell Core: ${error.message}`));
    child.on('exit', code => {
        if (code !== 0) {
            process.exitCode = 1;
        }
        server.close();
    });
});
