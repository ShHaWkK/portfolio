Set-Location -Path "c:\perso\portfolio"
$output = npm run build 2>&1 | Out-String
$output | Out-File -FilePath "c:\perso\portfolio\build_output.txt"
Write-Host "Build completed. Output saved to build_output.txt"