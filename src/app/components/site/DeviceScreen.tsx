import type { ReactNode } from "react";
import {
  Activity,
  Calendar,
  Check,
  Clock,
  FileLock2,
  Lock,
  Power,
  ScrollText,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Thermometer,
  TriangleAlert,
  DoorOpen,
  X,
} from "lucide-react";
import type { ScreenState } from "../../content";
import { cn } from "../ui/utils";

/*
 * Replica of the D-GO front display, following the device UI design deck
 * "D-GO Vault UI 디자인 설계 화면" (2026-07-27). Renders a compact "glance"
 * layout when small (on the product photo) and the designed screen when
 * there is room.
 */

const LABELS: Record<ScreenState, string> = {
  key: "D-GO 본체 화면: PUF 키 제거됨, 하드웨어 보안 접근 차단",
  boot: "D-GO 본체 화면: PUF 인증 완료(Safety Verified)",
  auth: "D-GO 본체 화면: 관리자 비밀번호 확인 키패드",
  pair: "D-GO 본체 화면: 신규 디바이스 페어링 6자리 코드",
  access: "D-GO 본체 화면: D-GO Security Vault 대시보드, 금고 열림",
};

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
        {state === "pair" && <PairScreen />}
        {state === "access" && <AccessScreen />}
      </div>
    </div>
  );
}

/** Dark device frame around a DeviceScreen. */
export function DeviceBezel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-[14px] bg-[#1B1E2C] p-[5px] shadow-[0_18px_40px_-24px_rgba(0,1,71,0.6)]", className)}>{children}</div>;
}

function Glance({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="ds-glance">
      {icon}
      <span>{children}</span>
    </div>
  );
}

