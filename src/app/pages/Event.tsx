import { useRef } from "react";

export default function Event() {
  const ref = useRef<HTMLIFrameElement>(null);

  // 동일 출처(public/event.html)이므로 로드 후 내부 높이에 맞춰 iframe 높이를 조정
  const handleLoad = () => {
    const frame = ref.current;
    if (frame?.contentWindow?.document?.documentElement) {
      frame.style.height =
        frame.contentWindow.document.documentElement.scrollHeight + "px";
    }
  };

  return (
    <div className="w-full bg-[var(--bg-elevated)] flex justify-center py-6 md:py-10">
      <iframe
        ref={ref}
        src="/event.html"
        title="D-GO 출시 EVENT"
        onLoad={handleLoad}
        scrolling="no"
        className="w-full max-w-[640px] border-0 bg-white rounded-xl shadow-lg overflow-hidden"
        style={{ minHeight: "100vh" }}
      />
    </div>
  );
}
