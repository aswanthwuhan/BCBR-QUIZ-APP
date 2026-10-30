# BCBR QBank one-command installer for Windows.
# Run in PowerShell:
#   irm https://raw.githubusercontent.com/aswanthwuhan/BCBR-QUIZ-APP/main/install.ps1 | iex
#
# Downloads the app to %USERPROFILE%\BCBR-QBank, installs it, adds a "BCBR QBank"
# desktop shortcut and starts it. Works offline after install; no account needed.
# Options (environment variables): BCBR_INSTALL_DIR, BCBR_NO_SHORTCUT=1, BCBR_NO_LAUNCH=1

& {
  $ErrorActionPreference = 'Stop'
  $ProgressPreference = 'SilentlyContinue'
  $repo = 'aswanthwuhan/BCBR-QUIZ-APP'
  $dir = if ($env:BCBR_INSTALL_DIR) { $env:BCBR_INSTALL_DIR } else { Join-Path $HOME 'BCBR-QBank' }

  Write-Host "`nBCBR QBank installer" -ForegroundColor Cyan

  # 1. Node.js
  if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    if (Get-Command winget -ErrorAction SilentlyContinue) {
      Write-Host "Node.js not found. Installing Node.js LTS with winget..."
      winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
      $env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
    }
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
      Write-Host "Please install Node.js from https://nodejs.org, then run this command again." -ForegroundColor Yellow
      return
    }
  }
  Write-Host "Node.js $(node -v) found."

  # 2. Download the latest code
  $zip = Join-Path $env:TEMP 'bcbr-qbank.zip'
  $tmp = Join-Path $env:TEMP 'bcbr-qbank-extract'
  Write-Host "Downloading BCBR QBank..."
  Invoke-WebRequest "https://github.com/$repo/archive/refs/heads/main.zip" -OutFile $zip -UseBasicParsing
  if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
  Expand-Archive $zip -DestinationPath $tmp -Force
  $src = Get-ChildItem $tmp -Directory | Select-Object -First 1

  # Update in place: replace the code but keep already-installed node_modules.
  # Refuse to clear a folder that isn't empty and isn't an existing BCBR QBank install.
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }
  $pkg = Join-Path $dir 'package.json'
  $isInstall = (Test-Path $pkg) -and ((Get-Content $pkg -Raw) -match '"name":\s*"bcbr-quiz-app"')
  if ((Get-ChildItem $dir -Force | Measure-Object).Count -gt 0 -and -not $isInstall) {
    Write-Host "$dir already exists and is not a BCBR QBank install. Set BCBR_INSTALL_DIR to an empty folder and try again." -ForegroundColor Yellow
    return
  }
  Get-ChildItem $dir -Force | Where-Object { $_.Name -ne 'node_modules' } | Remove-Item -Recurse -Force
  Get-ChildItem $src.FullName -Force | Move-Item -Destination $dir -Force
  Remove-Item $zip, $tmp -Recurse -Force -ErrorAction SilentlyContinue

  # 3. Install dependencies
  Write-Host "Installing (this takes a minute the first time)..."
  Push-Location $dir
  try {
    & npm.cmd install --no-audit --no-fund --loglevel=error
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
  } finally { Pop-Location }

  # 4. Desktop shortcut
  if (-not $env:BCBR_NO_SHORTCUT) {
    $lnk = Join-Path ([Environment]::GetFolderPath('Desktop')) 'BCBR QBank.lnk'
    $sh = (New-Object -ComObject WScript.Shell).CreateShortcut($lnk)
    $sh.TargetPath = Join-Path $dir 'start-local.bat'
    $sh.WorkingDirectory = $dir
    $sh.IconLocation = Join-Path $dir 'public\favicon.ico'
    if (-not (Test-Path $sh.IconLocation)) { $sh.IconLocation = "$env:SystemRoot\System32\shell32.dll,13" }
    $sh.Save()
    Write-Host "Added 'BCBR QBank' shortcut to your desktop."
  }

  Write-Host "`nInstalled to $dir" -ForegroundColor Green
  if (-not $env:BCBR_NO_LAUNCH) {
    Write-Host "Starting BCBR QBank... (close the window to stop it)"
    Start-Process (Join-Path $dir 'start-local.bat') -WorkingDirectory $dir
  }
}
