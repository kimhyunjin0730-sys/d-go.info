import type { ReactNode } from "react";
import { Check, FileSearch, KeyRound, LockOpen, ShieldCheck, WifiOff } from "lucide-react";
import type { ScreenState } from "../../content";
import { cn } from "../ui/utils";

const LABELS: Record<ScreenState, string> = {
  key: "D-GO 본체 화면: PUF 보안키 대기, 잠김 상태",
  boot: "D-GO 본체 화면: PUF 인증 완료, 인가부팅",
  auth: "D-GO 본체 화면: C·D·E 등급별 비밀번호 인증",
  access: "D-GO 본체 화면: 대시보드, 금고 열림과 로컬 AI 가동",
};

/**
 * Replica of the D-GO front display. Renders a compact "glance" layout when
 * small (on the product photo) and the full UI when there is room.
 */
export default function DeviceScreen({
  state,
  fill = false,
  className,
  label,
}: {
  state: ScreenState;
  fill?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <div role="img" aria-label={label ?? LABELS[state]} className={cn("ds", fill && "ds--fill", className)}>
      <div className="ds-inner" aria-hidden="true">
        {state === "key" && <KeyScreen />}
        {state === "boot" && <BootScreen />}
        {state === "auth" && <AuthScreen />}
        {state === "access" && <AccessScreen />}
      </div>
    </div>
  );
}

/** Dark device frame around a DeviceScreen. */
export function DeviceBezel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[14px] bg-[#1B1E2C] p-[5px] shadow-[0_18px_40px_-24px_rgba(0,1,71,0.6)]", className)}>{children}</div>;
}

function TopBar({ left, status, tone }: { left: string; status: string; tone: "locked" | "ok" }) {
  return (
    <div className="ds-top">
      <span className="ds-mono ds-dim">{left}</span>
      <span className={cn("ds-mono ds-status", tone === "locked" ? "ds-status--locked" : "ds-status--ok")}>{status}</span>
    </div>
  );
}

function Ring() {
  return (
    <div className="ds-ring">
      <svg className="ds-ring-track" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
        <circle className="ds-ring-progress" cx="50" cy="50" r="46" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <div className="ds-ring-core">
        <ShieldCheck strokeWidth={2} />
        <span>Verified</span>
      </div>
    </div>
  );
}

function KeyScreen() {
  return (
    <>
      <div className="ds-glance">
        <KeyRound className="ds-led" strokeWidth={2} />
        <span>키 대기</span>
      </div>
      <div className="ds-full">
        <TopBar left="D-GO VAULT" status="LOCKED" tone="locked" />
        <div className="ds-center">
          <div className="ds-keyslot">
            <KeyRound strokeWidth={2} />
          </div>
          <p className="ds-title">PUF 보안키를 꽂아주세요</p>
          <p className="ds-sub ds-dim">등록된 키가 없으면 기동하지 않습니다</p>
        </div>
      </div>
    </>
  );
}

function BootScreen() {
  return (
    <>
      <div className="ds-glance">
        <ShieldCheck className="ds-led" strokeWidth={2} />
        <span>Verified</span>
      </div>
      <div className="ds-full">
        <div className="ds-top" style={{ justifyContent: "center" }}>
          <span className="ds-mono ds-dim">PUF AUTHENTICATION</span>
        </div>
        <div className="ds-center">
          <Ring />
          <p className="ds-sub ds-dim">인증 완료 · 올바른 키로 인가부팅</p>
        </div>
      </div>
    </>
  );
}

function AuthScreen() {
  return (
    <>
      <div className="ds-glance">
        <span className="ds-mono ds-led" style={{ letterSpacing: "0.2em" }}>
          C·D·E
        </span>
        <span>등급 인증</span>
      </div>
      <div className="ds-full">
        <TopBar left="ACCESS LEVEL" status="PUF OK" tone="ok" />
        <div className="ds-auth">
          <div className="ds-tiers">
            <div className="ds-tier">
              <b>C</b>일반
              <Check strokeWidth={3} />
            </div>
            <div className="ds-tier">
              <b>D</b>보호
              <Check strokeWidth={3} />
            </div>
            <div className="ds-tier ds-tier--active">
              <b>E</b>기밀
              <small>생체인증 대기</small>
            </div>
          </div>
          <div className="ds-pin">
            <span className="ds-sub ds-dim">관리자 비밀번호</span>
            <div className="ds-dots">
              <i className="on" />
              <i className="on" />
              <i className="on" />
              <i className="on" />
              <i />
              <i />
            </div>
            <div className="ds-keypad">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "CLR", "0", "OK"].map((k) => (
                <span key={k} className={k === "OK" ? "ok" : undefined}>
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AccessScreen() {
  return (
    <>
      <div className="ds-glance">
        <LockOpen className="ds-led" strokeWidth={2} />
        <span>금고 열림</span>
      </div>
      <div className="ds-full">
        <TopBar left="D-GO SECURITY VAULT" status="OFFLINE" tone="ok" />
        <div className="ds-grid">
          <div className="ds-tile ds-tile--open">
            <LockOpen strokeWidth={2} />
            <div>
              <strong>금고 열림</strong>
              <div>배정 등급 C · D</div>
            </div>
          </div>
          <div className="ds-tile">
            <span className="ds-dim">암호화 문서</span>
            <strong>
              128<small>건</small>
            </strong>
          </div>
          <div className="ds-tile">
            <span className="ds-dim" style={{ display: "flex", alignItems: "center", gap: "0.4em" }}>
              <FileSearch strokeWidth={2} style={{ width: "1.1em", height: "1.1em" }} /> 로컬 AI
            </span>
            <div>
              <div style={{ marginBottom: "0.45em" }}>계약서 요약 중</div>
              <div className="ds-bar" />
            </div>
          </div>
          <div className="ds-tile">
            <span className="ds-dim" style={{ display: "flex", alignItems: "center", gap: "0.4em" }}>
              <WifiOff strokeWidth={2} style={{ width: "1.1em", height: "1.1em" }} /> 외부 통신
            </span>
            <strong>
              0<small>건</small>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
