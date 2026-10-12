// Adapted from Figma D-Go APP. Layer IDs retain the design-to-code mapping.
import { mapDesignTree, translateDesignText, type DesignProps } from "./designHelpers";
const imgDGoLogo = "/assets/dgo-app/device-imgDGoLogo.png";
const imgContainer = "/assets/dgo-app/device-imgContainer.svg";
const imgContainer1 = "/assets/dgo-app/device-imgContainer1.svg";
const imgContainer2 = "/assets/dgo-app/device-imgContainer2.svg";
const imgContainer3 = "/assets/dgo-app/device-imgContainer3.svg";
const imgContainer4 = "/assets/dgo-app/device-imgContainer4.svg";
const imgContainer5 = "/assets/dgo-app/device-imgContainer5.svg";
const imgContainer6 = "/assets/dgo-app/device-imgContainer6.svg";
const imgMargin = "/assets/dgo-app/device-imgMargin.svg";
const imgContainer7 = "/assets/dgo-app/device-imgContainer7.svg";
const imgContainer8 = "/assets/dgo-app/device-imgContainer8.svg";
const imgContainer9 = "/assets/dgo-app/device-imgContainer9.svg";
const imgContainer10 = "/assets/dgo-app/device-imgContainer10.svg";
const imgContainer11 = "/assets/dgo-app/device-imgContainer11.svg";
const imgContainer12 = "/assets/dgo-app/device-imgContainer12.svg";
const imgContainer13 = "/assets/dgo-app/device-imgContainer13.svg";
const imgContainer14 = "/assets/dgo-app/device-imgContainer14.svg";
const imgContainer15 = "/assets/dgo-app/device-imgContainer15.svg";
const imgContainer16 = "/assets/dgo-app/device-imgContainer16.svg";
const imgContainer17 = "/assets/dgo-app/device-imgContainer17.svg";
const imgContainer18 = "/assets/dgo-app/device-imgContainer18.svg";
const imgContainer19 = "/assets/dgo-app/device-imgContainer19.svg";
const imgContainer20 = "/assets/dgo-app/device-imgContainer20.svg";
const imgContainer21 = "/assets/dgo-app/device-imgContainer21.svg";

