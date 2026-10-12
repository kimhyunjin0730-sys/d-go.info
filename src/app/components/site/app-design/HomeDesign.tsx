// Adapted from Figma D-Go APP. Layer IDs retain the design-to-code mapping.
import { mapDesignTree, translateDesignText, type DesignProps } from "./designHelpers";
const imgDGoLogo = "/assets/dgo-app/newhome-imgDGoLogo.png";
const imgContainer = "/assets/dgo-app/newhome-imgContainer.svg";
const imgContainer1 = "/assets/dgo-app/newhome-imgContainer1.svg";
const imgContainer2 = "/assets/dgo-app/newhome-imgContainer2.svg";
const imgContainer3 = "/assets/dgo-app/newhome-imgContainer3.svg";
const imgContainer4 = "/assets/dgo-app/newhome-imgContainer4.svg";
const imgContainer5 = "/assets/dgo-app/newhome-imgContainer5.svg";
const imgContainer6 = "/assets/dgo-app/newhome-imgContainer6.svg";
const imgContainer7 = "/assets/dgo-app/newhome-imgContainer7.svg";
const imgContainer8 = "/assets/dgo-app/newhome-imgContainer8.svg";
const imgContainer9 = "/assets/dgo-app/newhome-imgContainer9.svg";
const imgContainer10 = "/assets/dgo-app/newhome-imgContainer10.svg";
const imgContainer11 = "/assets/dgo-app/newhome-imgContainer11.svg";
const imgContainer12 = "/assets/dgo-app/newhome-imgContainer12.svg";
const imgContainer13 = "/assets/dgo-app/newhome-imgContainer13.svg";
const imgContainer14 = "/assets/dgo-app/newhome-imgContainer14.svg";
const imgContainer15 = "/assets/dgo-app/newhome-imgContainer15.svg";
const imgContainer16 = "/assets/dgo-app/newhome-imgContainer16.svg";
const imgContainer17 = "/assets/dgo-app/newhome-imgContainer17.svg";
const imgContainer18 = "/assets/dgo-app/newhome-imgContainer18.svg";
const imgContainer19 = "/assets/dgo-app/newhome-imgContainer19.svg";
const imgContainer20 = "/assets/dgo-app/newhome-imgContainer20.svg";

