import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { X } from "lucide-react";

const HIDE_UNTIL_KEY = "dgo-event-popup-hide-until"; // localStorage: 24h dismissal
const SESSION_KEY = "dgo-event-popup-closed"; // sessionStorage: this-session dismissal
const HERO_IMG = "https://img2.stibee.com/74826_3399701_1779437867798726041.jpg";
// 행사 종료: 2026년 7월 1일 00:00(KST) 이후로는 팝업 미노출 (방문자 시간대 무관)
const EVENT_END = new Date("2026-07-01T00:00:00+09:00").getTime();

export default function EventPopup() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 사이트 첫 접속 시 1회 노출 (Root는 라우트 전환 시 언마운트되지 않으므로 mount 1회 = 첫 접속)
  useEffect(() => {
    if (Date.now() >= EVENT_END) return; // 7월부터(행사 종료) 미노출
    if (location.pathname === "/event") return; // 이미 이벤트 페이지면 생략
    try {
      const until = Number(localStorage.getItem(HIDE_UNTIL_KEY) || 0);
      if (Date.now() < until) return; // "1일 동안 보지 않음" 유효 기간 내
      if (sessionStorage.getItem(SESSION_KEY)) return; // 이번 세션에서 이미 닫음
    } catch {
      /* storage 접근 불가 시 그냥 노출 */
    }
    setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 코너 팝업: 배경 딤/스크롤 잠금 없음(홈 화면 그대로 노출·조작 가능). Esc로만 닫기 지원.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeForSession();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const closeForSession = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  const hideForDay = () => {
    try {
      localStorage.setItem(HIDE_UNTIL_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  const goToEvent = () => {
    closeForSession();
    navigate("/event");
  };

  if (!open) return null;

  return (
    <div
      className="fixed z-[100] inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-auto sm:left-4 sm:top-20"
      role="dialog"
      aria-label="D-GO 출시 이벤트 안내"
    >
      <div className="relative w-full sm:w-[340px] max-h-[85vh] overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col">

        {/* 닫기 (X) */}
        <button
          onClick={closeForSession}
          aria-label="팝업 닫기"
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
        >
          <X size={18} />
        </button>

        {/* 배너 이미지 (클릭 시 이벤트로 이동) */}
        <button
          onClick={goToEvent}
          className="block w-full overflow-y-auto cursor-pointer"
          aria-label="이벤트 배너 (자세히 보기)"
        >
          <img src={HERO_IMG} alt="STK 2026 · D-GO 출시 이벤트 안내" className="w-full h-auto block" />
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
            1일 동안 보지 않음
          </button>
          <button
            onClick={closeForSession}
            className="flex-1 py-3.5 font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
