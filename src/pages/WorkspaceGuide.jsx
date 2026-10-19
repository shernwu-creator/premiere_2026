// src/pages/WorkspaceGuide.jsx
import { useState } from "react";
import BilingualTag from "../components/ui/BilingualTag";
import UIHotspot from "../components/ui/UIHotspot";
import Keybd from "../components/ui/Keybd";

const WORKSPACE_PANELS = [
  {
    id: "header",
    number: 1,
    nameEn: "Header Bar (Import / Edit / Export)",
    nameZh: "頂部工作流程切換列",
    summary:
      "Premiere Pro 2026 最頂端的核心導航，將剪輯流程濃縮為三大階段，以及右側的 Workspaces（工作區佈局）切換選單。",
    keyTerms: [
      { zh: "匯入模式", en: "Import Mode" },
      { zh: "剪輯模式", en: "Edit Mode" },
      { zh: "匯出模式", en: "Export Mode" },
      { zh: "工作區預設集", en: "Workspaces (Essentials / Vertical)" },
    ],
    shortcuts: [
      { label: "匯入媒體", win: ["Ctrl", "I"], mac: ["Cmd", "I"] },
      { label: "進入匯出面板", win: ["Ctrl", "M"], mac: ["Cmd", "M"] },
    ],
    beginnerTip:
      "如果弄亂了面板位置，隨時點擊右上角 Workspaces 圖示 → 選擇「Reset to Saved Layout」即可一鍵恢復整齊介面！",
  },
  {
    id: "source",
    number: 2,
    nameEn: "Source Monitor & Effect Controls",
    nameZh: "來源預覽視窗 ＆ 效果控制項",
    summary:
      "左上方區域。Source Monitor 用於在把毛片放進時間軸前，先預覽並用 I / O 抓出精華片段；切換頁籤則可進入 Effect Controls 設定關鍵影格 (Keyframes)。",
    keyTerms: [
      { zh: "標記入點", en: "Mark In" },
      { zh: "標記出點", en: "Mark Out" },
      { zh: "僅拖曳影像 / 音訊", en: "Drag Video Only / Audio Only" },
      { zh: "效果控制與關鍵影格", en: "Effect Controls (Motion / Opacity)" },
    ],
    shortcuts: [
      { label: "標記入點 / 出點", win: ["I", "O"], mac: ["I", "O"] },
      { label: "插入 / 覆蓋至時間軸", win: [",", "."], mac: [",", "."] },
    ],
    beginnerTip:
      "在 Project 面板「連點兩下」任何影片素材，就會送到 Source Monitor 預覽，養成先在這裡挑片段再放進時間軸的好習慣！",
  },
  {
    id: "program",
    number: 3,
    nameEn: "Program Monitor",
    nameZh: "節目預覽視窗（最終成片畫面）",
    summary:
      "正上方偏中區域，即時顯示目前下方的 Timeline（時間軸）剪輯出來的最終畫面。2026 版支援直接在畫面上選取文字、調整物件位置與使用 AI Object Masking。",
    keyTerms: [
      { zh: "預覽解析度", en: "Playback Resolution (Full / 1/2 / 1/4)" },
      { zh: "安全框與參考線", en: "Safe Margins / Rulers & Guides" },
      { zh: "比較檢視（調色對照）", en: "Comparison View" },
    ],
    shortcuts: [
      { label: "全螢幕純畫面預覽", win: ["Ctrl", "`"], mac: ["Ctrl", "`"] },
      { label: "播放 / 暫停", win: ["Space"], mac: ["Space"] },
    ],
    beginnerTip:
      "如果剪 4K 影片覺得播放卡頓，把 Program Monitor 右下角的「Full」改成「1/2」或「1/4」，只會降低預覽畫質，完全不影響匯出成片畫質！",
  },
  {
    id: "properties",
    number: 4,
    nameEn: "Properties Panel & Text Panel (2026 核心)",
    nameZh: "2026 智慧屬性面板 ＆ AI 文字轉錄面板",
    summary:
      "右側區域。Properties Panel 是 2026 版最重要的革新！它會根據你在時間軸點選的是「影片、文字、音訊或轉場」，自動切換顯示最常用的調整參數，免去翻找深層選單的痛苦。",
    keyTerms: [
      { zh: "隨選智慧屬性", en: "Context-Sensitive Properties" },
      { zh: "快速裁切與縮放", en: "Transform & Quick Crop" },
      { zh: "AI 語音轉文字剪輯", en: "Text Panel (Transcript & Captions)" },
      { zh: "Lumetri 調色面板", en: "Lumetri Color" },
    ],
    shortcuts: [
      { label: "選取播放頭所在片段並喚醒屬性", win: ["D"], mac: ["D"] },
      { label: "新增文字圖層", win: ["Ctrl", "T"], mac: ["Cmd", "T"] },
    ],
    beginnerTip:
      "以前改字體要去 Essential Graphics、改大小要去 Effect Controls；現在在 2026 版只要點一下片段，全部都在右邊的 Properties 面板一次搞定！",
  },
  {
    id: "project",
    number: 5,
    nameEn: "Project Panel / Media Browser / Effects",
    nameZh: "專案素材庫 ＆ 效果庫",
    summary:
      "左下角區域，像你的食材倉庫。存放所有匯入的影片、音樂、序列 (Sequences) 與資料夾 (Bins)。2026 版更內建 Media Intelligence，可直接輸入「海邊夕陽」或「笑臉」用 AI 搜尋素材畫面！",
    keyTerms: [
      { zh: "分類資料夾", en: "Bins (Folders)" },
      { zh: "時間軸序列", en: "Sequence" },
      { zh: "2026 AI 畫面語意搜尋", en: "Media Intelligence Search" },
      { zh: "視訊與音訊特效庫", en: "Effects & Transitions" },
    ],
    shortcuts: [
      { label: "建立新序列 (Sequence)", win: ["Ctrl", "N"], mac: ["Cmd", "N"] },
      { label: "放大游標所在面板", win: ["` (波浪鍵)"], mac: ["` (波浪鍵)"] },
    ],
    beginnerTip:
      "強烈建議一開專案就建立 4 個 Bins 資料夾：01_Footage (毛片)、02_Audio (音樂音效)、03_Graphics (字卡圖片)、04_Sequences (序列)。",
  },
  {
    id: "tools",
    number: 6,
    nameEn: "Tools Panel (含 Generative Extend)",
    nameZh: "剪輯工具箱",
    summary:
      "位於時間軸左側的直立工具列。包含選取 (V)、剃刀 (C)、波紋編輯 (B)、滑動工具 (Y) 以及 2026 全新的 Firefly AI 生成式延展工具 (Generative Extend Tool)。",
    keyTerms: [
      { zh: "選取工具", en: "Selection Tool (V)" },
      { zh: "剃刀切割工具", en: "Razor Tool (C)" },
      { zh: "向後全選軌道", en: "Track Select Forward (A)" },
      { zh: "AI 生成式延展工具", en: "Generative Extend Tool (2026 AI)" },
    ],
    shortcuts: [
      { label: "切換回選取工具", win: ["V"], mac: ["V"] },
      { label: "切換剃刀工具", win: ["C"], mac: ["C"] },
    ],
    beginnerTip:
      "滑鼠移到工具圖示上長按左鍵，會展開隱藏的子工具選單（例如 Ripple Edit 下方藏著 Rolling Edit 與 Generative Extend）。",
  },
  {
    id: "timeline",
    number: 7,
    nameEn: "Timeline Panel (Sequences & Tracks)",
    nameZh: "時間軸與多軌剪輯區（主戰場）",
    summary:
      "右下角最寬廣的工作區。以藍色分隔線為界：上半部 V1, V2, V3 為影像軌（越上層會蓋住越下層，像 Photoshop 圖層）；下半部 A1, A2, A3 為音訊軌（所有軌道聲音會混合一起播放）。",
    keyTerms: [
      { zh: "藍色播放頭", en: "Playhead (Current Time Indicator)" },
      { zh: "視訊軌 / 音訊軌", en: "Video Tracks (V1~Vn) / Audio Tracks (A1~An)" },
      { zh: "磁吸對齊功能", en: "Snap in Timeline (S)" },
      { zh: "鎖定軌道 / 隱藏軌道", en: "Toggle Track Lock / Toggle Track Output (眼睛圖示)" },
    ],
    shortcuts: [
      { label: "播放頭位置切一刀", win: ["Ctrl", "K"], mac: ["Cmd", "K"] },
      { label: "極速波紋砍頭 / 砍尾", win: ["Q", "W"], mac: ["Q", "W"] },
    ],
    beginnerTip:
      "萬一剪輯時拉動片段卻不會自動吸附對齊切點，代表你不小心按到「S」關掉了磁鐵圖示 (Snap in Timeline)，再按一下 S 就會恢復！",
  },
];