export default function HomeDesign(props: DesignProps) {
  return mapDesignTree(
    <div className="bg-[#04081e] content-stretch flex flex-col items-start relative size-full" data-node-id="1:6485" data-name="S-10 홈 (대시보드)">
      <div className="bg-[#04081e] content-stretch flex flex-col items-center pb-[96px] pt-[64px] px-[16px] relative shrink-0 w-full" data-node-id="1:6486" data-name="Main">
        <div className="h-[898px] max-w-[672px] relative shrink-0 w-full" data-node-id="1:6487" data-name="Container">
          <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip p-[20px] right-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-node-id="1:6488" style={{ backgroundImage: "linear-gradient(150.0830598223299deg, rgb(15, 18, 59) 0%, rgb(9, 13, 46) 50%, rgb(2, 5, 21) 100%)" }} data-name="1. Connection & Vault Status Card (SectionCard with Neutral/Close State Accent)">
            <div className="absolute bg-[rgba(3,247,179,0.1)] blur-[32px] right-[-48px] rounded-[9999px] size-[160px] top-[-48px]" data-node-id="1:6489" data-name="Overlay+Blur" />
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6490" data-name="Container">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6491" data-name="Container">
                <div className="bg-[rgba(1,181,116,0.2)] content-stretch flex gap-[6px] h-[28px] items-center px-[12px] relative rounded-[9999px] shrink-0" data-node-id="1:6492" data-name="Status Pill: Connected / Safe (#01B574)">
                  <div className="bg-[#01b574] h-[6px] relative rounded-[9999px] shrink-0 w-[5.5px]" data-node-id="1:6493" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start pr-[21.44px] relative shrink-0" data-node-id="1:6494" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#01b574] text-[12px] tracking-[-0.3px] whitespace-nowrap" data-node-id="1:6495">
                      <p className="leading-[14px] mb-0">{translateDesignText("D-GO-4821 연결됨 (보안 Wi-Fi", props.locale)}</p>
                      <p className="leading-[14px]">{translateDesignText("WPA3)", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pr-[21.77px] relative shrink-0" data-node-id="1:6496" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(174,185,225,0.8)] whitespace-nowrap" data-node-id="1:6497">
                    <p className="leading-[16px] mb-0">{translateDesignText("시각 동기 완료", props.locale)}</p>
                    <p className="leading-[16px]">{translateDesignText("10:15", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:6498" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6499" data-name="Heading 2">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.5px] w-full" data-node-id="1:6500">
                    <p className="leading-[18px]">{translateDesignText("D-GO 양자 데이터 금고", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6501" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] w-full" data-node-id="1:6502">
                    <p className="leading-[16px] mb-0">{translateDesignText("단말과 격리 볼트 간의 전이중 고속 암호화 채널이 활성화되었", props.locale)}</p>
                    <p className="leading-[16px]">{translateDesignText("습니다.", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-node-id="1:6503" data-name="Key Hardware Security Telemetry Badges">
                <div className="bg-[rgba(25,30,53,0.6)] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[8px] shrink-0" data-node-id="1:6504" data-name="Overlay">
                  <div className="h-[13.333px] relative shrink-0 w-[10.667px]" data-node-id="1:6505" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6507" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde1ff] text-[12px] whitespace-nowrap" data-node-id="1:6508">
                      <p className="leading-[14px]">{translateDesignText("하드웨어 보안 키(PUF) 정상", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(25,30,53,0.6)] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[8px] shrink-0" data-node-id="1:6509" data-name="Overlay">
                  <div className="h-[14px] relative shrink-0 w-[10.667px]" data-node-id="1:6510" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6512" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:6513">
                      <p className="leading-[14px]">{translateDesignText("논리 금고 열림 (Unlocked)", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__118px_118px] left-0 right-0 top-[210px]" data-node-id="1:6514" data-name="Section - 2. Primary 4 Essential Action Big Tiles (2x2 grid on mobile, min-height >= 96dp)">
            <div className="col-1 content-stretch flex flex-col items-start justify-between justify-self-start p-[16px] relative rounded-[12px] row-1 self-start shrink-0" data-node-id="1:6515" style={{ backgroundImage: "linear-gradient(138.6499113010003deg, rgb(15, 18, 59) 0%, rgb(2, 5, 21) 100%)" }} data-name="Button - Tile 1">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:6516" data-name="Container">
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6517" style={{ backgroundImage: "linear-gradient(44.99999999999999deg, rgb(0, 106, 253) 0%, rgb(122, 208, 255) 100%)" }} data-name="Background">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[40px] top-0" data-node-id="1:6518" data-name="Overlay+Shadow" />
                  <div className="relative shrink-0 size-[18.333px]" data-node-id="1:6519" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6521">
                  <p className="leading-[14px]">{translateDesignText("즉시보관 →", props.locale)}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="1:6522" data-name="Margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6523" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6524" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="1:6525">
                      <p className="leading-[18px]">{translateDesignText("사진 · 동영상", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6526" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] w-full" data-node-id="1:6527">
                      <p className="leading-[16px]">{translateDesignText("갤러리 3탭 원스톱 보관", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-start p-[16px] relative rounded-[12px] row-1 self-start shrink-0" data-node-id="1:6528" style={{ backgroundImage: "linear-gradient(138.6499113010003deg, rgb(15, 18, 59) 0%, rgb(2, 5, 21) 100%)" }} data-name="Button - Tile 2">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:6529" data-name="Container">
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6530" style={{ backgroundImage: "linear-gradient(44.99999999999999deg, rgb(3, 119, 206) 0%, rgb(173, 198, 255) 100%)" }} data-name="Background">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[40px] top-0" data-node-id="1:6531" data-name="Overlay+Shadow" />
                  <div className="h-[18.333px] relative shrink-0 w-[14.667px]" data-node-id="1:6532" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6534">
                  <p className="leading-[14px]">{translateDesignText("다중선택 →", props.locale)}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="1:6535" data-name="Margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6536" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6537" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="1:6538">
                      <p className="leading-[18px]">{translateDesignText("문서", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6539" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] w-full" data-node-id="1:6540">
                      <p className="leading-[16px]">{translateDesignText("계약서 · 기밀 PDF", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 content-stretch flex flex-col items-start justify-between justify-self-start p-[16px] relative rounded-[12px] row-2 self-start shrink-0" data-node-id="1:6541" style={{ backgroundImage: "linear-gradient(128.6936862665466deg, rgb(15, 18, 59) 0%, rgb(2, 5, 21) 100%)" }} data-name="Button - Tile 3">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:6542" data-name="Container">
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6543" style={{ backgroundImage: "linear-gradient(44.99999999999999deg, rgb(44, 57, 103) 0%, rgb(75, 142, 255) 100%)" }} data-name="Background">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[40px] top-0" data-node-id="1:6544" data-name="Overlay+Shadow" />
                  <div className="relative shrink-0 size-[18.333px]" data-node-id="1:6545" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                  </div>
                </div>
                <div className="bg-[rgba(3,247,179,0.2)] content-stretch flex items-center px-[6px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:6547" data-name="Overlay">
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#03f7b3] text-[10px] whitespace-nowrap" data-node-id="1:6548">
                    <p className="leading-[15px]">{translateDesignText("NEW", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="1:6549" data-name="Margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6550" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6551" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="1:6552">
                      <p className="leading-[18px]">{translateDesignText("다운로드", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6553" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] w-full" data-node-id="1:6554">
                      <p className="leading-[16px]">{translateDesignText("Download 폴더 신규 감지", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 content-stretch flex flex-col items-start justify-between justify-self-start p-[16px] relative rounded-[12px] row-2 self-start shrink-0" data-node-id="1:6555" style={{ backgroundImage: "linear-gradient(139.43843189935137deg, rgb(15, 18, 59) 0%, rgb(2, 5, 21) 100%)" }} data-name="Button - Tile 4">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:6556" data-name="Container">
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6557" style={{ backgroundImage: "linear-gradient(44.99999999999999deg, rgb(13, 113, 67) 0%, rgb(1, 181, 116) 100%)" }} data-name="Background">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[40px] top-0" data-node-id="1:6558" data-name="Overlay+Shadow" />
                  <div className="h-[16.5px] relative shrink-0 w-[19.112px]" data-node-id="1:6559" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                  </div>
                </div>
                <div className="bg-[rgba(246,173,85,0.2)] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:6561" data-name="Overlay">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:6562">
                    <p className="leading-[14px]">{translateDesignText("12개 대기", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-node-id="1:6563" data-name="Margin">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6564" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6565" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="1:6566">
                      <p className="leading-[18px]">{translateDesignText("보관 폴더", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6567" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] w-full" data-node-id="1:6568">
                      <p className="leading-[16px]">{translateDesignText("자동 암호화 동기화", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-0 pt-[4px] right-0 top-[612px]" data-node-id="1:6569" data-name="Section - 4. Recent Secure Vault Items (최근 보관 목록):margin">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:6570" data-name="Section - 4. Recent Secure Vault Items (최근 보관 목록)">
              <div className="content-stretch flex items-center justify-between px-[4px] relative shrink-0 w-full" data-node-id="1:6571" data-name="Container">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6572" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6573" data-name="Heading 3">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:6574">
                      <p className="leading-[18px]">{translateDesignText("최근 보관 파일", props.locale)}</p>
                    </div>
                  </div>
                  <div className="bg-[#191e35] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:6575" data-name="Background">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6576">
                      <p className="leading-[14px]">{translateDesignText("38개 보관됨", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-node-id="1:6577" data-name="Link">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a2c9ff] text-[12px] whitespace-nowrap" data-node-id="1:6578">
                    <p className="leading-[14px]">{translateDesignText("전체 보기", props.locale)}</p>
                  </div>
                  <div className="h-[8px] relative shrink-0 w-[4.933px]" data-node-id="1:6579" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:6581" data-name="Items List Stack">
                <div className="bg-gradient-to-r content-stretch flex from-[#0f123b] items-center justify-between p-[14px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6582" data-name="Item 1: 현장_증거사진_IMG_0412.jpg">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:6583" data-name="Container">
                    <div className="bg-[rgba(75,142,255,0.2)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6584" data-name="Overlay">
                      <div className="relative shrink-0 size-[16.5px]" data-node-id="1:6585" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6587" data-name="Container">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6588" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="1:6589">
                          <p className="leading-[20px]">{translateDesignText("현장_증거사진_IMG_0412.jpg", props.locale)}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:6590" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6591" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6592">
                            <p className="leading-[16px]">{translateDesignText("8.2 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6593" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6594">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6595" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6596">
                            <p className="leading-[16px]">{translateDesignText("오늘 10:24", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center pl-[8px] relative shrink-0" data-node-id="1:6597" data-name="Container">
                    <div className="bg-[rgba(1,181,116,0.2)] h-[20.5px] relative rounded-[9999px] shrink-0 w-[53.02px]" data-node-id="1:6598" data-name="Badge">
                      <div className="-translate-y-1/2 absolute left-[8px] size-[10.833px] top-1/2" data-node-id="1:6599" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[23.02px] not-italic text-[#01b574] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:6601">
                        <p className="leading-[16.5px]">{translateDesignText("완료", props.locale)}</p>
                      </div>
                    </div>
                    <div className="bg-[rgba(3,119,206,0.2)] content-stretch flex items-center p-[4px] relative rounded-[6px] shrink-0" data-node-id="1:6602" data-name="PUF 보안 Badge">
                      <div className="h-[12.5px] relative shrink-0 w-[10px]" data-node-id="1:6603" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                      </div>
                    </div>
                    <div className="bg-[rgba(0,106,253,0.2)] content-stretch flex items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-node-id="1:6605" data-name="KICA Badge">
                      <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[11px] whitespace-nowrap" data-node-id="1:6606">
                        <p className="leading-[16.5px]">{translateDesignText("KICA", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r content-stretch flex from-[#0f123b] items-center justify-between p-[14px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6607" data-name="Item 2: 2026_특허출원_기술명세서.pdf">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:6608" data-name="Container">
                    <div className="bg-[rgba(147,0,10,0.3)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6609" data-name="Overlay">
                      <div className="relative shrink-0 size-[18.333px]" data-node-id="1:6610" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6612" data-name="Container">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6613" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="1:6614">
                          <p className="leading-[20px]">{translateDesignText("2026_특허출원_기술명세서.pdf", props.locale)}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:6615" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6616" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6617">
                            <p className="leading-[16px]">{translateDesignText("2.4 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6618" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6619">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6620" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6621">
                            <p className="leading-[16px]">{translateDesignText("오늘 09:28", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center pl-[8px] relative shrink-0" data-node-id="1:6622" data-name="Container">
                    <div className="bg-[rgba(1,181,116,0.2)] h-[20.5px] relative rounded-[9999px] shrink-0 w-[53.02px]" data-node-id="1:6623" data-name="Overlay">
                      <div className="-translate-y-1/2 absolute left-[8px] size-[10.833px] top-1/2" data-node-id="1:6624" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[23.02px] not-italic text-[#01b574] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:6626">
                        <p className="leading-[16.5px]">{translateDesignText("완료", props.locale)}</p>
                      </div>
                    </div>
                    <div className="bg-[rgba(3,119,206,0.2)] content-stretch flex items-center p-[4px] relative rounded-[6px] shrink-0" data-node-id="1:6627" data-name="Overlay">
                      <div className="h-[12.5px] relative shrink-0 w-[10px]" data-node-id="1:6628" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                      </div>
                    </div>
                    <div className="bg-[rgba(0,106,253,0.2)] content-stretch flex items-center px-[6px] py-[2px] relative rounded-[6px] shrink-0" data-node-id="1:6630" data-name="Overlay">
                      <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[11px] whitespace-nowrap" data-node-id="1:6631">
                        <p className="leading-[16.5px]">{translateDesignText("KICA", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r content-stretch flex from-[#0f123b] items-center justify-between p-[14px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6632" data-name="Item 3: 회계감사보고서_최종본.pdf">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="1:6633" data-name="Container">
                    <div className="bg-[rgba(147,0,10,0.3)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:6634" data-name="Overlay">
                      <div className="relative shrink-0 size-[18.333px]" data-node-id="1:6635" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6637" data-name="Container">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6638" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="1:6639">
                          <p className="leading-[20px]">{translateDesignText("회계감사보고서_최종본.pdf", props.locale)}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:6640" data-name="Container">
                        <div className="content-stretch flex flex-col items-start pr-[14.91px] relative shrink-0" data-node-id="1:6641" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6642">
                            <p className="leading-[16px] mb-0">{translateDesignText("5.1", props.locale)}</p>
                            <p className="leading-[16px]">{translateDesignText("MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6643" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6644">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pr-[22.5px] relative shrink-0" data-node-id="1:6645" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6646">
                            <p className="leading-[16px] mb-0">{translateDesignText("어제", props.locale)}</p>
                            <p className="leading-[16px]">{translateDesignText("18:40", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center pl-[8px] relative shrink-0" data-node-id="1:6647" data-name="Container">
                    <div className="bg-[rgba(1,181,116,0.2)] h-[20.5px] relative rounded-[9999px] shrink-0 w-[53.02px]" data-node-id="1:6648" data-name="Overlay">
                      <div className="-translate-y-1/2 absolute left-[8px] size-[10.833px] top-1/2" data-node-id="1:6649" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[23.01px] not-italic text-[#01b574] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:6651">
                        <p className="leading-[16.5px]">{translateDesignText("완료", props.locale)}</p>
                      </div>
                    </div>
                    <div className="bg-[rgba(3,119,206,0.2)] content-stretch flex items-center p-[4px] relative rounded-[6px] shrink-0" data-node-id="1:6652" data-name="Overlay">
                      <div className="h-[12.5px] relative shrink-0 w-[10px]" data-node-id="1:6653" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                      </div>
                    </div>
                    <div className="bg-[rgba(246,173,85,0.2)] h-[20.5px] relative rounded-[6px] shrink-0 w-[72.02px]" data-node-id="1:6655" data-name="(#F6AD55)">
                      <div className="-translate-y-1/2 absolute left-[6px] size-[10px] top-1/2" data-node-id="1:6656" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
                      </div>
                      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[22.02px] not-italic text-[#f6ad55] text-[11px] top-[calc(50%-0.75px)] whitespace-nowrap" data-node-id="1:6658">
                        <p className="leading-[16.5px]">{translateDesignText("검증대기", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-0 p-[20px] right-0 rounded-[12px] top-[458px]" data-node-id="1:6659" style={{ backgroundImage: "linear-gradient(156.79175235185483deg, rgb(15, 18, 59) 0%, rgb(2, 5, 21) 100%)" }} data-name="Section - 3. Active Transfer Card (DgoProgressBar at 42%)">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_-0.5px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-node-id="1:6660" data-name="Section - 3. Active Transfer Card (DgoProgressBar at 42%):shadow" />
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6661" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6662" data-name="Container">
                <div className="content-stretch flex items-start relative shrink-0 size-[10px]" data-node-id="1:6663" data-name="Container">
                  <div className="absolute bg-[#03f7b3] inset-0 opacity-75 rounded-[9999px]" data-node-id="1:6664" data-name="Background" />
                  <div className="bg-[#03f7b3] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="1:6665" data-name="Background" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6666" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:6667">
                    <p className="leading-[18px]">{translateDesignText("보내는 중", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6668" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#adc6ff] text-[14px] whitespace-nowrap" data-node-id="1:6669">
                    <p className="leading-[20px]">{translateDesignText("3 / 12개", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6670" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[14px] whitespace-nowrap" data-node-id="1:6671">
                  <p>
                    <span className="leading-[20px]">{`1.2 GB `}</span>
                    <span className="[word-break:break-word] font-normal font-normal leading-[20px] text-[#c1c6d7]">/ 4.8 GB</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[5.5px] items-start relative shrink-0 w-full" data-node-id="1:6672" data-name="Dual-stop Linear Progress Bar (DgoProgressBar)">
              <div className="bg-[#2f334b] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:6673" data-name="Background">
                <div className="absolute bg-gradient-to-r from-[#03f7b3] inset-[0_58%_0_0] rounded-[9999px] to-[#006afd]" data-node-id="1:6674" data-name="Gradient" />
              </div>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6675" data-name="Container">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6676" data-name="Container">
                  <div className="h-[10px] relative shrink-0 w-[12.501px]" data-node-id="1:6677" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6679">
                    <p className="leading-[16px]">{translateDesignText("18.4 MB/s · 남은 시간 약 3분 20초", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6680" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6681">
                    <p className="leading-[14px]">{translateDesignText("42%", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-node-id="1:6682" data-name="Security Meta Info">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6683" data-name="Container">
                <div className="h-[14px] relative shrink-0 w-[10.667px]" data-node-id="1:6684" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                </div>
                <div className="content-stretch flex flex-col items-start pr-[5.73px] relative shrink-0" data-node-id="1:6686" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6687">
                    <p className="leading-[16px] mb-0">{translateDesignText("청크 mTLS 양방향 터널 암호", props.locale)}</p>
                    <p className="leading-[16px]">{translateDesignText("화 전송", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6688" data-name="Actions">
                <div className="bg-[#191e35] content-stretch flex h-[32px] items-center justify-center pb-[2.5px] pl-[12.39px] pr-[12.41px] pt-[1.5px] relative rounded-[8px] shrink-0" data-node-id="1:6689" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" data-node-id="1:6690">
                    <p className="leading-[14px] mb-0">{translateDesignText("상세보", props.locale)}</p>
                    <p className="leading-[14px]">{translateDesignText("기", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[#191e35] content-stretch flex gap-[8.06px] h-[32px] items-center pb-[2.5px] pl-[12px] pr-[16.08px] pt-[1.5px] relative rounded-[8px] shrink-0" data-node-id="1:6691" data-name="Button">
                  <div className="relative shrink-0 size-[9.333px]" data-node-id="1:6692" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6ad55] text-[12px] text-center whitespace-nowrap" data-node-id="1:6694">
                    <p className="leading-[14px] mb-0">{translateDesignText("일시", props.locale)}</p>
                    <p className="leading-[14px]">{translateDesignText("정지", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.8)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.2)] top-0 w-full" data-node-id="1:6695" data-name="Header">
        <div className="content-stretch flex h-[64px] items-center justify-between max-w-[1024px] px-[16px] relative shrink-0 w-full" data-node-id="1:6696" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6697" data-name="Container">
            <div className="max-w-[136.3800048828125px] relative shrink-0 size-[32px]" data-node-id="1:6698" data-name="D-GO Logo">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDGoLogo} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:6699" data-name="Container">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:6700" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6701" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.5px] whitespace-nowrap" data-node-id="1:6702">
                    <p className="leading-[18px]">{translateDesignText("D-GO", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6703" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6704">
                    <p className="leading-[14px]">{translateDesignText("Home", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6705" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="1:6706">
                  <p className="leading-[16px]">{translateDesignText("D-GO-4821", props.locale)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6707" data-name="Container">
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="1:6708" data-name="Link - 설정">
              <div className="h-[20px] relative shrink-0 w-[20.1px]" data-node-id="1:6709" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer15} />
              </div>
            </div>
            <div className="bg-[#adc6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="1:6711" data-name="Background">
              <div className="relative shrink-0 size-[12px]" data-node-id="1:6712" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.85)] bottom-0 content-stretch flex flex-col items-start left-0 shadow-[0px_-1px_12px_0px_rgba(0,0,0,0.3)] w-full" data-node-id="1:6714" data-name="Nav">
        <div className="content-stretch flex h-[64px] items-center max-w-[672px] px-[16px] relative shrink-0 w-full" data-node-id="1:6715" data-name="Container">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6716" data-name="Link">
            <div className="h-[18px] relative shrink-0 w-[16px]" data-node-id="1:6717" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} />
            </div>
            <div className="h-[10.805px] relative shrink-0 w-[10.207px]" data-node-id="1:6719" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer18} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] px-[15.99px] py-[3px] relative shrink-0" data-node-id="1:6721" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[21.5px]" data-node-id="1:6722" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer19} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6724" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6725">
                <p className="leading-[14px]">{translateDesignText("파일", props.locale)}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6726" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[20px]" data-node-id="1:6727" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer20} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6729" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6730">
                <p className="leading-[14px]">{translateDesignText("기기", props.locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  , props);
}
