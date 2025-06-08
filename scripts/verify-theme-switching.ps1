# Theme Switching Verification Script

# This script performs the following checks:
# 1. Runs TypeScript type checking to verify no type errors
# 2. Builds the Next.js project to verify no build errors
# 3. Checks ESLint to verify no linting errors

Write-Host "Starting theme switching verification..." -ForegroundColor Cyan

# Check directory
$currentDir = Get-Location
Write-Host "Current directory: $currentDir" -ForegroundColor Gray

# Move to portfolio-site directory if needed
if (-not (Test-Path "package.json")) {
    if (Test-Path "portfolio-site") {
        Set-Location "portfolio-site"
        Write-Host "Changed directory to portfolio-site" -ForegroundColor Gray
    } else {
        Write-Host "Error: Cannot find portfolio-site directory or package.json" -ForegroundColor Red
        exit 1
    }
}

# Step 1: Run TypeScript type checking
Write-Host "`n1. Running TypeScript type checking..." -ForegroundColor Yellow
npm run typecheck

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript type checking failed!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ TypeScript type checking passed!" -ForegroundColor Green
}

# Step 2: Run ESLint
Write-Host "`n2. Running ESLint..." -ForegroundColor Yellow
npm run lint

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ESLint check failed!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ ESLint check passed!" -ForegroundColor Green
}

# Step 3: Build the project
Write-Host "`n3. Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ Build successful!" -ForegroundColor Green
}

Write-Host "`nAll verification checks passed! The theme switching functionality appears to be working correctly." -ForegroundColor Cyan

# Return to original directory if we changed it
if ($currentDir -ne (Get-Location)) {
    Set-Location $currentDir
}
