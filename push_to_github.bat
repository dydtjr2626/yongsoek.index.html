@echo off
chcp 65001 >nul
title GitHub 원격 저장소 연동 및 업로드

echo ========================================================
echo   🚀 김용석 포트폴리오 GitHub 원격 업로드 도우미
echo ========================================================
echo.
echo 1. GitHub (https://github.com/new) 에서 새 저장소를 생성합니다.
echo    (저장소 이름 추천: portfolio)
echo 2. 생성된 저장소의 HTTPS 주소를 복사해 아래에 붙여넣어 주세요.
echo.
set /p REPO_URL="👉 저장소 URL 입력 (예: https://github.com/gsg920/portfolio.git): "

if "%REPO_URL%"=="" (
    echo.
    echo ❌ [오류] 저장소 주소가 입력되지 않았습니다.
    pause
    exit /b
)

echo.
echo 🔗 원격 저장소(origin) 연결 중...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo ⬆️ GitHub로 파일들을 업로드(Push)합니다...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   🎉 성공적으로 GitHub에 모든 파일이 업로드되었습니다!
    echo.
    echo   [무료 웹사이트 링크 활성화 방법]
    echo   1. GitHub 저장소 상단 [Settings] 메뉴 클릭
    echo   2. 좌측 메뉴에서 [Pages] 클릭
    echo   3. Build and deployment > Branch를 'main'으로 선택 후 [Save]
    echo   4. 약 1~2분 후 링크가 생성됩니다:
    echo      https://gsg920.github.io/portfolio/
    echo ========================================================
) else (
    echo.
    echo ⚠️ 업로드 중 문제가 발생했습니다.
    echo GitHub 로그인 창이 뜨면 브라우저를 통해 인증을 완료해주세요.
)

pause
