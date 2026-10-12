// Adapted from Figma D-Go APP. Layer IDs retain the design-to-code mapping.
import { mapDesignTree, translateDesignText, type DesignProps } from "./designHelpers";
const imgDGoLogo = "/assets/dgo-app/files-imgDGoLogo.png";
const imgContainer = "/assets/dgo-app/files-imgContainer.svg";
const imgContainer1 = "/assets/dgo-app/files-imgContainer1.svg";
const imgContainer2 = "/assets/dgo-app/files-imgContainer2.svg";
const imgContainer3 = "/assets/dgo-app/files-imgContainer3.svg";
const imgContainer4 = "/assets/dgo-app/files-imgContainer4.svg";
const imgContainer5 = "/assets/dgo-app/files-imgContainer5.svg";
const imgContainer6 = "/assets/dgo-app/files-imgContainer6.svg";
const imgContainer7 = "/assets/dgo-app/files-imgContainer7.svg";
const imgContainer8 = "/assets/dgo-app/files-imgContainer8.svg";
const imgContainer9 = "/assets/dgo-app/files-imgContainer9.svg";
const imgContainer10 = "/assets/dgo-app/files-imgContainer10.svg";
const imgContainer11 = "/assets/dgo-app/files-imgContainer11.svg";
const imgContainer12 = "/assets/dgo-app/files-imgContainer12.svg";
const imgContainer13 = "/assets/dgo-app/files-imgContainer13.svg";
const imgContainer14 = "/assets/dgo-app/files-imgContainer14.svg";
const imgContainer15 = "/assets/dgo-app/files-imgContainer15.svg";
const imgContainer16 = "/assets/dgo-app/files-imgContainer16.svg";
const imgContainer17 = "/assets/dgo-app/files-imgContainer17.svg";
const imgContainer18 = "/assets/dgo-app/files-imgContainer18.svg";
const imgContainer19 = "/assets/dgo-app/files-imgContainer19.svg";
const imgContainer20 = "/assets/dgo-app/files-imgContainer20.svg";

