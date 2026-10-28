import http.server
import socketserver
import webbrowser
import os
import sys
import threading
import time

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # UTF-8 및 캐시 방지 헤더 (수정 후 새로고침 시 즉시 반영)
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def open_browser():
    time.sleep(0.5)
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception:
        pass

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), CustomHTTPRequestHandler) as httpd:
            url = f"http://localhost:{PORT}"
            print("=" * 60, flush=True)
            print("🚀 웹 서버가 실행되었습니다!", flush=True)
            print(f"👉 브라우저 주소: {url}", flush=True)
            print(f"📁 호스팅 폴더: {DIRECTORY}", flush=True)
            print("🛑 종료하려면 창을 닫거나 Ctrl + C 를 누르세요.", flush=True)
            print("=" * 60, flush=True)
            
            # 비동기로 브라우저 열기 시도
            threading.Thread(target=open_browser, daemon=True).start()

            httpd.serve_forever()
    except OSError as e:
        if getattr(e, 'winerror', None) == 10048 or "Address already in use" in str(e):
            print(f"\n❌ [오류] {PORT}번 포트가 이미 다른 프로그램에서 사용 중입니다.", flush=True)
        else:
            print(f"\n❌ [서버 실행 오류]: {e}", flush=True)
    except KeyboardInterrupt:
        print("\n\n👋 서버가 정상적으로 종료되었습니다.", flush=True)
        sys.exit(0)

if __name__ == "__main__":
    run_server()
