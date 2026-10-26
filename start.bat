@echo off
chcp 65001 >nul
title 웹사이트 로컬 서버 (http://localhost:3000)

echo ========================================================
echo   웹 서버를 시작합니다: http://localhost:3000
echo   (종료하려면 이 창에서 Ctrl + C 를 누르세요)
echo ========================================================

python server.py

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [오류] Python 실행 중 문제가 발생했습니다.
    echo Python이 올바르게 설치되어 있는지 확인해주세요.
    pause
)