export default function WorkspaceGuide() {
  const [activeId, setActiveId] = useState("properties");
  const currentPanel = WORKSPACE_PANELS.find((p) => p.id === activeId) || WORKSPACE_PANELS[0];

  return (
    <div className="container">
      <div className="workspace-header">
        <h1 className="page-title">Premiere Pro 2026 英文版介面互動全解析</h1>
        <p className="page-desc">
          點擊下方左側 <strong>「模擬介面面板 (1 ~ 7)」</strong>
          ，右側將即時顯示該面板的英文術語對照、核心功能與自學實戰秘訣。
        </p>
      </div>

      <div className="pr-mockup-wrapper">
        {/* 左側：互動式 Premiere Pro 2026 介面模擬圖 */}
        <div className="pr-window">
          {/* 1. Header Bar */}
          <div
            className={`pr-header-bar ${activeId === "header" ? "selected" : ""}`}
            onClick={() => setActiveId("header")}
          >
            <div className="pr-header-left">
              <UIHotspot number={1} active={activeId === "header"} />
              <span className="pr-header-mode">Import</span>
              <span className="pr-header-mode-active">Edit</span>
              <span className="pr-header-mode">Export</span>
            </div>
            <span className="pr-header-workspaces">Workspaces: Essentials ▾</span>
          </div>

          {/* 中央與底部面板 Grid */}
          <div className="pr-workspace-grid">
            {/* 2. Source Monitor */}
            <div
              className={`pr-panel-box ${activeId === "source" ? "selected" : ""}`}
              onClick={() => setActiveId("source")}
            >
              <div className="panel-title-en">
                <span>Source / Effect Controls</span>
                <UIHotspot number={2} active={activeId === "source"} />
              </div>
              <div className="pr-source-placeholder">[ 粗剪預覽 & I/O 標記區 ]</div>
              <div className="pr-panel-footer">
                <span>00:00:12:08</span>
                <span>{`{ I }   { O }   [ , ] [ . ]`}</span>
              </div>
            </div>

            {/* 3. Program Monitor */}
            <div
              className={`pr-panel-box ${activeId === "program" ? "selected" : ""}`}
              onClick={() => setActiveId("program")}
            >
              <div className="panel-title-en">
                <span>Program: Sequence 01</span>
                <UIHotspot number={3} active={activeId === "program"} />
              </div>
              <div className="pr-program-placeholder">🎬 [ 最終成片畫面預覽 ]</div>
              <div className="pr-panel-footer">
                <span>Fit</span>
                <span>1/2 Resolution</span>
              </div>
            </div>

            {/* 4. Properties & Text Panel (跨兩列高度) */}
            <div
              className={`pr-panel-box pr-panel-properties ${activeId === "properties" ? "selected" : ""}`}
              onClick={() => setActiveId("properties")}
            >
              <div className="panel-title-en">
                <span>Properties / Text</span>
                <UIHotspot number={4} active={activeId === "properties"} />
              </div>
              <div className="pr-properties-list">
                <div className="pr-property-item pr-property-item-accent">
                  <strong className="pr-property-title">✨ 2026 Properties</strong>
                  Transform / Scale / Crop
                </div>
                <div className="pr-property-item">
                  <strong className="pr-property-title">📝 AI Text / Captions</strong>
                  Transcript 語音轉文字
                </div>
                <div className="pr-property-item">
                  <strong className="pr-property-title">🎨 Lumetri Color</strong>
                  調色與音效面板
                </div>
              </div>
              <div className="pr-properties-caption">隨選即變上下文面板</div>
            </div>

            {/* 5. Project Panel */}
            <div
              className={`pr-panel-box ${activeId === "project" ? "selected" : ""}`}
              onClick={() => setActiveId("project")}
            >
              <div className="panel-title-en">
                <span>Project / Effects</span>
                <UIHotspot number={5} active={activeId === "project"} />
              </div>
              <div className="pr-project-tree">
                📁 01_Footage
                <br />📁 02_Audio
                <br />
                🎞️ Main_Sequence
              </div>
              <div className="pr-project-ai-search">🔍 AI Media Intelligence</div>
            </div>

            {/* 6 & 7. Tools + Timeline 複合區 */}
            <div className="pr-tools-timeline-row">
              {/* 6. Tools */}
              <div
                className={`pr-panel-box pr-panel-tools ${activeId === "tools" ? "selected" : ""}`}
                onClick={() => setActiveId("tools")}
              >
                <UIHotspot number={6} active={activeId === "tools"} />
                <div className="pr-tools-list">
                  ↖ V<br />⎯ A<br />⇄ B<br />🪒 C<br />✨ AI
                  <br />T
                </div>
              </div>

              {/* 7. Timeline */}
              <div
                className={`pr-panel-box ${activeId === "timeline" ? "selected" : ""}`}
                onClick={() => setActiveId("timeline")}
              >
                <div className="panel-title-en">
                  <span>Timeline (V1/A1)</span>
                  <UIHotspot number={7} active={activeId === "timeline"} />
                </div>
                <div className="pr-timeline-tracks">
                  <div className="pr-track pr-track-v2">V2: [ Graphic Title 字幕 ]</div>
                  <div className="pr-track pr-track-v1">V1: [ Clip_01.mp4 ] | [ Clip_02.mp4 ]</div>
                  <div className="pr-track pr-track-a1">A1: 〜〜〜 語音對話波形 〜〜〜</div>
                  <div className="pr-track pr-track-a2">A2: 🎵 BGM_Music.mp3 (Auto-Duck)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右側：點選面板的詳細圖文說明卡片 */}
        <div className="shortcut-card workspace-detail-card">
          <div>
            <div className="workspace-detail-heading">
              <UIHotspot number={currentPanel.number} active={true} />
              <span className="cmd-en workspace-detail-command">{currentPanel.nameEn}</span>
            </div>
            <h2 className="workspace-detail-title">{currentPanel.nameZh}</h2>
            <p className="workspace-detail-summary">{currentPanel.summary}</p>

            <h4 className="workspace-detail-subtitle">
              📌 面板內必認英文術語 (English UI Terms)：
            </h4>
            <div className="workspace-tag-list">
              {currentPanel.keyTerms.map((term, i) => (
                <BilingualTag key={i} zh={term.zh} en={term.en} />
              ))}
            </div>

            <h4 className="workspace-detail-subtitle">⌨️ 此面板常用快速鍵：</h4>
            <div className="workspace-shortcut-list">
              {currentPanel.shortcuts.map((sc, i) => (
                <div key={i} className="workspace-shortcut-row">
                  <span className="workspace-shortcut-label">{sc.label}</span>
                  <Keybd winKeys={sc.win} macKeys={sc.mac} />
                </div>
              ))}
            </div>
          </div>

          <div className="pro-tip-box workspace-tip">
            <strong>💡 給初學者的操作秘訣：</strong>
            {currentPanel.beginnerTip}
          </div>
        </div>
      </div>
    </div>
  );
}
