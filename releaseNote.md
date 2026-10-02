
## Agent Downloads

<!-- Test-only fixture to exercise release-note JSON and UTF-8 handling. -->
- Test title: café — 🚀, "quoted"

|                | Package | SHA-256 |
| -------------- | ------- | ------- |
| Windows x64    | [vsts-agent-win-x64-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-win-x64-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Windows x86    | [vsts-agent-win-x86-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-win-x86-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Windows ARM64  | [vsts-agent-win-arm64-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-win-arm64-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| macOS x64      | [vsts-agent-osx-x64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-osx-x64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| macOS ARM64    | [vsts-agent-osx-arm64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-osx-arm64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux x64      | [vsts-agent-linux-x64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-linux-x64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux ARM      | [vsts-agent-linux-arm-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-linux-arm-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux ARM64    | [vsts-agent-linux-arm64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-linux-arm64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux musl x64 | [vsts-agent-linux-musl-x64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-linux-musl-x64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux musl ARM64 | [vsts-agent-linux-musl-arm64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/vsts-agent-linux-musl-arm64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |

After Download:

## Windows x64

``` bash
C:\> mkdir myagent && cd myagent
C:\myagent> Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$HOME\Downloads\vsts-agent-win-x64-3.000.999.zip", "$PWD")
```

## Windows x86

``` bash
C:\> mkdir myagent && cd myagent
C:\myagent> Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$HOME\Downloads\vsts-agent-win-x86-3.000.999.zip", "$PWD")
```

## Windows ARM64

``` bash
C:\> mkdir myagent && cd myagent
C:\myagent> Add-Type -AssemblyName System.IO.Compression.FileSystem ; [System.IO.Compression.ZipFile]::ExtractToDirectory("$HOME\Downloads\vsts-agent-win-arm64-3.000.999.zip", "$PWD")
```

## macOS x64

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-osx-x64-3.000.999.tar.gz
```

## macOS ARM64

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-osx-arm64-3.000.999.tar.gz
```

## Linux x64

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-linux-x64-3.000.999.tar.gz
```

## Linux ARM

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-linux-arm-3.000.999.tar.gz
```

## Linux ARM64

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-linux-arm64-3.000.999.tar.gz
```

## Alpine x64

***Note:*** Node 6 does not exist for Alpine.

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-linux-musl-x64-3.000.999.tar.gz
```

## Alpine ARM64

***Note:*** Node 6 does not exist for Alpine.

``` bash
~/$ mkdir myagent && cd myagent
~/myagent$ tar xzf ~/Downloads/vsts-agent-linux-musl-ARM64-3.000.999.tar.gz
```

## Alternate Agent Downloads

Alternate packages below do not include Node 6 & 10 and are only suitable for users who do not use Node 6 & 10 dependent tasks.
See [notes](docs/node6.md) on Node version support for more details.

|             | Package | SHA-256 |
| ----------- | ------- | ------- |
| Windows x64 | [pipelines-agent-win-x64-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-win-x64-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Windows x86   | [pipelines-agent-win-x86-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-win-x86-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Windows ARM64 | [pipelines-agent-win-arm64-3.000.999.zip](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-win-arm64-3.000.999.zip) | 0000000000000000000000000000000000000000000000000000000000000000 |
| macOS x64     | [pipelines-agent-osx-x64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-osx-x64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| macOS ARM64 | [pipelines-agent-osx-arm64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-osx-arm64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux x64   | [pipelines-agent-linux-x64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-linux-x64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux ARM   | [pipelines-agent-linux-arm-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-linux-arm-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
| Linux ARM64 | [pipelines-agent-linux-arm64-3.000.999.tar.gz](https://download.agent.dev.azure.com/agent/3.000.999/pipelines-agent-linux-arm64-3.000.999.tar.gz) | 0000000000000000000000000000000000000000000000000000000000000000 |
