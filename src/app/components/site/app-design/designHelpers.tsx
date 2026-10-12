import { Children, cloneElement, createElement, isValidElement, type ReactNode } from "react";
import type { Locale } from "../../../i18n/config";
import { DESIGN_TEXT } from "./designText";

export type AppScreen = "home" | "files" | "device";
export type FileFilter = "all" | "tier" | "photos" | "documents";
export type DesignProps = {
  locale: Locale;
  screen: AppScreen;
  filter: FileFilter;
  paused: boolean;
  onScreen: (screen: AppScreen) => void;
  onFilter: (filter: FileFilter) => void;
  onPause: () => void;
  onInfo: (kind: "file" | "device" | "transfer" | "settings") => void;
};
export function translateDesignText(text: string, locale: Locale): string {
  const repaired: Record<string, string> = {
    "단말과 격리 볼트 간의 전이중 고속 암호화 채널이 활성화되었": "단말과 격리 볼트 간의 전이중 고속 암호화 채널이 활성화되었습니다.",
    "습니다.": "", "상세보": "상세보기", "기": "", "일시": "일시 정지", "정지": "",
    "청크 mTLS 양방향 터널 암호": "청크 mTLS 양방향 터널 암호화 전송", "화 전송": "",
    "일반 및 업무 데": "일반 및 업무 데이터", "이터": "",
    "/ 128 GB 사": "/ 128 GB 사용 가능", "용 가능": "",
    "본체와 정확히 동기화": "본체와 정확히 동기화됨", "됨": "",
  };
  return locale === "ko" ? repaired[text] ?? text : DESIGN_TEXT[text]?.[locale === "ja" ? 0 : 1] ?? text;
}

const navigation: Record<string, AppScreen> = {
  "1:6716": "home", "1:6721": "files", "1:6726": "device",
  "1:6008": "home", "1:6013": "files", "1:6018": "device",
  "1:6469": "home", "1:6474": "files", "1:6479": "device",
};
const filters: Record<string, FileFilter> = { "1:5816": "all", "1:5820": "tier", "1:5826": "photos", "1:5832": "documents" };
const cards: Record<string, "photos" | "documents"> = { "1:5839": "documents", "1:5877": "photos", "1:5915": "documents", "1:5953": "documents" };
const homeLabels = { ko: "홈", ja: "ホーム", en: "Home" };

/** Preserve Figma layers while adding preview navigation, filtering and localized text. */
export function mapDesignTree(node: ReactNode, props: DesignProps): ReactNode {
  if (!isValidElement<Record<string, any>>(node)) return node;
  const attributes = { ...node.props };
  const id = attributes["data-node-id"];
  const name = attributes["data-name"] ?? "";
  if (cards[id] && props.filter !== "all" && props.filter !== "tier" && cards[id] !== props.filter) return null;
  let children = Children.map(attributes.children, child => mapDesignTree(child, props));
  let type = node.type;
  attributes.className = (attributes.className ?? "").replace(/font-\['[^']+'\]/g, "");
  // Localized labels replace outlined Korean type in the navigation only.
  if (props.locale !== "ko" && ["1:6719", "1:6011", "1:6472"].includes(id)) {
    children = homeLabels[props.locale];
    attributes.className = "text-xs leading-[14px] text-[#c1c6d7]";
  }
  if (node.type === "p" && children?.length === 1 && typeof children[0] === "string") {
    children = [translateDesignText(children[0], props.locale)];
    if (children[0] === "") return null;
  }
  if (id === "1:5817") children = [translateDesignText("전체 ", props.locale)];
  if (props.paused && id === "1:6667") children = [props.locale === "ko" ? "일시 정지" : props.locale === "ja" ? "一時停止中" : "Paused"];
  let action: (() => void) | undefined;
  if (navigation[id]) {
    action = () => props.onScreen(navigation[id]);
    attributes["aria-pressed"] = props.screen === navigation[id];
    attributes["aria-label"] = navigation[id] === "home" ? homeLabels[props.locale] : translateDesignText(navigation[id] === "files" ? "파일" : "기기", props.locale);
  } else if (filters[id]) {
    action = () => props.onFilter(filters[id]);
    attributes["aria-pressed"] = props.filter === filters[id];
    attributes["data-filter"] = filters[id];
  } else if (name.startsWith("Button - Tile") || id === "1:6577") {
    action = () => { props.onScreen("files"); props.onFilter(id === "1:6515" ? "photos" : id === "1:6528" ? "documents" : "all"); };
  } else if (id === "1:6691") {
    action = props.onPause;
    attributes["aria-pressed"] = props.paused;
    attributes["aria-label"] = props.locale === "ko" ? "전송 일시 정지 또는 재개" : props.locale === "ja" ? "送信を一時停止・再開" : "Pause or resume transfer";
  } else if (id === "1:6689") action = () => props.onInfo("transfer");
  else if (name.startsWith("Button - 옵션")) { action = () => props.onInfo("file"); attributes["aria-label"] = props.locale === "ko" ? "파일 기능 보기" : props.locale === "ja" ? "ファイル機能を表示" : "Show file features"; }
  else if (name === "Link - 설정") { action = () => props.onInfo("settings"); attributes["aria-label"] = props.locale === "ko" ? "앱 기능 안내" : props.locale === "ja" ? "アプリ機能ガイド" : "App feature guide"; }
  else if (id === "1:5798") { action = () => props.onFilter("all"); attributes["aria-label"] = props.locale === "ko" ? "전체 파일 새로 보기" : props.locale === "ja" ? "全ファイルを表示" : "Show all files"; }
  else if (["1:6275", "1:6280", "1:6430", "1:6443"].includes(id)) action = () => props.onInfo("device");
  if (action) {
    type = "button";
    attributes.type = "button";
    attributes.onClick = action;
    attributes.className += " dgo-app-control";
  }
  delete attributes.children;
  return type === node.type ? cloneElement(node, attributes, children) : createElement(type as string, { ...attributes, key: node.key }, children);
}
