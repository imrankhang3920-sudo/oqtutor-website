@echo off
echo ==============================================
echo Pushing changes to GitHub for Vercel Deployment
echo ==============================================
cd /d "%~dp0"
git add .
git commit -m "Update website and blog posts"
git push origin main
echo.
echo ==============================================
echo Done! Vercel will now deploy your changes.
echo ==============================================
pause