export default function DeviceDesign(props: DesignProps) {
  return mapDesignTree(
    <div className="bg-[#04081e] content-stretch flex flex-col items-start relative size-full" data-node-id="1:6235" data-name="S-50 기기 및 금고 상태">
      <div className="bg-[#04081e] content-stretch flex flex-col items-start pb-[96px] pt-[64px] px-[16px] relative shrink-0 w-full" data-node-id="1:6236" data-name="Main">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6237" data-name="Adaptive 2-Column Grid on Tablet/Desktop">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6238" data-name="Left Column: Device Connection & Hardware PUF Security Key">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6239" data-name="Section - Status & Device Overview Card">
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="1:6240" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6241" data-name="Container">
                  <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-node-id="1:6242" data-name="Margin">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:6243" data-name="Container">
                      <div className="h-[15.833px] relative shrink-0 w-[15.542px]" data-node-id="1:6244" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6246" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap" data-node-id="1:6247">
                          <p className="leading-[14px]">{translateDesignText("단독 WPA3 하드웨어 볼트", props.locale)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6248" data-name="Heading 2">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white whitespace-nowrap" data-node-id="1:6249">
                      <p className="leading-[24px]">{translateDesignText("D-GO Secure Vault", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-node-id="1:6250" data-name="Margin">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6251" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] w-full" data-node-id="1:6252">
                        <p className="leading-[16px]">{translateDesignText("D-GO-4821 • 192.168.4.1", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(1,181,116,0.2)] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="1:6253" data-name="Status Pill: Connected / Safe">
                  <div className="bg-[#01b574] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="1:6254" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6255" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:6256">
                      <p className="leading-[14px]">{translateDesignText("보안 Wi-Fi 연결됨", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-node-id="1:6257" data-name="Quick Channel Metrics">
                <div className="bg-[rgba(25,30,53,0.6)] content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px p-[8px] relative rounded-[8px]" data-node-id="1:6258" data-name="Overlay">
                  <div className="h-[12.938px] relative shrink-0 w-[15px]" data-node-id="1:6259" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6261" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6262" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6263">
                        <p className="leading-[14px]">{translateDesignText("암호화 규격", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6264" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6265">
                        <p className="leading-[20px] mb-0">{translateDesignText("WPA3-SAE /", props.locale)}</p>
                        <p className="leading-[20px]">{translateDesignText("5.2GHz", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(25,30,53,0.6)] content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px px-[8px] py-[18px] relative rounded-[8px]" data-node-id="1:6266" data-name="Overlay">
                  <div className="h-[15.75px] relative shrink-0 w-[12px]" data-node-id="1:6267" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6269" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6270" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6271">
                        <p className="leading-[14px]">{translateDesignText("핸드셰이크 터널", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6272" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6273">
                        <p className="leading-[20px]">{translateDesignText("mTLS RFC 3161", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start justify-center pt-[8px] relative shrink-0 w-full" data-node-id="1:6274" data-name="Device Connection Action Controls">
                <div className="bg-[#242940] content-stretch flex flex-[1_0_0] gap-[4px] h-[48px] items-center justify-center min-w-px relative rounded-[8px]" data-node-id="1:6275" data-name="Button">
                  <div className="relative shrink-0 size-[12px]" data-node-id="1:6276" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:6278" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde1ff] text-[14px] text-center whitespace-nowrap" data-node-id="1:6279">
                      <p className="leading-[20px]">{translateDesignText("다시 연결", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(36,41,64,0.6)] content-stretch flex flex-[1_0_0] gap-[4px] h-[48px] items-center justify-center min-w-px relative rounded-[8px]" data-node-id="1:6280" data-name="Button">
                  <div className="relative shrink-0 size-[15px]" data-node-id="1:6281" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:6283" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[14px] text-center whitespace-nowrap" data-node-id="1:6284">
                      <p className="leading-[20px]">{translateDesignText("연결 끊기", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6285" data-name="Section - Hardware PUF Security Key Status Card">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6286" data-name="Container">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6287" data-name="Container">
                  <div className="bg-[rgba(75,142,255,0.2)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-node-id="1:6288" data-name="Overlay">
                    <div className="h-[16.208px] relative shrink-0 w-[15px]" data-node-id="1:6289" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5.5px] items-start leading-[0] pb-[2.5px] relative shrink-0 whitespace-nowrap" data-node-id="1:6291" data-name="Paragraph">
                    <div className="flex flex-col font-medium font-medium justify-center relative shrink-0 text-[20px] text-white" data-node-id="1:6292">
                      <p className="leading-[18px]">{translateDesignText("하드웨어 보안 키 (PUF)", props.locale)}</p>
                    </div>
                    <div className="flex flex-col font-medium justify-center not-italic relative shrink-0 text-[#c1c6d7] text-[12px]" data-node-id="1:6293">
                      <p className="leading-[16px]">{translateDesignText("물리적 고유 반도체 지문 모듈", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(1,181,116,0.2)] content-stretch flex flex-col items-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="1:6294" data-name="Overlay">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:6295">
                    <p className="leading-[14px]">{translateDesignText("정상 장착", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#090d2e] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6296" data-name="PUF Physical Snapshot / Graphic">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6297" data-name="Container">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6298" data-name="Container">
                    <div className="h-[17.5px] relative shrink-0 w-[18.333px]" data-node-id="1:6299" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6301" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6302">
                        <p className="leading-[20px]">{translateDesignText("PUF Key Gen 1", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6303" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6304">
                      <p className="leading-[16px]">{translateDesignText("SN: PUF-09X-774A", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[4px] relative shrink-0 w-full" data-node-id="1:6305" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6306" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6307">
                      <p className="leading-[16px]">{translateDesignText("복구 키 백업", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:6308" data-name="Container">
                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-node-id="1:6309" data-name="Container">
                      <div className="bg-[#01b574] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="1:6310" data-name="Background" />
                      <div className="bg-[#01b574] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="1:6311" data-name="Background" />
                      <div className="bg-[#01b574] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="1:6312" data-name="Background" />
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-node-id="1:6313" data-name="Margin">
                      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="1:6314">
                        <p className="leading-[14px]">{translateDesignText("3/3 등록됨", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.4)] content-stretch flex gap-[4px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6315" data-name="Security Warning & Policy Notice">
                <div className="h-[17px] relative shrink-0 w-[15px]" data-node-id="1:6316" data-name="Margin">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
                </div>
                <div className="content-stretch flex flex-col items-start pr-[2.47px] relative shrink-0" data-node-id="1:6318" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6319">
                    <p className="leading-[19.5px] mb-0">{translateDesignText("보안 키가 제거되면 즉시 모든 전송 작업이 중단되며,", props.locale)}</p>
                    <p className="leading-[19.5px] mb-0">{translateDesignText("데이터 침해 방지를 위해 하드웨어 금고 전체가 자동", props.locale)}</p>
                    <p className="leading-[19.5px]">{translateDesignText("잠금 보호 모드로 전환됩니다.", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:6320" data-name="Right Column: Logical Vault Door, Classification Storage, Security Clock & Action Settings">
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6321" data-name="Section - Logical Vault Door Status Card">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6322" data-name="Container">
                <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-node-id="1:6323" data-name="Margin">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6324" data-name="Container">
                    <div className="bg-[rgba(246,173,85,0.2)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-node-id="1:6325" data-name="Overlay">
                      <div className="h-[17.5px] relative shrink-0 w-[13.333px]" data-node-id="1:6326" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6328" data-name="Container">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6329" data-name="Heading 3">
                        <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:6330">
                          <p className="leading-[18px]">{translateDesignText("논리 금고 도어 상태", props.locale)}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6331" data-name="Container">
                        <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#c1c6d7] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:6332">
                          <p className="leading-[16px]">{translateDesignText("Vault Logical Partition Status", props.locale)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(246,173,85,0.2)] content-stretch flex gap-[6px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-node-id="1:6333" data-name="Overlay">
                  <div className="bg-[#f6ad55] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="1:6334" data-name="Background" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6335" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:6336">
                      <p className="leading-[14px]">{translateDesignText("금고 열림 (Unlocked)", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.5)] content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6337" data-name="Overlay">
                <div className="bg-[rgba(246,173,85,0.15)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-node-id="1:6338" data-name="Overlay">
                  <div className="h-[14.667px] relative shrink-0 w-[18.333px]" data-node-id="1:6339" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6341" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6342" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6343">
                      <p className="leading-[20px]">{translateDesignText("본체 PIN 6자리 인증 완료", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:6344" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#c1c6d7] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:6345">
                      <p className="leading-[16px]">{translateDesignText("본체 PIN 인증을 통해 열려 있는 상태입니다 (동기화 활성)", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6346" data-name="Section - Storage Metrics by Classification Card">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6347" data-name="Container">
                <div className="[word-break:break-word] content-stretch flex flex-col font-medium gap-[5.5px] items-start leading-[0] not-italic pb-[2.5px] relative shrink-0 whitespace-nowrap" data-node-id="1:6348" data-name="Paragraph">
                  <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-white" data-node-id="1:6349">
                    <p className="leading-[18px]">{translateDesignText("분류 등급별 금고 공간", props.locale)}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[#c1c6d7] text-[12px]" data-node-id="1:6350">
                    <p className="leading-[16px]">{translateDesignText("하드웨어 NVMe 격리 저장소", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6351" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6352">
                    <p className="leading-[14px]">{translateDesignText("총 512 GB", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.6)] content-stretch flex flex-col gap-[6px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6353" data-name="Classification C (Active)">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6354" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:6355" data-name="Container">
                    <div className="bg-[rgba(0,155,208,0.3)] content-stretch flex flex-col items-start pl-[8px] pr-[12.09px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="1:6356" data-name="Overlay">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7ad0ff] text-[12px] whitespace-nowrap" data-node-id="1:6357">
                        <p className="leading-[14px] mb-0">{translateDesignText("등급", props.locale)}</p>
                        <p className="leading-[14px]">{translateDesignText("C", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pr-[3.27px] relative shrink-0" data-node-id="1:6358" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6359">
                        <p className="leading-[20px] mb-0">{translateDesignText("일반 및 업무 데", props.locale)}</p>
                        <p className="leading-[20px]">{translateDesignText("이터", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[38px] relative shrink-0 w-[149.34px]" data-node-id="1:6360" data-name="Container">
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Liberation_Mono:Bold'] justify-center leading-[0] left-0 not-italic text-[24px] text-white top-[12px] whitespace-nowrap" data-node-id="1:6361">
                      <p className="leading-[24px]">{translateDesignText("48.2", props.locale)}</p>
                    </div>
                    <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-normal font-normal justify-center leading-[0] left-[61.61px] text-[#c1c6d7] text-[12px] top-[14px] whitespace-nowrap" data-node-id="1:6362">
                      <p className="leading-[14px]">{translateDesignText("GB", props.locale)}</p>
                    </div>
                    <div className="absolute content-stretch flex flex-col items-start left-[83.78px] pr-[4.94px] top-[6px]" data-node-id="1:6363" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6364">
                        <p className="leading-[16px] mb-0">{translateDesignText("/ 128 GB 사", props.locale)}</p>
                        <p className="leading-[16px]">{translateDesignText("용 가능", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[12px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:6365" data-name="Custom Progress Bar:margin">
                  <div className="bg-[rgba(174,185,225,0.1)] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-node-id="1:6366" data-name="Custom Progress Bar">
                    <div className="absolute bg-gradient-to-r from-[#03f7b3] inset-[0_62.4%_0_0] rounded-[9999px] to-[#006afd]" data-node-id="1:6367" data-name="Gradient" />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-between pt-[2px] relative shrink-0 w-full" data-node-id="1:6368" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6369" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[11px] whitespace-nowrap" data-node-id="1:6370">
                      <p className="leading-[16.5px]">{translateDesignText("37.6% 점유", props.locale)}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6371" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[11px] whitespace-nowrap" data-node-id="1:6372">
                      <p className="leading-[16.5px]">{translateDesignText("79.8 GB 여유", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.3)] content-stretch flex flex-col gap-[6px] items-start opacity-85 p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6373" data-name="Classification D (Pending Elevation)">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6374" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:6375" data-name="Container">
                    <div className="bg-[#2f334b] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="1:6376" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6377">
                        <p className="leading-[14px]">{translateDesignText("등급 D", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6378" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde1ff] text-[14px] whitespace-nowrap" data-node-id="1:6379">
                        <p className="leading-[20px]">{translateDesignText("기밀 및 금융 거래", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 text-[#c1c6d7] whitespace-nowrap" data-node-id="1:6380" data-name="Paragraph">
                    <div className="flex flex-col font-['Liberation_Mono:Bold'] justify-center not-italic relative shrink-0 text-[24px]" data-node-id="1:6381">
                      <p className="leading-[24px]">{translateDesignText("0", props.locale)}</p>
                    </div>
                    <div className="flex flex-col font-normal font-normal justify-center relative shrink-0 text-[12px]" data-node-id="1:6382">
                      <p className="leading-[14px]">{translateDesignText("GB", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:6383" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[8px] items-start min-w-px pr-[12px] relative" data-node-id="1:6384" data-name="Margin">
                    <div className="bg-[rgba(174,185,225,0.1)] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-node-id="1:6385" data-name="Overlay" />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6386" data-name="Container">
                    <div className="h-[12.833px] relative shrink-0 w-[11.083px]" data-node-id="1:6387" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:6389">
                      <p className="leading-[16px]">{translateDesignText("비활성 (상향 인증 대기)", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.3)] content-stretch flex flex-col gap-[6px] items-start opacity-85 p-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6390" data-name="Classification E (Pending Elevation)">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:6391" data-name="Container">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:6392" data-name="Container">
                    <div className="bg-[#2f334b] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="1:6393" data-name="Background">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6394">
                        <p className="leading-[14px]">{translateDesignText("등급 E", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6395" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde1ff] text-[14px] whitespace-nowrap" data-node-id="1:6396">
                        <p className="leading-[20px]">{translateDesignText("최고기밀 물리봉인", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex gap-[4px] items-baseline leading-[0] relative shrink-0 text-[#c1c6d7] whitespace-nowrap" data-node-id="1:6397" data-name="Paragraph">
                    <div className="flex flex-col font-['Liberation_Mono:Bold'] justify-center not-italic relative shrink-0 text-[24px]" data-node-id="1:6398">
                      <p className="leading-[24px]">{translateDesignText("0", props.locale)}</p>
                    </div>
                    <div className="flex flex-col font-normal font-normal justify-center relative shrink-0 text-[12px]" data-node-id="1:6399">
                      <p className="leading-[14px]">{translateDesignText("GB", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-node-id="1:6400" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[8px] items-start min-w-px pr-[12px] relative" data-node-id="1:6401" data-name="Margin">
                    <div className="bg-[rgba(174,185,225,0.1)] h-[8px] relative rounded-[9999px] shrink-0 w-full" data-node-id="1:6402" data-name="Overlay" />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6403" data-name="Container">
                    <div className="h-[12.833px] relative shrink-0 w-[11.083px]" data-node-id="1:6404" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#f6ad55] text-[12px] whitespace-nowrap" data-node-id="1:6406">
                      <p className="leading-[16px]">{translateDesignText("비활성 (상향 인증 대기)", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b content-stretch flex flex-col from-[#0f123b] gap-[8px] items-start p-[20px] relative rounded-[12px] shrink-0 to-[#020515] w-full" data-node-id="1:6407" data-name="Section - Hardware System & Cryptographic Clock Sync Card">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6408" data-name="Heading 3">
                <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full" data-node-id="1:6409">
                  <p className="leading-[18px]">{translateDesignText("본체 시스템 및 보안 시계", props.locale)}</p>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.4)] content-stretch flex items-center justify-between pl-[12px] pr-[11.99px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6410" data-name="Overlay">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6411" data-name="Container">
                  <div className="h-[18.333px] relative shrink-0 w-[12.5px]" data-node-id="1:6412" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6414" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde1ff] text-[14px] whitespace-nowrap" data-node-id="1:6415">
                      <p className="leading-[20px]">{translateDesignText("소프트웨어 펌웨어", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[5.99px] items-center relative shrink-0" data-node-id="1:6416" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6417" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6418">
                      <p className="leading-[20px]">{translateDesignText("v2.5.0-release", props.locale)}</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[13.333px]" data-node-id="1:6419" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(25,30,53,0.4)] content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:6421" data-name="Overlay">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:6422" data-name="Container">
                  <div className="relative shrink-0 size-[16.667px]" data-node-id="1:6423" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
                  </div>
                  <div className="content-stretch flex flex-col items-start pr-[27.14px] relative shrink-0" data-node-id="1:6425" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#dde1ff] text-[14px] whitespace-nowrap" data-node-id="1:6426">
                      <p className="leading-[20px] mb-0">{translateDesignText("단말 시각 보정 (RFC", props.locale)}</p>
                      <p className="leading-[20px]">{translateDesignText("3161)", props.locale)}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pr-[7.53px] relative shrink-0" data-node-id="1:6427" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#01b574] text-[12px] whitespace-nowrap" data-node-id="1:6428">
                    <p className="leading-[14px] mb-0">{translateDesignText("본체와 정확히 동기화", props.locale)}</p>
                    <p className="leading-[14px]">{translateDesignText("됨", props.locale)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="1:6429" data-name="Section - Security Settings & Actions Footer Area">
              <div className="bg-[#191e35] content-stretch flex h-[56px] items-center justify-between px-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="1:6430" data-name="Link - Policy Shortcut to S-60">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6431" data-name="Container">
                  <div className="bg-[#2f334b] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-node-id="1:6432" data-name="Background">
                    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-node-id="1:6433" data-name="Container">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer13} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6435" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6436" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:6437">
                        <p className="leading-[20px]">{translateDesignText("보안 키 제거 시 금고 잠금 정책", props.locale)}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6438" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#aeb9e1] text-[12px] whitespace-nowrap" data-node-id="1:6439">
                        <p className="leading-[16px]">{translateDesignText("현재 정책: 60초 유예 후 강제 잠금", props.locale)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[10px] relative shrink-0 w-[6.167px]" data-node-id="1:6440" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer14} />
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[52px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="1:6442" data-name="Danger Unpair Button:margin">
                <div className="bg-[rgba(25,30,53,0.3)] content-stretch flex gap-[4px] h-[48px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-node-id="1:6443" data-name="Danger Unpair Button">
                  <div className="h-[16.5px] relative shrink-0 w-[17.167px]" data-node-id="1:6444" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer15} />
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="1:6446" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[14px] text-center whitespace-nowrap" data-node-id="1:6447">
                      <p className="leading-[20px]">{translateDesignText("이 폰 연결 해제", props.locale)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.8)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.2)] top-0 w-full" data-node-id="1:6448" data-name="Header">
        <div className="content-stretch flex h-[64px] items-center justify-between max-w-[1024px] px-[16px] relative shrink-0 w-full" data-node-id="1:6449" data-name="Container">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6450" data-name="Container">
            <div className="max-w-[147.5px] relative shrink-0 size-[32px]" data-node-id="1:6451" data-name="D-GO Logo">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDGoLogo} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-node-id="1:6452" data-name="Container">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:6453" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6454" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.5px] whitespace-nowrap" data-node-id="1:6455">
                    <p className="leading-[18px]">{translateDesignText("D-GO", props.locale)}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6456" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-medium font-medium justify-center leading-[0] relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6457">
                    <p className="leading-[14px]">{translateDesignText("Devices", props.locale)}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:6458" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-normal font-normal justify-center leading-[0] relative shrink-0 text-[#aeb9e1] text-[12px] tracking-[0.6px] whitespace-nowrap" data-node-id="1:6459">
                  <p className="leading-[16px]">{translateDesignText("D-GO-4821", props.locale)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:6460" data-name="Container">
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="1:6461" data-name="Link - 설정">
              <div className="h-[20px] relative shrink-0 w-[20.1px]" data-node-id="1:6462" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
              </div>
            </div>
            <div className="bg-[#adc6ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="1:6464" data-name="Background">
              <div className="relative shrink-0 size-[12px]" data-node-id="1:6465" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[12px] bg-[rgba(4,8,30,0.85)] bottom-[-0.17px] content-stretch flex flex-col items-start left-0 shadow-[0px_-1px_12px_0px_rgba(0,0,0,0.3)] w-full" data-node-id="1:6467" data-name="Nav">
        <div className="content-stretch flex h-[64px] items-center max-w-[672px] px-[16px] relative shrink-0 w-full" data-node-id="1:6468" data-name="Container">
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6469" data-name="Link">
            <div className="h-[18px] relative shrink-0 w-[16px]" data-node-id="1:6470" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer18} />
            </div>
            <div className="h-[10.805px] relative shrink-0 w-[10.207px]" data-node-id="1:6472" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer19} />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] px-[15.99px] py-[3px] relative shrink-0" data-node-id="1:6474" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[21.5px]" data-node-id="1:6475" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer20} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6477" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c1c6d7] text-[12px] whitespace-nowrap" data-node-id="1:6478">
                <p className="leading-[14px]">{translateDesignText("파일", props.locale)}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-center justify-center min-h-[48px] min-w-[56px] pl-[15.98px] pr-[16px] py-[3px] relative shrink-0" data-node-id="1:6479" data-name="Link">
            <div className="h-[16px] relative shrink-0 w-[20px]" data-node-id="1:6480" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer21} />
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:6482" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#adc6ff] text-[12px] whitespace-nowrap" data-node-id="1:6483">
                <p className="leading-[14px]">{translateDesignText("기기", props.locale)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  , props);
}