/** PUF key removed — the device refuses to run (design: 하드웨어 보안 접근 차단). */
function KeyScreen() {
  return (
    <>
      <Glance icon={<ShieldAlert style={{ color: "var(--dsc-red)" }} strokeWidth={2} />}>PUF 키 필요</Glance>
      <div className="ds-full">
        <div className="ds-center">
          <div className="ds-alert">
            <TriangleAlert strokeWidth={2} />
            <p className="ds-alert-title">하드웨어 보안 접근 차단</p>
            <p className="ds-alert-body">
              PUF 하드웨어 키가 연결되지 않았습니다.
              <br />
              사용하시려면 PUF 키를 연결해 주세요.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/** PUF authentication succeeded (design: Safety Verified!). */
function BootScreen() {
  return (
    <>
      <Glance icon={<ShieldCheck style={{ color: "var(--dsc-cyan)" }} strokeWidth={2} />}>Verified</Glance>
      <div className="ds-full">
        <div className="ds-center">
          <p className="ds-heading">PUF AUTHENTICATION</p>
          <div className="ds-ring">
            <svg className="ds-ring-track" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="ds-ring-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#35D48A" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="46" stroke="rgba(255,255,255,0.10)" strokeWidth="5" />
              <circle className="ds-ring-progress" cx="50" cy="50" r="46" stroke="url(#ds-ring-grad)" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="ds-ring-core">
              <ShieldCheck strokeWidth={2} />
              <span>Safety</span>
              <b>Verified!</b>
            </div>
          </div>
          <span className="ds-pill ds-pill--green">인증이 성공적으로 완료되었습니다</span>
        </div>
      </div>
    </>
  );
}

/** Admin passcode keypad (design: 관리자 비밀번호 확인). */
function AuthScreen() {
  return (
    <>
      <Glance icon={<Lock style={{ color: "var(--dsc-green)" }} strokeWidth={2} />}>비밀번호 확인</Glance>
      <div className="ds-full">
        <div className="ds-center" style={{ gap: "0.5em" }}>
          <span className="ds-pill ds-pill--green">비밀번호 등록됨</span>
          <p className="ds-heading">관리자 비밀번호 확인</p>
          <div className="ds-dots">
            <i className="on" />
            <i className="on" />
            <i />
            <i />
          </div>
          <div className="ds-keypad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "CLR", "0", "OK"].map((k) => (
              <span key={k} className={k === "OK" ? "ok" : k === "CLR" ? "clr" : undefined}>
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/** New device pairing code shown on the vault (design: 신규 디바이스 페어링). */
function PairScreen() {
  return (
    <>
      <Glance icon={<Smartphone style={{ color: "var(--dsc-blue)" }} strokeWidth={2} />}>기기 승인</Glance>
      <div className="ds-full">
        <div className="ds-center" style={{ gap: "0.55em" }}>
          <p className="ds-heading" style={{ color: "var(--dsc-cyan)" }}>
            신규 디바이스 페어링
          </p>
          <p className="ds-sub ds-dim">모바일 앱에 표시된 6자리 코드가 아래와 같습니까?</p>
          <div className="ds-code">
            {["4", "8", "2", "0", "1", "5"].map((n, i) => (
              <b key={i}>{n}</b>
            ))}
          </div>
          <div className="ds-choice">
            <span>
              <X strokeWidth={2.5} /> 일치하지 않음
            </span>
            <span className="yes">
              <Check strokeWidth={2.5} /> 일치함
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

/** Security Vault dashboard (design: Phase4_1). */
function AccessScreen() {
  return (
    <>
      <Glance icon={<DoorOpen style={{ color: "var(--dsc-amber)" }} strokeWidth={2} />}>금고 열림</Glance>
      <div className="ds-full">
        <div className="ds-bar-top">
          <h4>
            <Shield strokeWidth={2} /> D-GO Security Vault
          </h4>
          <div className="ds-meta">
            <span>
              <Calendar size={11} style={{ display: "inline", verticalAlign: "-1px" }} /> 2026.07.21
            </span>
            <span>
              <Clock size={11} style={{ display: "inline", verticalAlign: "-1px" }} /> 16:51:02
            </span>
            <span>
              <Lock size={11} style={{ display: "inline", verticalAlign: "-1px" }} /> 화면잠금
            </span>
            <span className="off">
              <Power size={11} style={{ display: "inline", verticalAlign: "-1px" }} /> 전원끄기
            </span>
          </div>
        </div>

        <div className="ds-cards">
          <div className="ds-card ds-card--vault">
            <h5>
              <DoorOpen strokeWidth={2} /> Vault Door Status
              <span className="ds-toggle" />
            </h5>
            <p className="ds-state">금고 열림</p>
            <p className="ds-dim ds-opt">터치하여 금고 닫기</p>
          </div>

          <div className="ds-card">
            <h5>
              <FileLock2 strokeWidth={2} /> Encrypted Files
            </h5>
            <p className="ds-metric">
              128<small>EA</small>
            </p>
            <p className="ds-row ds-opt">
              사용 중인 스토리지 <b className="ds-blue">2.4GB</b>
            </p>
          </div>

          <div className="ds-card ds-card--health">
            <h5>
              <Activity strokeWidth={2} /> System Health
            </h5>
            <p className="ds-metric">
              48.2<small>°C</small>
              <Thermometer size={12} style={{ display: "inline", verticalAlign: "1px", marginLeft: "0.3em" }} />
            </p>
            <p className="ds-row ds-opt">
              PUF 모듈 <b className="ds-green">정상 (0x64)</b>
            </p>
          </div>

          <div className="ds-card ds-card--device">
            <h5>
              <Smartphone strokeWidth={2} /> Connected Device
            </h5>
            <p className="ds-blue ds-opt" style={{ fontSize: "0.9em" }}>
              mTLS 보안 세션 활성화
            </p>
            <p style={{ fontWeight: 700 }}>iPhone 14 Pro Max</p>
            <p className="ds-green ds-opt" style={{ fontSize: "0.9em" }}>
              안전하게 연결됨
            </p>
          </div>

          <div className="ds-card ds-card--logs">
            <h5>
              <ScrollText strokeWidth={2} /> Recent Access Logs
            </h5>
            <div className="ds-logs">
              <p className="ds-log">
                <time>14:28</time>
                <span>Admin&apos;s iPhone 접속 승인</span>
                <span className="ds-tag ds-tag--app">App</span>
              </p>
              <p className="ds-log">
                <time>14:28</time>
                <span>금고 닫힘 확인 (물리 센서)</span>
                <span className="ds-tag">System</span>
              </p>
              <p className="ds-log ds-opt">
                <time>14:28</time>
                <span>신규 보안 문서 업로드 (3건)</span>
                <span className="ds-tag ds-tag--files">Files</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
