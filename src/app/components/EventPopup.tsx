import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { X } from "lucide-react";

const HIDE_UNTIL_KEY = "dgo-event-popup-hide-until"; // localStorage: "오늘 하루 보지 않기"(24h)
const HERO_IMG = "https://img2.stibee.com/74826_3399701_1779437867798726041.jpg";
const PROMO_IMG = "https://img2.stibee.com/74826_3399701_1779436020407127150.jpg"; // D-GO 출시 EVENT (무료 1TB 업그레이드)
// 행사 종료: 2026년 7월 1일 00:00(KST) 이후로는 팝업 미노출 (방문자 시간대 무관)
const EVENT_END = new Date("2026-07-01T00:00:00+09:00").getTime();

export default function EventPopup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 페이지 로드(새로고침)마다 노출. "닫기"는 메모리 state로만 억제하므로 새로고침 시 다시 뜸.
  // (Root는 SPA 라우트 전환 시 언마운트되지 않으므로, 같은 세션 페이지 이동에선 닫은 상태 유지)
  useEffect(() => {
    if (Date.now() >= EVENT_END) return; // 7월부터(행사 종료) 미노출
    if (location.pathname === "/event") return; // 이미 이벤트 페이지면 생략
    try {
      const until = Number(localStorage.getItem(HIDE_UNTIL_KEY) || 0);
      if (Date.now() < until) return; // "오늘 하루 보지 않기" 유효 기간 내
    } catch {
      /* storage 접근 불가 시 그냥 노출 */
    }
    setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 코너 팝업: 배경 딤/스크롤 잠금 없음(홈 화면 그대로 노출·조작 가능). Esc로 닫기 지원.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // 닫기: 메모리 state로만 억제 → 새로고침하면 다시 노출, 같은 세션 페이지 이동에선 유지
  const dismiss = () => setOpen(false);

  // 오늘 하루 보지 않기: localStorage 24시간 미노출
  const hideForDay = () => {
    try {
      localStorage.setItem(HIDE_UNTIL_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  const goToEvent = () => {
    setOpen(false);
    navigate("/event");
  };

  if (!open) return null;

  return (
    <div
      className="fixed z-[100] left-3 bottom-3 sm:left-4 sm:top-20 sm:bottom-auto"
      role="dialog"
      aria-label="D-GO 출시 이벤트 안내"
    >
      <div className="relative w-[72vw] max-w-[280px] sm:w-[320px] sm:max-w-none max-h-[60vh] sm:max-h-[80vh] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col">

        {/* 닫기 (X) */}
        <button
          onClick={dismiss}
          aria-label="팝업 닫기"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X size={18} />
        </button>

        {/* 배너 이미지 (클릭 시 이벤트로 이동) — STK26 + D-GO 출시 이벤트 */}
        <button
          onClick={goToEvent}
          className="block w-full flex-1 min-h-0 overflow-y-auto cursor-pointer"
          aria-label="이벤트 배너 (자세히 보기)"
        >
          <img src={HERO_IMG} alt="STK 2026 · D-GO 출시 이벤트 안내" className="w-full h-auto block" />
          <img src={PROMO_IMG} alt="D-GO 출시 EVENT · 무료 1TB 업그레이드" className="w-full h-auto block" />
        </button>

        {/* 자세히 보기 CTA */}
        <div className="p-3 sm:p-4">
          <button
            onClick={goToEvent}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent-cyan)] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            이벤트 자세히 보기
          </button>
        </div>

        {/* 하단 다시안봄 바 */}
        <div className="flex border-t border-[var(--border-hairline)] text-sm">
          <button
            onClick={hideForDay}
            className="flex-1 py-3.5 font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors border-r border-[var(--border-hairline)]"
          >
            오늘 하루 보지 않기
          </button>
          <button
            onClick={dismiss}
            className="flex-1 py-3.5 font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
