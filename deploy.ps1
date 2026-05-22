# Deploy portfolio to GitHub → Vercel
# Run in PowerShell:  cd C:\Users\HP\Desktop\Cursor\Resume  ;  .\deploy.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$photoSrc = "C:\Users\HP\.cursor\projects\c-Users-HP-Desktop-Cursor-Resume\assets\c__Users_HP_AppData_Roaming_Cursor_User_workspaceStorage_779936386c26d08c225a512c022c0d08_images_siddhartha_borpuzari-e63c1bbb-b526-4147-b410-3174ad1c6c99.png"
$photoDst = "public\siddhartha.png"
if (Test-Path $photoSrc) {
  Copy-Item $photoSrc $photoDst -Force
  Write-Host "Photo copied to public/siddhartha.png"
} elseif (-not (Test-Path $photoDst)) {
  Write-Warning "Photo not found — site will use SB fallback until you add public/siddhartha.png"
}

# Always init if missing
if (-not (Test-Path .git)) {
  git init
  Write-Host "Git repository initialized."
}

git add .
git status --short

$msg = @"
feat: portfolio site for Vercel deployment

Single-page React portfolio with experience, skills, projects, certifications, and profile links.
"@

git commit -m $msg 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Nothing new to commit or commit skipped."
}

git branch -M main

$remote = "https://github.com/siddhartha4u2c/siddharthaborpuzari.git"
git remote remove origin 2>$null
git remote add origin $remote

Write-Host "Pushing to $remote ..."
git push -u origin main

Write-Host ""
Write-Host "Done! Next: import https://github.com/siddhartha4u2c/siddharthaborpuzari at https://vercel.com/new"
