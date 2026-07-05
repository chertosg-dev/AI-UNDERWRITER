@echo off
cd /d "%~dp0"
echo AI Underwriter running locally.
echo Open on this PC: http://localhost:8000
echo For phone on same Wi-Fi, use your PC IP with :8000
python -m http.server 8000
pause
