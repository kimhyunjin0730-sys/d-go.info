# D-GO Vault 웹사이트 고도화 기획서 (확정: Option B — 전면 재구성)

> **Source:** `D-GO Vault 시스템 아키텍처.pdf` + `public/images/renders/*` + 기존 `D-GO_정의서_v2.md` / `d-go-info-website.md`
> **Target:** 현재 React 사이트 전면 재구성
> **Review lens:** Web Interface Guidelines + 구조적 리뷰 관점

---

## 0. 사이트 목적 & 운영 전제

- **용도:** **QR 코드 랜딩 홍보 채널** — 오프라인(전시·리플렛·제품 패키지·명함 QR)에서 스캔 → 본 사이트로 진입 → 제품 인지 → 문의/구매 경로로 전환.
- **판매 채널:** 사이트 자체가 직접 결제를 처리하진 않고, **"판매 채널 허브"** 역할 (파트너/총판/직접 문의).
- **문의 경로 단일화:** 모든 문의 폼은 **`biz@boanlinks.com`** 으로 수신되도록 `mailto:` 또는 간단한 폼→mailto 조합으로 구현 (백엔드 없음 전제).
- **앱/매뉴얼:** 현재 `Manual.jsx`에 있는 기존 앱(APK + 한컴 Viewer 기반)을 **임시 레퍼런스로 유지**. 정식 앱/매뉴얼은 추후 교체 예정이므로, 매뉴얼 섹션은 "임시 자료 / 정식 버전은 업데이트 예정" 뉘앙스를 유지해야 함.
- **백엔드 없음:** 정적 배포(Vercel/GitHub Pages) 가정. 폼 제출은 `mailto:biz@boanlinks.com` 로 fallback.

### QR 랜딩 관점에서의 설계 원칙

1. **모바일 퍼스트.** QR 스캔의 90%는 폰. 히어로·CTA·대시보드 목업 전부 세로 화면 기준 우선.
2. **첫 화면 3초 안에 "이게 뭔지" 전달.** 히어로 헤드라인 + 렌더 한 장 + 구매/문의 CTA.
3. **스크롤 1~2회로 핵심 가치 전달.** 긴 기술 설명은 `/technology`로 분리.
4. **문의는 한 탭으로 끝.** 상단 sticky `문의하기` 버튼은 언제나 `mailto:biz@boanlinks.com` 로 바로 연결.

---

## 0-1. 고도화 목표

현재 사이트는 **마케팅 브로셔** 수준이다. PDF의 시스템 아키텍처는 공개해도 무방한 수준의 기술적 차별화 요소(PUF Zero-Knowledge, 물리-디지털 이중복구, 환경센싱, Secure Port, Direct Wi-Fi 폐쇄형 페어링)를 담고 있어 **"신뢰를 파는 보안 제품"** 의 웹사이트에 반드시 반영돼야 한다.

목표:
1. **기술 신뢰도(Trust)** — 아키텍처를 시각화해 "진짜 폐쇄형"을 눈으로 증명
2. **제품 감도(Desirability)** — 3D 렌더를 1급 자산으로 활용, Teenage Engineering / Apple급 제품 페이지
3. **정보 구조(IA)** — 기술/운영/구매/지원의 경로를 명확히 분리
4. **전환(Conversion)** — QR 랜딩 → `biz@boanlinks.com` 문의 또는 구매 채널까지 **최단 경로**

---

## 1. 사이트맵 재설계 (Before → After)

### Before
```
/ · /product · /manual · /purchase · /support
```

### After
```
/                    메인 랜딩 (히어로 + 핵심가치 + 테크 티저)
/product             제품 개요 (렌더 갤러리 + 스펙 + 포트 설명)
/technology  ★NEW    기술 아키텍처 (PUF · Zero-Knowledge · 복구 · 환경센싱)
/dashboard   ★NEW    Admin 대시보드 미리보기 (모바일 앱 UI 목업)
/manual              사용자 매뉴얼 · 페어링 · 복구 시나리오
/purchase            구매 / 판매채널
/support             문의센터 · FAQ · 보안공지
```

