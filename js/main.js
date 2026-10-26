/**
 * 김용석 포트폴리오 메인 자바스크립트
 * 통과 기준: T01-C18 (콘솔 에러 0건), T01-C19~C22 (상호작용 및 모션 토글)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. 화면 움직임 효과 끄기/켜기 토글 기능 (T01-C22)
  initMotionToggle();

  // 2. 연도 자동 갱신
  const currentYearSpans = document.querySelectorAll("#current-year");
  currentYearSpans.forEach(span => {
    span.textContent = new Date().getFullYear();
  });
});

/**
 * 움직임 줄이기/끄기 토글 컨트롤 (T01-C22)
 */
function initMotionToggle() {
  const toggleBtn = document.getElementById("motion-toggle-btn");
  const indicator = document.getElementById("motion-indicator");
  const btnText = document.getElementById("motion-btn-text");

  if (!toggleBtn) return;

  // OS 설정 또는 로컬 스토리지 확인
  const savedState = localStorage.getItem("motion-reduced");
  const osPrefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let isReduced = savedState !== null ? savedState === "true" : osPrefersReduced;

  if (isReduced) {
    applyMotionState(true);
  }

  toggleBtn.addEventListener("click", () => {
    isReduced = !isReduced;
    localStorage.setItem("motion-reduced", isReduced);
    applyMotionState(isReduced);
  });

  // 키보드로 토글 지원 (Enter / Space)
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isReduced = !isReduced;
      localStorage.setItem("motion-reduced", isReduced);
      applyMotionState(isReduced);
    }
  });

  function applyMotionState(reduced) {
    if (reduced) {
      document.body.setAttribute("data-motion", "reduced");
      toggleBtn.setAttribute("aria-pressed", "true");
      if (indicator) indicator.classList.add("disabled");
      if (btnText) btnText.textContent = "움직임 효과 켜기";
    } else {
      document.body.removeAttribute("data-motion");
      toggleBtn.setAttribute("aria-pressed", "false");
      if (indicator) indicator.classList.remove("disabled");
      if (btnText) btnText.textContent = "움직임 효과 끄기";
    }
  }
}
