import { Thermometer, HardDrive, Battery, AlertTriangle, Lock, Activity, FileCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-3">
              <span className="badge text-[var(--accent-cyan)]">DASHBOARD</span>
            </div>
            <h1 className="text-3xl md:text-4xl mb-3">관리 대시보드</h1>
            <p className="text-base text-[var(--text-secondary)] max-w-3xl mx-auto">
              모바일 앱으로 실시간 모니터링 및 제어<br />
              언제 어디서나 D-GO Vault의 상태를 확인하세요
            </p>
          </div>

          {/* Main Dashboard Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc2MjQwNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="D-GO Dashboard"
              className="relative rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Widgets */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-8">주요 기능</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Device Health */}
            <div className="glass-card glass-card-hover p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <Thermometer className="text-[var(--accent-cyan)]" size={18} />
                </div>
                <span className="badge text-[var(--status-ok)]">정상</span>
              </div>

              <h3 className="text-base font-semibold mb-1">기기 상태</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                내부 온도·습도 실시간 모니터링
              </p>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--text-secondary)]">온도</span>
                    <span className="mono text-[var(--accent-cyan)]">23°C</span>
                  </div>
                  <div className="h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--status-ok)] to-[var(--accent-cyan)]" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] mt-0.5">UL CLASS 125 경계선: 52°C</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--text-secondary)]">습도</span>
                    <span className="mono text-[var(--accent-cyan)]">42%</span>
                  </div>
                  <div className="h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--status-ok)] to-[var(--accent-cyan)]" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage */}
            <div className="glass-card glass-card-hover p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <HardDrive className="text-[var(--accent-cyan)]" size={18} />
                </div>
                <span className="badge text-[var(--status-ok)]">RAID 1</span>
              </div>

              <h3 className="text-base font-semibold mb-1">저장소 용량</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                SSD 용량 및 RAID 1 상태
              </p>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--text-secondary)]">사용 중</span>
                    <span className="mono text-[var(--accent-cyan)]">256 GB / 512 GB</span>
                  </div>
                  <div className="h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--accent-cyan)] to-blue-500" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div className="p-2 rounded-md bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                  <div className="flex items-center gap-2 text-xs">
                    <Activity className="text-[var(--status-ok)]" size={14} />
                    <span className="text-[var(--text-secondary)]">실시간 미러링 활성</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UPS */}
            <div className="glass-card glass-card-hover p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <Battery className="text-[var(--accent-cyan)]" size={18} />
                </div>
                <span className="badge text-[var(--status-ok)]">충전 중</span>
              </div>

              <h3 className="text-base font-semibold mb-1">UPS 상태</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                배터리 잔량 및 전원 상태
              </p>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--text-secondary)]">배터리</span>
                    <span className="mono text-[var(--accent-cyan)]">95%</span>
                  </div>
                  <div className="h-1.5 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--status-ok)] to-[var(--accent-cyan)]" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="p-2 rounded-md bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    외부 전원: <span className="text-[var(--status-ok)]">연결됨</span><br />
                    예상 백업 시간: <span className="mono text-[var(--accent-cyan)]">4.2시간</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Access Log */}
            <div className="glass-card glass-card-hover p-4 md:col-span-2">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <Activity className="text-[var(--accent-cyan)]" size={18} />
                </div>
                <span className="badge text-[var(--text-secondary)]">최근 7일</span>
              </div>

              <h3 className="text-base font-semibold mb-1">접근 이력</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                개폐 이력 및 데이터 접근 타임라인
              </p>

              <div className="space-y-1.5">
                {[
                  { time: "2026-04-16 14:32", action: "파일 업로드", file: "contract_2026.pdf", status: "success" },
                  { time: "2026-04-16 10:15", action: "금고 개방", file: "PUF 인증 성공", status: "success" },
                  { time: "2026-04-15 18:47", action: "데이터 조회", file: "financial_report.xlsx", status: "success" },
                  { time: "2026-04-15 09:23", action: "금고 개방", file: "PUF 인증 성공", status: "success" },
                ].map((log, index) => (
                  <div key={index} className="flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-[var(--bg-primary)]/50 transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${log.status === 'success' ? 'bg-[var(--status-ok)]' : 'bg-[var(--status-warn)]'}`}></div>
                    <span className="font-medium text-xs whitespace-nowrap">{log.action}</span>
                    <span className="text-xs text-[var(--text-secondary)] truncate flex-1 min-w-0">{log.file}</span>
                    <span className="mono text-[10px] text-[var(--text-muted)] flex-shrink-0">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="glass-card glass-card-hover p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <AlertTriangle className="text-[var(--accent-cyan)]" size={18} />
                </div>
                <span className="badge text-[var(--status-ok)]">0 건</span>
              </div>

              <h3 className="text-base font-semibold mb-1">보안 알림</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                충격·파괴 시도 감지
              </p>

              <div className="p-3 rounded-md bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)] text-center">
                <FileCheck className="text-[var(--status-ok)] mx-auto mb-1" size={24} />
                <p className="text-xs text-[var(--status-ok)]">
                  이상 없음
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                  모든 센서 정상 작동 중
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Port Control */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-8">Secure Port 제어</h2>

          <div className="glass-card p-5 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                <Lock className="text-[var(--accent-cyan)]" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-0.5">USB-C 포트 상태</h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  PUF 승인 후에만 포트 활성화
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-md bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-semibold">USB-C 포트</h4>
                  <span className="text-[10px] text-[var(--text-muted)]">데이터 전송 및 충전</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--status-crit)]">비활성</span>
                  <div className="w-10 h-5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)] relative">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-[var(--text-muted)] transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-2.5 rounded-md bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                <div className="flex items-center gap-3">
                  <h4 className="text-sm font-semibold">네트워크 드라이브</h4>
                  <span className="text-[10px] text-[var(--text-muted)]">Wi-Fi Direct 접근</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--status-crit)]">비활성</span>
                  <div className="w-10 h-5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-hairline)] relative">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-[var(--text-muted)] transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="mt-2 p-3 rounded-md bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20">
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-cyan)] font-semibold">보안 안내:</span><br />
                  포트 활성화는 PUF 인증 후 앱에서만 가능합니다.<br />
                  무단 접근 시도는 자동으로 차단되며 로그에 기록됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OCR & Voice Features */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-8">캡처 기능</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* OCR */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <FileCheck className="text-[var(--accent-cyan)]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">문서 OCR</h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    카메라로 촬영한 문서를 PDF로 변환하여 암호화 저장
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">실시간 OCR 처리</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">PDF 자동 변환</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">원본은 단말에 남지 않음</span>
                </li>
              </ul>
            </div>

            {/* Voice */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                  <Activity className="text-[var(--accent-cyan)]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">음성 녹음</h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    회의록·녹취를 STT 변환하여 암호화 저장
                  </p>
                </div>
              </div>

              <ul className="space-y-1.5">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">화자 식별 기능</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">STT 자동 변환</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] flex-shrink-0"></div>
                  <span className="text-xs text-[var(--text-secondary)]">타임스탬프 자동 기록</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
