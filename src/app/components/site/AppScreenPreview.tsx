import { useState } from "react";
import { useLocale } from "../../i18n/useLocale";
import { Section, SectionIntro } from "./Layout";
import HomeDesign from "./app-design/HomeDesign";
import FilesDesign from "./app-design/FilesDesign";
import DeviceDesign from "./app-design/DeviceDesign";
import type { AppScreen, FileFilter, DesignProps } from "./app-design/designHelpers";
import "./app-design/app-design.css";

const COPY = {
  ko: { title: "D-GO 앱 화면", lead: "앱에서 금고 연결 상태를 확인하고 파일을 안전하게 보관합니다.", tabs: ["홈", "보관 파일", "기기 상태"], titleByScreen: ["금고관리 홈", "암호화 파일 보관함", "앱에서 확인하는 기기 상태"], descriptions: ["연결 상태와 보안 키를 확인하고 사진·동영상, 문서, 다운로드, 보관 폴더를 관리합니다. 전송 진행률과 최근 보관 파일도 한눈에 볼 수 있습니다.", "보관한 암호화 파일을 분류해 확인하고 PUF 보호와 시점확인 상태를 살펴봅니다.", "연결된 금고의 보안 키, 논리 금고 상태, 등급별 저장 공간과 보안 시계를 앱에서 확인합니다."], caption: "Figma 앱 디자인 미리보기입니다. 파일과 상태값은 예시이며, 여기서 실제 금고를 제어하지 않습니다.", choose: "앱 화면 선택", preview: "앱 디자인 미리보기", details: "기능 안내", close: "안내 닫기", pause: "미리보기의 전송이 일시 정지되었습니다.", resume: "미리보기의 전송을 재개했습니다.", deviceInfo: "금고 연결과 보안 키 상태를 확인하는 앱 화면입니다. 실제 연결·해제는 D-GO 앱에서 진행합니다.", transferInfo: "진행률, 전송 속도, 남은 시간을 확인하고 전송을 일시 정지하거나 재개합니다." },
  ja: { title: "D-GOアプリの画面", lead: "アプリで金庫の接続状態を確認し、ファイルを安全に保管します。", tabs: ["ホーム", "保管ファイル", "デバイスの状態"], titleByScreen: ["金庫管理のホーム画面", "暗号化ファイルの保管庫", "アプリで確認するデバイスの状態"], descriptions: ["接続状態とセキュリティキーの状態を確認し、写真・動画、文書、ダウンロード、保管フォルダーを管理します。転送状況と最近保存したファイルも確認できます。", "保存した暗号化ファイルを分類して表示し、PUF保護とタイムスタンプの状態を確認します。", "接続中の金庫のセキュリティキー、論理金庫の施錠状態、保護レベル別のストレージ使用量、本体の時刻をアプリで確認します。"], caption: "アプリ画面のプレビューです。ファイルや状態の表示はサンプルです。", choose: "アプリ画面を選択", preview: "アプリデザインのプレビュー", details: "機能ガイド", close: "ガイドを閉じる", pause: "プレビューの転送を一時停止しました。", resume: "プレビューの転送を再開しました。", deviceInfo: "金庫の接続状態とセキュリティキーの状態を確認するアプリ画面です。実際の接続・切断はD-GOアプリで行います。", transferInfo: "転送の進捗、速度、残り時間を確認し、一時停止・再開できます。" },
  en: { title: "Inside the D-GO app", lead: "Check your vault connection and store files securely from the app.", tabs: ["Home", "Stored files", "Device status"], titleByScreen: ["Vault Management home", "Encrypted file storage", "Device status in the app"], descriptions: ["Check your connection and security key, then manage photos, videos, documents, downloads and storage folders. Track transfers and recently stored files.", "Browse stored encrypted files by category and check their PUF protection and timestamp status.", "Check your connected vault’s security key, lock status, storage by tier and security clock from the app."], caption: "A preview of the Figma app design. Files and status values are examples; this preview does not control a physical vault.", choose: "Choose an app screen", preview: "App design preview", details: "Feature guide", close: "Close guide", pause: "The preview transfer is paused.", resume: "The preview transfer has resumed.", deviceInfo: "This app screen shows vault connection and security key status. Connect or disconnect your vault in the D-GO app.", transferInfo: "Track progress, speed and time remaining, and pause or resume a transfer." },
};
const SCREENS: AppScreen[] = ["home", "files", "device"];