**이유:** PDF의 기술 내용은 `/product` 한 페이지로 흡수하기엔 양이 많고, 분리 시 SEO 및 내부 링크 허브로도 활용 가능.

---

## 2. 페이지별 구성 상세

### 2-1. `/` 메인 랜딩 (Bento Grid 구조)

**섹션 순서 & 그리드 배치**

| # | Section | Bento span | 내용 | 자산 |
|---|---|---|---|---|
| 1 | Hero | 12 (full) | "당신의 데이터, 오직 당신의 손안에." + 서브 + CTA 2개 ("도입 문의" / "제품 보기") | `render-01` 우측 플로팅 + cyan radial glow |
| 2 | Trust Bar | 12 | `ICTK PUF` `KC` `UL CLASS 125` `MADE IN KOREA` 배지 (uppercase) | SVG 로고 |
| 3 | **Feature Bento** | 12 | **3개 핵심 카드** (아래 상세) | — |
| 4 | Architecture Teaser | 8 / 4 | 8칸: 아키텍처 미니 SVG + `/technology` 링크 · 4칸: "Zero-Knowledge" 요약 | — |
| 5 | Product Shot | 6 / 6 | 6칸: `render-02` · 6칸: 3개 스펙 요약 + `/product` 링크 | — |
| 6 | Dashboard Peek | 12 | `/dashboard` 프리뷰 3위젯 스크린샷 | — |
| 7 | Bottom CTA | 12 | "지금 도입 문의" → `mailto:biz@boanlinks.com` + 운영시간/전화 | — |

