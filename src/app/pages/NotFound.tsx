import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient-cyan mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-lg text-[var(--text-secondary)]">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
          >
            <Home size={20} />
            홈으로 가기
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-semibold hover:bg-[var(--accent-cyan-soft)] transition-colors"
          >
            <ArrowLeft size={20} />
            이전 페이지
          </button>
        </div>

        <div className="mt-12 glass-card p-6 inline-block">
          <p className="text-sm text-[var(--text-secondary)]">
            도움이 필요하신가요?<br />
            <a href="mailto:biz@boanlinks.com" className="text-[var(--accent-cyan)] hover:underline">
              biz@boanlinks.com
            </a>
            {" "}으로 문의해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