export default function AppScreenPreview() {
  const { locale, app } = useLocale();
  const copy = COPY[locale];
  const [screen, setScreen] = useState<AppScreen>("home");
  const [filter, setFilter] = useState<FileFilter>("all");
  const [paused, setPaused] = useState(false);
  const [info, setInfo] = useState<"file" | "device" | "transfer" | "settings" | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const designProps: DesignProps = {
    locale, screen, filter, paused,
    onScreen: next => { setScreen(next); setInfo(null); },
    onFilter: setFilter,
    onPause: () => { setPaused(!paused); setAnnouncement(paused ? copy.resume : copy.pause); },
    onInfo: setInfo,
  };
  const index = SCREENS.indexOf(screen);
  return (
    <Section id="app-screen" labelledBy="app-screen-title">
      <SectionIntro id="app-screen-title" eyebrow="D-GO APP" title={copy.title} lead={copy.lead} />
      <div className="mx-auto grid max-w-4xl items-start gap-8 md:grid-cols-[minmax(0,390px)_minmax(0,1fr)] md:gap-12">
        <figure className="min-w-0">
          <div className="dgo-app-design relative overflow-hidden rounded-2xl border border-[#242940] shadow-2xl" aria-label={copy.preview}>
            {screen === "home" ? <HomeDesign {...designProps} /> : screen === "files" ? <FilesDesign {...designProps} /> : <DeviceDesign {...designProps} />}
          </div>
          <figcaption className="mt-4 text-sm leading-relaxed text-ink-2">{copy.caption}</figcaption>
        </figure>
        <div className="min-w-0 md:sticky md:top-28">
          <div role="group" aria-label={copy.choose} className="grid gap-2">
            {SCREENS.map((key, i) => <button key={key} type="button" data-app-screen={key} aria-pressed={screen === key} onClick={() => designProps.onScreen(key)} className={`min-h-12 rounded-xl border px-4 py-3 text-left text-sm font-semibold ${screen === key ? "border-key bg-key text-white" : "border-line bg-white text-navy hover:bg-mist"}`}>{copy.tabs[i]}</button>)}
          </div>
          <h3 className="mt-6 text-xl font-bold text-navy">{copy.titleByScreen[index]}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{copy.descriptions[index]}</p>
          <p className="mt-4 text-sm font-semibold text-key">{screen === "files" ? app.folder.title : app.vault.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-2">{screen === "files" ? app.folder.description : app.vault.description}</p>
          {info && <aside className="mt-5 rounded-xl border border-panel-line bg-panel p-4" aria-labelledby="app-guide-title">
            <div className="flex items-center justify-between gap-2"><h4 id="app-guide-title" className="font-bold text-navy">{copy.details}</h4><button type="button" aria-label={copy.close} onClick={() => setInfo(null)} className="min-h-10 min-w-10 text-xl text-navy">×</button></div>
            {info === "device" || info === "transfer" ? <p className="mt-2 text-sm leading-relaxed text-ink-2">{info === "device" ? copy.deviceInfo : copy.transferInfo}</p> : <ul className="mt-2 space-y-3">{Object.values(app.features).map(feature => <li key={feature.title}><p className="text-sm font-semibold text-navy">{feature.title}</p><p className="mt-1 text-sm leading-relaxed text-ink-2">{feature.description}</p></li>)}</ul>}
          </aside>}
          <p className="mt-4 text-sm text-ink-2" role="status" aria-live="polite">{announcement}</p>
        </div>
      </div>
    </Section>
  );
}