**3 핵심 기능 카드 (#3 Feature Bento — 사용자 요청 반영)**

12칸 안에서 `4 / 4 / 4` 또는 `5 / 4 / 3` 비대칭 Bento로 구성:

1. **`SECURE PORT` 카드**
   - Headline: *"PUF가 열어야만 열리는 포트"*
   - Body: 관리자 앱에서 PUF 승인이 떨어진 순간에만 USB-C / 네트워크 드라이브가 활성화. 그 외 시간엔 물리적으로 존재하지만 OS 레벨에서 부재.
   - Visual: 상단 cyan LED 스트로브 + 전/후면 포트 콜아웃 라인
   - Badge: `SECURE PORT CONTROL`

2. **`OCR SCAN` 카드**
   - Headline: *"카메라로 찍고, 원본은 금고로."*
   - Body: 촬영된 문서는 OCR 후 PDF로 변환되어 본체에 암호화 저장. 클라이언트 단말에는 **원본이 남지 않음**.
   - Visual: 문서 스캔 프레임 + OCR 포커스 라인 애니메이션(호흡)
   - Badge: `DOCUMENT OCR`

3. **`DATA INTEGRITY` 카드**
   - Headline: *"변조되면 바로 알 수 있도록."*
   - Body: 모든 파일은 해시 · 생성자 ID · 타임스탬프 · 디지털 서명 · 파일 접근 이력을 묶어 저장. 원본 증명과 법적 효력 가능.
   - Visual: 해시 스트링 모노폰트(JetBrains Mono) + 체크마크 + 서명 지문 SVG
   - Badge: `TAMPER-PROOF`

이 3개 카드는 **`/` 메인의 핵심 전환 포인트**이자 `/technology`로 유도하는 프리뷰 역할.

### 2-2. `/product` 제품

- **Hero Gallery**: `render-00 ~ 05` 스와이프 갤러리 (썸네일 + 큰 이미지)
- **Callout Diagram**: 전면(`render-05`)에 노브·USB-A·USB-C·LED·배지 라벨 오버레이 (SVG + 좌표)
- **후면 포트 설명**: `render-04` + USB-A / Thunderbolt ×3 라벨
- **스펙 테이블**: 크기 / 무게 / 저장용량 / RAID / UPS / 온도범위(UL CLASS 125) / 인증
- **What's in the box**: 본체 · PUF 물리키 · USB-C 케이블 · 퀵스타트

### 2-3. `/technology` ★ 신규

> 이 페이지가 고도화의 **심장**. PDF 내용을 시각적 섹션으로 완전 재구성.

1. **Hero**: "Zero-Knowledge, By Hardware." + 1문단 요약
2. **Architecture Diagram** (SVG, 인터랙티브)
   ```
   ┌────────── 폐쇄망 1:1 Direct Wi-Fi ──────────┐
   │                                              │
   │   [Mobile Client]  ──pair──▶  [D-GO Vault]  │
   │                                    │         │
   │                              ┌─────┴─────┐   │
   │                              │ PUF Core  │   │
   │                              │(ICTK HW)  │   │
   │                              └─────┬─────┘   │
   │                    ┌────────┬──────┼────┬──┐│
   │                    ▼        ▼      ▼    ▼  ▼│
   │                  RAID1    UPS   Sensor SecurePort│
   └──────────────────────────────────────────────┘
   ```
   각 노드 클릭 → 우측 패널에 상세 설명
3. **Pillar 1 — PUF 기반 암호 제어 (Core Logic)**
   - 고유 키 생성/파기 · 메모리 휘발성 키 관리
   - Zero-Knowledge 암호화 (외부 서버 없이 본체 내부 완결)
4. **Pillar 2 — 물리-디지털 이중 복구**
   - 디지털 인증 분실 시 물리 키 + HW 정보 조합으로 PUF 키 재호출
   - 전자식 버튼 + PUF 전자키 연동 모터 제어
5. **Pillar 3 — 환경 센싱 & 데이터 보호**
   - 125°F 초과 시 디지털 섹션 자동 셧다운
   - RAID 1 실시간 미러링
6. **Pillar 4 — 하이브리드 2FA + Secure Port**
   - 키패드 + PUF 하드웨어 키 이중 인증
   - PUF 승인 시에만 USB-C / 네트워크 드라이브 활성화
7. **신뢰성 테이블** (PDF 표 그대로)
   | 구분 | 기능명 | 주요 내용 |
8. **FAQ**: "Zero-Knowledge가 뭐죠?" / "PUF 물리키를 잃어버리면?" / "양자 암호화는 실제로?"

### 2-4. `/purchase` 판매 채널 허브

> QR 랜딩 관점에서 "어디서 사나?"를 한 눈에. 결제는 사이트에서 처리하지 않음.

- **1차 CTA:** "법인·단체 도입 문의하기" → `mailto:biz@boanlinks.com`
- **2차:** 공식 판매 파트너 리스트 (로고 + 외부 링크). 현재 미정 항목은 "준비 중" 배지
- **견적 요청 폼** (`/support` 폼과 동일 엔진 재사용)
- **상담 가능 시간 / 평균 응답 시간** 명시로 신뢰 확보

### 2-5. `/dashboard` ★ 신규

모바일 앱 Admin Dashboard **목업**(실제 앱 없이도 기능을 "보여주는" 페이지):

- **Device Health Card**: 내부 온도/습도 게이지 (UL CLASS 125 경계선 표시)
- **Storage Card**: SSD 용량 + RAID 1 상태
- **UPS Card**: 배터리 잔량 + 전원 상태
- **Access Log**: 개폐이력(물리/디지털) 타임라인
- **Alert Card**: 충격/파괴 시도 감지 샘플
- **Secure Port Toggle**: USB-C 포트 활성화 상태
- **Capture Widget**: 카메라(OCR→PDF) / 음성(화자식별) 플로우 일러스트

구현은 **정적 스크린샷 + CSS로 그린 위젯** 조합. iPhone/Android 프레임 목업 안에 배치.

### 2-5. `/manual` 고도화 (임시 자료 유지 + 프레임만 정비)

> ⚠️ **주의:** 현재 매뉴얼·앱(APK/한컴 Viewer)은 **임시 레퍼런스**다. 정식 D-GO Vault 앱/매뉴얼로 교체될 예정이므로, 이 페이지는 **콘텐츠를 갈아끼우기 쉬운 구조**로만 정비한다.

- 상단 배너: "본 매뉴얼은 현재 예시 앱 기준입니다. 정식 버전은 업데이트 예정."
- 섹션 구조(콘텐츠는 현재 앱 기준 유지):
  - 앱 설치 (Android APK)
  - 첫 실행 / 권한 / 뷰어
  - 보안키 만들기
  - 파일 업로드/조회
  - FAQ (앱 관련 질문만)
- 다운로드 카드: APK / Quick Start / Full Manual / English Manual
  - 정식 앱 교체 시 **카드 데이터 배열만 수정**하면 되도록 컴포넌트화(`<DownloadList items={...} />`)
- **PDF의 Direct Wi-Fi 페어링/복구 시나리오는 이 페이지에 넣지 않고 `/technology`로 흡수** (정식 앱 나오기 전까지 혼선 방지)

### 2-6. `/support` — 문의센터 (단일 채널: biz@boanlinks.com)

> 사이트의 **전환 지점**. 어떤 페이지의 CTA든 결국 여기(또는 바로 `mailto:`)로 수렴.

- **연락처 카드 (최상단)**
  - 📧 `biz@boanlinks.com` (클릭 시 `mailto:` + 복사 버튼)
  - 📞 전화번호 (확정 시 입력, 미정이면 숨김)
  - 🕐 운영시간
  - 📍 주소 (㈜보안링스)
- **문의 폼**
  - 필드: 이름 · 연락처 · 이메일 · 회사/소속 · 문의 유형(select) · 내용
  - 문의 유형: 제품 구매 / 기술 지원 / 법인·단체 도입 / 파트너십·총판 / 기타
  - **제출 동작:** 백엔드 없음 → `mailto:biz@boanlinks.com?subject=...&body=...` 로 조립해서 사용자의 메일 클라이언트 오픈
  - 실패/차단 시 **폴백 UI**: "메일 앱이 열리지 않으면 아래 주소로 직접 보내주세요: biz@boanlinks.com" + 클립보드 복사 버튼
- **FAQ**: 구매·A/S·배송·보증 중심 (기술 FAQ는 `/technology`에 분리)
- **보안공지/CVE 섹션**: 프레임만 마련 (빈 상태 OK)

---

## 3. 디자인 시스템 (확정: High-tech Security SaaS · Bento)

> **무드보드 레퍼런스:** purplenet.kr 의 깔끔한 Bento Grid + 보안성을 강조한 High-tech SaaS 다크 톤. Linear / Vercel / Stripe 의 카드 디테일.

### 3-1. 컬러 (Deep Navy + Cyan, 다크 모드 단일)

```css
/* Surface */
--bg-primary:     #0F172A;   /* Deep Navy — 메인 배경 */
--bg-elevated:    #111B30;   /* 카드 베이스 (한 단계 밝게) */
--bg-overlay:     rgba(15, 23, 42, 0.72); /* sticky header / mobile sheet */

/* Glass card */
--card-bg:        rgba(17, 27, 48, 0.55);    /* backdrop-blur 대상 */
--card-blur:      blur(14px) saturate(140%);
--card-border:    1px solid rgba(148, 163, 184, 0.12);  /* slate-800 톤 */
--card-border-grad: linear-gradient(135deg, rgba(34,211,238,0.35), rgba(148,163,184,0.08) 40%, rgba(148,163,184,0.04));

/* Text */
--text-primary:   #F8FAFC;   /* slate-50 */
--text-secondary: #94A3B8;   /* slate-400 */
--text-muted:     #64748B;   /* slate-500 */

/* Accent */
--accent-cyan:    #22D3EE;   /* 포인트 컬러 — CTA, 라인, 배지 글로우 */
--accent-cyan-soft: rgba(34, 211, 238, 0.12);
--accent-orange:  #FF6B1A;   /* D-GO 로고 전용 (사용 최소화) */

/* Status */
--status-ok:      #22C55E;
--status-warn:    #F59E0B;
--status-crit:    #EF4444;

/* Hairline / divider */
--border-hairline: rgba(148, 163, 184, 0.10);
```

**카드 그라데이션 보더 패턴 (Tailwind 등가):**
```
border border-slate-800/60
bg-slate-900/55
backdrop-blur-xl
ring-1 ring-inset ring-white/5
shadow-[0_0_0_1px_rgba(34,211,238,0.05),0_30px_60px_-30px_rgba(34,211,238,0.15)]
```

### 3-2. 타이포

- 국문/영문 본문: **Pretendard Variable** (400/500/600)
- 영문 디스플레이/숫자: **Inter** / **Inter Tight** (700/800)
- Mono: **JetBrains Mono** — 스펙·해시·포트 라벨
- 제목: `font-weight: 700~800` (`font-bold`/`font-extrabold`)
- **Badge:** `uppercase` + `letter-spacing: 0.08em` + `font-size: 0.72rem` + cyan 글로우
- 숫자: `font-feature-settings: "tnum","ss01"`

### 3-3. Bento Grid 레이아웃

- 컨테이너 max-width `1200px`, side padding `clamp(20px, 4vw, 48px)`
- 그리드: `display: grid; gap: 16px; grid-template-columns: repeat(12, 1fr);`
  - 데스크탑: `col-span` 6/6, 4/4/4, 8/4, 4/8 등 자유 조합
  - 태블릿: 12 → 6
  - 모바일: 12 (1열, gap 12px)
- 카드: `border-radius: 20px`, padding `clamp(20px, 3vw, 32px)`
- 카드 hover: `translateY(-2px)` + cyan 보더 강조 (`ring-cyan-400/30`)
- 섹션 수직 간격 `clamp(80px, 10vw, 160px)`

### 3-4. 컴포넌트 디테일 (Glass Card)

```jsx
<div className="bento-card">
  <span className="badge">SECURE PORT</span>
  <h3>PUF 승인 시에만 열리는 포트</h3>
  <p>...</p>
  <div className="bento-card__glow" aria-hidden /> {/* 좌상단 cyan radial */}
</div>
```

- 모든 카드에 좌상단 `radial-gradient(circle at 0% 0%, rgba(34,211,238,.18), transparent 40%)` 글로우
- 호버 시 우하단에 두 번째 글로우 페이드 인
- 보더는 위 그라데이션 패턴 사용

### 3-5. 모션 (WIG 준수)

- 트랜지션 `180~260ms cubic-bezier(.2,.8,.2,1)`
- 카드 hover: lift + ring 강화 + glow 페이드 인
- 스크롤 인: `prefers-reduced-motion` 즉시 해제
- LED 시안 배지: 0.55 opacity → 1.0 `2.6s ease-in-out infinite` 호흡
- 히어로 BG: 미묘한 노이즈 텍스처 + 라디얼 시안 글로우 정적 (애니메이션 없음 — 모바일 성능)

---

## 4. 컴포넌트 목록 (신규/수정)

**신규**
- `<RenderGallery />` — 키보드 조작 가능한 스와이프 갤러리, 접근 가능한 썸네일
- `<ArchitectureDiagram />` — SVG + 포커서블 노드 + 우측 디테일 패널
- `<DashboardMockup />` — 위젯 카드 집합 (DeviceHealth, Storage, UPS, AccessLog, Alerts)
- `<SpecTable />` — 반응형 2열→1열 변환, `tnum` 숫자
- `<PortCallout />` — 이미지 + 절대좌표 라벨 (SVG overlay)
- `<Pillar />` — 기술 페이지의 4개 필라 카드

**수정**
- `<Header />` — `/technology`, `/dashboard` 메뉴 추가, sticky + blur
- `<Footer />` — 보안공지/CVE, KC/UL 인증 배지, GitHub/연락
- `<Home />` — 히어로 렌더 교체, Tech Teaser 섹션 추가

---

## 5. 접근성·품질 체크리스트 (Web Interface Guidelines)

- [ ] 모든 이미지에 의미 있는 `alt` (렌더: "D-GO Vault 45도 정면, 노브 LED 점등")
- [ ] 대비 4.5:1 이상 (시안 `#00C8E6`는 배경 대비 약하므로 텍스트로는 금지, 아이콘/보더만)
- [ ] 포커스 링 유지 (렌더 위 CTA 포함)
- [ ] 키보드만으로 갤러리/다이어그램 탐색
- [ ] `prefers-reduced-motion` 지원
- [ ] `<main>` 하나, 헤딩 레벨 순차 (h1→h2→h3)
- [ ] OG 이미지: `render-01` 크롭
- [ ] Lighthouse 목표: Perf 95+ / A11y 100 / SEO 100
- [ ] 이미지 `<img loading="lazy" decoding="async">` + `srcSet`
- [ ] `font-display: swap`

---

## 6. 구현 순서 (Option B 전면 재구성)

1. **Phase 1 — 디자인 토큰 + 글로벌 레이아웃** (`index.css` 변수화, 타이포 로드, Header/Footer 리뉴얼, sticky 문의 CTA)
2. **Phase 2 — Home 전면 리뉴얼** (QR 랜딩 관점: 히어로 렌더 + 3-Value + Tech Teaser + Bottom CTA)
3. **Phase 3 — `/product` 갤러리 + 포트 콜아웃** (렌더 자산 100% 활용)
4. **Phase 4 — `/technology` 신설** (PDF 내용 이식, 아키텍처 다이어그램 SVG, 4 Pillar)
5. **Phase 5 — `/dashboard` 신설** (Admin 앱 Concept Preview 위젯 목업)
6. **Phase 6 — `/purchase` 판매 채널 허브 + `/support` 문의 폼(mailto → biz@boanlinks.com)**
7. **Phase 7 — `/manual` 프레임 정비** (임시 자료 배너, 교체 가능한 컴포넌트화)
8. **Phase 8 — a11y/perf 패스, OG·메타 정리, 모바일 QR 시나리오 QA, 404·skip-link 점검**

각 Phase는 독립 커밋 단위로 진행 가능. 우선순위 원칙: **"QR 스캔 → 3초 → 문의"** 경로에 닿는 것부터 먼저.

---

## 7. 리스크 · 오픈 이슈

| 이슈 | 판단 필요 |
|---|---|
| PDF 내용 **공개 범위** | "폐쇄망/PUF 구조"는 마케팅 포인트이나, 구체 복구 절차까지 공개할지 결정 필요 |
| "Quantum Data Vault" 마케팅 문구 | 실제 양자 암호화 적용 수준을 확인하고 오버클레임 방지 |
| 3D 렌더 해상도 (2560~3840px) | WebP/AVIF 변환 + `srcSet`로 최적화 필요 |
| 대시보드 목업 | 실제 앱 존재 여부에 따라 "Concept Preview" 워터마크 필요할 수 있음 |
| 다국어 | 현재 한국어 only. EN 대응 여부 조기 결정 |

---

## 8. 확정된 입력값 (2026-04-16)

| 항목 | 값 |
|---|---|
| **회사명** | 보안링스 (Boanlinks) — AI 보안링스 |
| **주요 솔루션 (참고)** | 보안마켓플레이스 · 양자데이터금고시스템 · 전사적 보안사고 예측평가 · 보안무선공유 · 보안리스크관리 (boanlinks.com) |
| **연락 이메일** | `biz@boanlinks.com` (모든 문의 단일 채널) |
| **대표번호** | **010-3241-0427** |
| **운영시간** | **평일 09:00–18:00** |
| **주소** | 경기 하남시 미사대로 540 현대지식산업센터 한강미사2차 비동 614호 |
| **사업자등록번호** | **표기하지 않음** (사용자 지시) |
| **대표자명** | 미표기 |
| **판매 파트너 리스트** | **현 단계 미표기** — 파트너 섹션 자체를 숨기거나 "준비 중" 한 줄만 |
| **KC / UL CLASS 125 / ICTK PUF 로고** | **사용 OK** — Trust Bar에 이미지(svg)로 표시. `public/images/badges/` 폴더 신설 |
| **정식 매뉴얼·앱 교체 예정** | **약 1주 뒤** — `/manual` 상단 배너: *"본 매뉴얼·앱은 임시 자료입니다. 정식 버전은 약 1주 내 업데이트 예정."* |
| **"Quantum Data Vault" 문구** | **유지** — 히어로/제품 페이지/배지에 그대로 사용 |

### 후속 행동

1. **Phase 1 착수 가능** — 위 입력값으로 디자인 토큰 + 글로벌 레이아웃 + Header/Footer 시작
2. **TBD 항목**(주소·대표번호·사업자번호·대표자명)은 placeholder로 두고 추후 1줄 교체로 반영 가능하도록 컴포넌트화
3. **로고 자산** — KC / UL CLASS 125 / ICTK PUF SVG 파일 필요. 없으면 임시 텍스트 배지로 시작 후 이미지 교체