export default function FilesDesign(props: DesignProps) {
  return mapDesignTree(
    <div className="bg-[#04081e] content-stretch flex flex-col items-start relative size-full" data-node-id="1:5784" data-name="S-40 보관 파일 목록">
      <div className="bg-[#04081e] content-stretch flex flex-col items-start pb-[96px] pt-[64px] px-[16px] relative shrink-0 w-full" data-node-id="1:5785" data-name="Main">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-full" data-node-id="1:5786" data-name="Container">
          <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[8px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 to-[#020515] via-1/2 via-[#090d2e] w-full" data-node-id="1:5787" data-name="(Vault Overview)">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:5788" data-name="Container">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:5789" data-name="Container">
                <div className="h-[17.5px] relative shrink-0 w-[13.333px]" data-node-id="1:5790" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5792" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:5793">
                    <p className="leading-[18px]">{translateDesignText("본체 보관함", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(1,181,116,0.2)] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5794" data-name="Overlay">
                  <div className="bg-[#01b574] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="1:5795" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5796" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5797">
                      <p className="leading-[14px]">{translateDesignText("PUF 연결됨", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(36,41,64,0.8)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="1:5798" data-name="Button - 새로고침">
                <div className="relative shrink-0 size-[13.333px]" data-node-id="1:5799" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                </div>
              </div>
            </div>
            <div className="h-[21px] relative shrink-0 w-full" data-node-id="1:5801" data-name="Container">
              <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-0" data-node-id="1:5802" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5803" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:5804">
                    <p className="leading-[18px]">{translateDesignText("38개", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5805" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:5806">
                    <p className="leading-[16px]">{translateDesignText("보관된 암호화 파일", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[4.01px] items-center left-[236.09px] top-[5px]" data-node-id="1:5807" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5808" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="1:5809">
                    <p className="leading-[16px]">{translateDesignText("14.8 GB", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5810" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#8b90a0] text-[12px] whitespace-nowrap" data-node-id="1:5811">
                    <p className="leading-[16px]">{translateDesignText("/ 64 GB", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(174,185,225,0.1)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:5812" data-name="(DgoProgressBar)">
              <div className="absolute bg-gradient-to-r from-[#03f7b3] inset-[0_76.9%_0_0] rounded-[9999px] to-[#006afd]" data-node-id="1:5813" data-name="Gradient" />
            </div>
          </div>
          <div className="h-[36px] relative shrink-0 w-full" data-node-id="1:5814" data-name="(DgoTag):margin">
            <div className="absolute h-[36px] left-[-16px] overflow-auto right-[-16px] top-0" data-node-id="1:5815" data-name="(DgoTag)">
              <div className="-translate-y-1/2 absolute bg-[#0377ce] h-[32px] left-[16px] rounded-[9999px] top-1/2 w-[73.31px]" data-node-id="1:5816" data-name="Button">
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-medium justify-center leading-[0] left-[calc(50%-7.43px)] not-italic text-[#fdfcff] text-[14px] text-center top-1/2 whitespace-nowrap" data-node-id="1:5817">
                  <p className="leading-[20px]">{`전체 `}</p>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start justify-center left-[calc(50%+15.22px)] opacity-80 top-[calc(50%+1.25px)]" data-node-id="1:5818" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#fdfcff] text-[12px] text-center whitespace-nowrap" data-node-id="1:5819">
                    <p className="leading-[16px]">{translateDesignText("38", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#242940] content-stretch flex gap-[4px] items-center left-[93.31px] px-[14px] py-[6px] rounded-[9999px] top-1/2" data-node-id="1:5820" data-name="Button">
                <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-node-id="1:5821" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[14px] text-center whitespace-nowrap" data-node-id="1:5823">
                  <p className="leading-[20px]">{translateDesignText("등급 C", props.locale)}</p>
                </div>
                <div className="content-stretch flex flex-col items-center opacity-80 relative shrink-0" data-node-id="1:5824" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] text-center whitespace-nowrap" data-node-id="1:5825">
                    <p className="leading-[16px]">{translateDesignText("38", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#242940] content-stretch flex gap-[4px] items-center left-[203.53px] px-[14px] py-[6px] rounded-[9999px] top-1/2" data-node-id="1:5826" data-name="Button">
                <div className="relative shrink-0 size-[10.5px]" data-node-id="1:5827" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[14px] text-center whitespace-nowrap" data-node-id="1:5829">
                  <p className="leading-[20px]">{translateDesignText("사진·영상", props.locale)}</p>
                </div>
                <div className="content-stretch flex flex-col items-center opacity-80 relative shrink-0" data-node-id="1:5830" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] text-center whitespace-nowrap" data-node-id="1:5831">
                    <p className="leading-[16px]">{translateDesignText("12", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#242940] content-stretch flex gap-[4px] items-center left-[329.78px] px-[14px] py-[6px] rounded-[9999px] top-1/2" data-node-id="1:5832" data-name="Button">
                <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-node-id="1:5833" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[14px] text-center whitespace-nowrap" data-node-id="1:5835">
                  <p className="leading-[20px]">{translateDesignText("문서", props.locale)}</p>
                </div>
                <div className="content-stretch flex flex-col items-center opacity-80 relative shrink-0" data-node-id="1:5836" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] text-center whitespace-nowrap" data-node-id="1:5837">
                    <p className="leading-[16px]">{translateDesignText("26", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:5838" data-name="(DgoListRow 반복)">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:5839" data-name="1: 특허출원 명세서 (기본 활성 선택 상태)">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:5840" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1:5841" data-name="Container">
                  <div className="content-stretch flex flex-col h-[46px] items-start pt-[2px] relative shrink-0 w-[44px]" data-node-id="1:5842" data-name="Margin">
                    <div className="bg-[rgba(16,59,151,0.6)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]" data-node-id="1:5843" data-name="Overlay">
                      <div className="relative shrink-0 size-[20px]" data-node-id="1:5844" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:5846" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:5847" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-full" data-node-id="1:5848">
                        <p className="leading-[20px]">{translateDesignText("2026_특허출원_기술명세서.pdf", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:5849" data-name="Margin">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1:5850" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5851" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:5852">
                            <p className="leading-[16px]">{translateDesignText("등급 C", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5853" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5854">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5855" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5856">
                            <p className="leading-[16px]">{translateDesignText("2.4 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5857" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5858">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="1:5859" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5860">
                            <p className="leading-[16px]">{translateDesignText("09-28 09:14", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-node-id="1:5861" data-name="Button - 옵션 더보기">
                  <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-node-id="1:5862" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:5864" data-name="Container">
                <div className="bg-[rgba(1,181,116,0.15)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5865" data-name="Overlay">
                  <div className="relative shrink-0 size-[11.667px]" data-node-id="1:5866" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5868">
                    <p className="leading-[14px]">{translateDesignText("보관완료", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(44,57,103,0.5)] content-stretch flex gap-[3.99px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5869" data-name="Overlay">
                  <div className="h-[12.25px] relative shrink-0 w-[9.333px]" data-node-id="1:5870" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[12px] whitespace-nowrap" data-node-id="1:5872">
                    <p className="leading-[14px]">{translateDesignText("PUF 보호", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[#242940] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5873" data-name="Background">
                  <div className="relative shrink-0 size-[10.5px]" data-node-id="1:5874" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:5876">
                    <p className="leading-[14px]">{translateDesignText("시점확인 KICA", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:5877" data-name="Background">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:5878" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1:5879" data-name="Container">
                  <div className="content-stretch flex flex-col h-[46px] items-start pt-[2px] relative shrink-0 w-[44px]" data-node-id="1:5880" data-name="Margin">
                    <div className="bg-[rgba(13,113,67,0.4)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]" data-node-id="1:5881" data-name="Overlay">
                      <div className="h-[18px] relative shrink-0 w-[20px]" data-node-id="1:5882" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:5884" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:5885" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:5886">
                        <p className="leading-[20px]">{translateDesignText("현장_증거사진_IMG_0412.jpg", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:5887" data-name="Margin">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1:5888" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5889" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:5890">
                            <p className="leading-[16px]">{translateDesignText("등급 C", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5891" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5892">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5893" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5894">
                            <p className="leading-[16px]">{translateDesignText("8.2 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5895" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5896">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="1:5897" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5898">
                            <p className="leading-[16px]">{translateDesignText("09-28 11:20", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-node-id="1:5899" data-name="Button - 옵션 더보기">
                  <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-node-id="1:5900" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:5902" data-name="Container">
                <div className="bg-[rgba(1,181,116,0.15)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5903" data-name="Overlay">
                  <div className="relative shrink-0 size-[11.667px]" data-node-id="1:5904" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5906">
                    <p className="leading-[14px]">{translateDesignText("보관완료", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(44,57,103,0.5)] content-stretch flex gap-[3.99px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5907" data-name="Overlay">
                  <div className="h-[12.25px] relative shrink-0 w-[9.333px]" data-node-id="1:5908" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[12px] whitespace-nowrap" data-node-id="1:5910">
                    <p className="leading-[14px]">{translateDesignText("PUF 보호", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(1,181,116,0.1)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5911" data-name="Overlay">
                  <div className="h-[12.25px] relative shrink-0 w-[12.833px]" data-node-id="1:5912" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5914">
                    <p className="leading-[14px]">{translateDesignText("시점확인 완료", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:5915" data-name="3: 회계감사보고서 스캔 (대기 중)">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:5916" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1:5917" data-name="Container">
                  <div className="content-stretch flex flex-col h-[46px] items-start pt-[2px] relative shrink-0 w-[44px]" data-node-id="1:5918" data-name="Margin">
                    <div className="bg-[rgba(16,59,151,0.6)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]" data-node-id="1:5919" data-name="Overlay">
                      <div className="h-[20px] relative shrink-0 w-[16px]" data-node-id="1:5920" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:5922" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:5923" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full" data-node-id="1:5924">
                        <p className="leading-[20px]">{translateDesignText("회계감사보고서_스캔.pdf", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:5925" data-name="Margin">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1:5926" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5927" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:5928">
                            <p className="leading-[16px]">{translateDesignText("등급 C", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5929" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5930">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5931" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5932">
                            <p className="leading-[16px]">{translateDesignText("5.1 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5933" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5934">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="1:5935" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5936">
                            <p className="leading-[16px]">{translateDesignText("09-27 18:03", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-node-id="1:5937" data-name="Button - 옵션 더보기">
                  <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-node-id="1:5938" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:5940" data-name="Container">
                <div className="bg-[rgba(1,181,116,0.15)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5941" data-name="Overlay">
                  <div className="relative shrink-0 size-[11.667px]" data-node-id="1:5942" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5944">
                    <p className="leading-[14px]">{translateDesignText("보관완료", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(44,57,103,0.5)] content-stretch flex gap-[3.99px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5945" data-name="Overlay">
                  <div className="h-[12.25px] relative shrink-0 w-[9.333px]" data-node-id="1:5946" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[12px] whitespace-nowrap" data-node-id="1:5948">
                    <p className="leading-[14px]">{translateDesignText("PUF 보호", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(246,173,85,0.15)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5949" data-name="Overlay">
                  <div className="relative shrink-0 size-[11.667px]" data-node-id="1:5950" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:5952">
                    <p className="leading-[14px]">{translateDesignText("대기 중", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:5953" data-name="4: 설계도면 CAD v2">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:5954" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1:5955" data-name="Container">
                  <div className="content-stretch flex flex-col h-[46px] items-start pt-[2px] relative shrink-0 w-[44px]" data-node-id="1:5956" data-name="Margin">
                    <div className="bg-[#2f334b] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[44px]" data-node-id="1:5957" data-name="Background">
                      <div className="h-[18px] relative shrink-0 w-[11px]" data-node-id="1:5958" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:5960" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:5961" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white w-full" data-node-id="1:5962">
                        <p className="leading-[20px]">{translateDesignText("설계도면_CAD_v2.dwg", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:5963" data-name="Margin">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1:5964" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5965" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:5966">
                            <p className="leading-[16px]">{translateDesignText("등급 C", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5967" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5968">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5969" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5970">
                            <p className="leading-[16px]">{translateDesignText("45.6 MB", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start opacity-40 relative shrink-0" data-node-id="1:5971" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5972">
                            <p className="leading-[16px]">{translateDesignText("•", props.locale)}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="1:5973" data-name="Container">
                          <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:5974">
                            <p className="leading-[16px]">{translateDesignText("09-26 15:40", props.locale)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-node-id="1:5975" data-name="Button - 옵션 더보기">
                  <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-node-id="1:5976" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:5978" data-name="Container">
                <div className="bg-[rgba(1,181,116,0.15)] content-stretch flex gap-[4px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5979" data-name="Overlay">
                  <div className="relative shrink-0 size-[11.667px]" data-node-id="1:5980" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:5982">
                    <p className="leading-[14px]">{translateDesignText("보관완료", props.locale)}</p>
                  </div>
                </div>
                <div className="bg-[rgba(44,57,103,0.5)] content-stretch flex gap-[3.99px] items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:5983" data-name="Overlay">
                  <div className="h-[12.25px] relative shrink-0 w-[9.333px]" data-node-id="1:5984" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#a2c9ff] text-[12px] whitespace-nowrap" data-node-id="1:5986">
                    <p className="leading-[14px]">{translateDesignText("PUF 보호", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.8)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.2)] top-0 w-full" data-node-id="1:5987" data-name="Header">
        <div className="content-stretch flex h-[64px] items-center justify-between max-w-[1024px] px-[16px] relative shrink-0 w-full" data-node-id="1:5988" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:5989" data-name="Container">
            <div className="max-w-[127.55999755859375px] relative shrink-0 size-[32px]" data-node-id="1:5990" data-name="D-GO Logo">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDGoLogo} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:5991" data-name="Container">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:5992" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5993" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.5px] whitespace-nowrap" data-node-id="1:5994">
                    <p className="leading-[18px]">{translateDesignText("D-GO", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:5995" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:5996">
                    <p className="leading-[14px]">{translateDesignText("Files", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:5997" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="1:5998">
                  <p className="leading-[16px]">{translateDesignText("D-GO-4821", props.locale)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:5999" data-name="Container">
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="1:6000" data-name="Link - 설정">
              <div className="h-[20px] relative shrink-0 w-[20.1px]" data-node-id="1:6001" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer15} />
              </div>
            </div>
            <div className="bg-[#adc6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="1:6003" data-name="Background">
              <div className="relative shrink-0 size-[12px]" data-node-id="1:6004" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.85)] bottom-0 content-stretch flex flex-col items-start left-0 shadow-[0px_-1px_12px_0px_rgba(0,0,0,0.3)] w-full" data-node-id="1:6006" data-name="Nav">
        <div className="content-stretch flex h-[64px] items-center max-w-[672px] px-[16px] relative shrink-0 w-full" data-node-id="1:6007" data-name="Container">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6008" data-name="Link">
            <div className="h-[18px] relative shrink-0 w-[16px]" data-node-id="1:6009" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} />
            </div>
            <div className="h-[10.805px] relative shrink-0 w-[10.207px]" data-node-id="1:6011" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer18} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] px-[15.99px] py-[3px] relative shrink-0" data-node-id="1:6013" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[21.5px]" data-node-id="1:6014" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer19} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6016" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6017">
                <p className="leading-[14px]">{translateDesignText("파일", props.locale)}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6018" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[20px]" data-node-id="1:6019" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer20} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6021" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6022">
                <p className="leading-[14px]">{translateDesignText("기기", props.locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  , props);
}
