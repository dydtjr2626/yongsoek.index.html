@echo off
chcp 65001 >nul
title GitHub 저장소 업로드 (dydtjr2626/yongsoek.index.html)

echo =======================================================================
echo   🚀 김용석 포트폴리오 GitHub 원격 업로드
echo   저장소: https://github.com/dydtjr2626/yongsoek.index.html
echo =======================================================================
echo.
echo [1/3] 로컬 브랜치 및 원격 저장소 확인 중...
git remote remove origin 2>nul
git remote add origin https://github.com/dydtjr2626/yongsoek.index.html.git
git branch -M main

echo.
echo [2/3] GitHub로 모든 파일(포트폴리오, 문서, 스타일)을 업로드(Push)합니다...
echo ※ 브라우저 로그인 창이 뜨면 dydtjr2626 계정으로 인증을 완료해주세요.
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =======================================================================
    echo   🎉 성공적으로 GitHub에 모든 파일이 업로드되었습니다!
    echo.
    echo   [무료 웹 링크 활성화 방법 (GitHub Pages)]:
    echo   1. https://github.com/dydtjr2626/yongsoek.index.html/settings/pages 접속
    echo   2. 'Build and deployment' 아래 Branch를 'main'으로 선택 후 [Save] 클릭
    echo   3. 1~2분 뒤 나만의 공식 포트폴리오 웹사이트 링크가 열립니다:
    echo      👉 https://dydtjr2626.github.io/yongsoek.index.html/
    echo =======================================================================
) else (
    echo.
    echo ⚠️ 업로드 중 권한 문제가 발생했습니다.
    echo dydtjr2626 계정의 로그인 권한(또는 Personal Access Token)을 확인해주세요.
)

echo.
pause
