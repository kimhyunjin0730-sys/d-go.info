// Shared copy — sourced from the 2026 catalog (카탈로그) and graphics (그래픽) in marketing/.
// Keep contact details here so every page stays in sync.

export const CONTACT = {
  email: "sales@d-go.info",
  phone: "1800-0705",
  tel: "tel:18000705",
  company: "(주)진앤현시큐리티",
  addressLines: ["경기 하남시 미사대로 540", "현대지식산업센터 한강미사2차 비동 614호"],
  kakaoChannel: "https://pf.kakao.com/_QtXnX",
  kakaoChat: "https://pf.kakao.com/_QtXnX/chat",
  hours: "평일 09:00–18:00",
  holidays: "주말·공휴일 휴무",
  site: "www.d-go.info",
} as const;

export function mailto(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  // RFC 6068: spaces as %20, line breaks as CRLF
  const query = params.toString().replace(/\+/g, "%20").replace(/%0A/g, "%0D%0A");
  return `mailto:${CONTACT.email}${query ? `?${query}` : ""}`;
}

export const SALES_PARTNERS = [
  "진앤현시큐리티",
  "ICTK",
  "MTT GLOBAL",
  "쿠도커뮤니케이션",
  "솔모정보기술",
  "보헤미안 OS",
  "워킹랩",
] as const;

export type ScreenState = "key" | "boot" | "auth" | "pair" | "access";

/** 전원을 켤 때마다 — 기기 본체의 매 가동 흐름 */
export const BOOT_STEPS: {
  code: string;
  state: ScreenState;
  title: string;
  tag: string;
  body: string;
  strong: string;
  screenLabel: string;
}[] = [
  {
    code: "KEY",
    state: "key",
    title: "물리키 연결",
    tag: "PUF USB 삽입",
    body: "등록된 전용 키(복제 불가 PUF USB)를 본체에 꽂습니다.",
    strong: "키가 없으면 전원조차 켜지지 않습니다.",
    screenLabel: "본체 화면 — PUF 키 미연결, 하드웨어 보안 접근 차단",
  },
  {
    code: "BOOT",
    state: "boot",
    title: "인가부팅",
    tag: "보안키 인증 시",
    body: "본체 화면에서 인증 결과를 확인합니다.",
    strong: "올바른 키일 때만 기동하며, 키를 뽑으면 그 순간 전체 잠금됩니다.",
    screenLabel: "본체 화면 — PUF 인증 완료(Safety Verified)",
  },
  {
    code: "AUTH",
    state: "auth",
    title: "등급별 보안 인증",
    tag: "C·D·E 권한 승인",
    body: "문서 중요도에 따라 3단계 — C 일반(ID·비밀번호), D 보호(+2차 인증), E 기밀(+스마트폰 생체인증).",
    strong: "중요한 문서일수록 여는 방법이 엄격해집니다.",
    screenLabel: "본체 화면 — 관리자 비밀번호 확인",
  },
  {
    code: "ACCESS",
    state: "access",
    title: "배정 등급 접근",
    tag: "C·D·E 범위 열람",
    body: "승인된 범위의 문서만 열리고, 인터넷 없이 문서 검색·요약을 시작합니다. 실물 보관은 내장 금고 서랍(A4)으로.",
    strong: "동시에 로컬 AI가 가동됩니다.",
    screenLabel: "본체 화면 — D-GO Security Vault 대시보드",
  },
];

/** 0건 · PUF · 0원 */
export const PROOF_POINTS = [
  { figure: "0", unit: "건", title: "외부누출", body: "나가는 통신 경로 자체가 없는 폐쇄망 구조" },
  { figure: "PUF", unit: "", title: "복제 불가 보안칩", body: "반도체 지문 인증 · 키를 뽑는 순간 전체 잠금" },
  { figure: "0", unit: "원", title: "구독료 없는 구축형", body: "영구 라이선스 · 로컬 AI 검색 및 요약 내장" },
] as const;

/** 01 KEEP / 02 PROTECT / 03 USE AI */
export const PROMISES = [
  { label: "Keep", title: "문서도 실물도, 하나의 금고에", body: "계약서 데이터와 함께 인감·원본 같은 실물까지 함께 보관합니다." },
  { label: "Protect", title: "애초에, 나갈 길이 없다", body: "인터넷과 물리적으로 분리. 클라우드에 보내지 않고 사용합니다." },
  { label: "Use AI", title: "금고 안에서, AI가 돕는다", body: "금고 속 문서를 AI가 검색·요약. 외부 전송도, 구독료도 없습니다." },
] as const;

/** 3단 보안 등급 */
export const TIERS = [
  { grade: "C", name: "일반", auth: "아이디·비밀번호", scope: "일상 업무 문서" },
  { grade: "D", name: "보호", auth: "+2단계 인증", scope: "계약·인사·재무" },
  { grade: "E", name: "기밀", auth: "+생체인증", scope: "핵심 기밀·지식재산" },
] as const;

/** 이런 분들께 */
export const AUDIENCES = [
  { title: "법률 · 회계", body: "비밀 유지 의무가 있는 계약서를 AI로 다루고 싶은 분" },
  { title: "연구 · 제조", body: "도면·미공개 기술자료를 유출 없이 축적하려는 분" },
  { title: "의료 · 공공", body: "개인정보가 포함된 문서를 규제 안에서 활용하려는 분" },
] as const;

/** 처음 도입할 때는 — 최초 1회 */
export const ONBOARDING = [
  {
    role: "관리자",
    note: "최초 설정 · 도입 시 1회",
    steps: [
      { title: "앱 설치", sub: "PC·모바일" },
      { title: "기기 등록", sub: "근접 + PUF 검증" },
      { title: "화면 승인", sub: "6자리 코드" },
      { title: "관리자 등록", sub: "비밀번호 설정" },
      { title: "대시보드", sub: "통합 관리" },
    ],
  },
  {
    role: "팀원",
    note: "초대·등록 · 관리자가 초대",
    steps: [
      { title: "앱 설치", sub: "PC·모바일" },
      { title: "초대 QR 스캔", sub: "1회용 QR" },
      { title: "계정 생성", sub: "ID·비밀번호 등록" },
      { title: "로그인", sub: "계정으로 접속" },
      { title: "배정 등급 접근", sub: "C·D·E 범위" },
    ],
  },
] as const;

/** 도입도 간단 */
export const EASY_ADOPTION = [
  { title: "월 비용 없음", body: "구독료 없는 구축형 · 영구 라이선스" },
  { title: "클라우드 계약·공사 없음", body: "외부 서비스 가입도, 망 공사도 필요 없습니다" },
  { title: "책상 위 1대로 완결", body: "책상에 놓는 것만으로 설치가 끝납니다" },
] as const;

export const HARDWARE_CHIPS = ["폐쇄망 Local AI NPU 6 TOPS", "AES-256 mTLS", "물리 보안 금고 내장"] as const;

export const PLATFORMS = ["Windows", "macOS", "Linux", "iOS", "Android"] as const;
