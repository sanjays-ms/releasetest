$releaseNotes = [System.IO.File]::ReadAllText($env:RELEASE_NOTES_PATH)
$releaseData = @{
    tag_name = 'v3.000.999'
    target_commitish = '0123456789abcdef0123456789abcdef01234567'
    name = 'v3.000.999'
    body = $releaseNotes
    draft = $false
    prerelease = $true
}
$releaseJson = ConvertTo-Json -InputObject $releaseData -Compress
if ($env:USE_UTF8_JSON_BYTES -eq 'true') {
    $requestBody = [System.Text.Encoding]::UTF8.GetBytes($releaseJson)
    $contentType = 'application/json; charset=utf-8'
}
else {
    $requestBody = $releaseJson
    $contentType = 'application/json'
}

$releaseParams = @{
    Uri = $env:CAPTURE_URL
    Method = 'POST'
    ContentType = $contentType
    Body = $requestBody
}
Invoke-RestMethod @releaseParams | Out-Null
