// src/pages/AIWorkflows.jsx
import { useState } from "react";
import BilingualTag from "../components/ui/BilingualTag";

const AI_FEATURES_2026 = [
  {
    id: "text-editing",
    badge: "效率提升 300% · 必學第一名",
    titleEn: "Text-Based Editing & Bulk Pause Removal",
    titleZh: "AI 語音轉文字剪輯 ＆ 一鍵批量砍停頓",
    uiLocation: "Window → Text → Transcript 頁籤",
    summary:
      "在 Premiere Pro 2026 中，匯入訪談或 Vlog 毛片時會自動透過 AI 轉錄為逐字稿（支援繁體中文、粵語、英文）。你不需要再盯著音訊波形慢慢聽，直接在文字面板「選取文字按 Backspace 刪除」，時間軸上的影片就會自動完成 Ripple Cut（波紋切割並無縫貼齊）！",
    steps: [
      "開啟 Window > Text 面板，切到「Transcript」頁籤，點擊 Create transcript（語言可選 Traditional Chinese、Cantonese 或 English）。",
      "點擊漏斗過濾圖示 (Filter)，勾選「Pauses（空白停頓）」與「Filler Words（贅字如 um, uh）」。",
      "點擊「Delete All（全部刪除）」➔ 整支 20 分鐘毛片裡所有發呆、吸氣與冷場空白，1 秒內自動切乾淨並緊密貼齊！",
      "剪完後點擊右上角「CC (Create Captions)」按鈕，直接將逐字稿轉成時間軸上的同步字幕軌！",
    ],
    terms: [
      { zh: "AI 逐字稿面板", en: "Transcript" },
      { zh: "贅字與語氣詞", en: "Filler Words" },
      { zh: "停頓空檔偵測", en: "Pauses Detection" },
      { zh: "一鍵轉為字幕軌", en: "Create Captions from Transcript" },
    ],
  },
  {
    id: "generative-extend",
    badge: "Firefly Video AI · 2026 王牌功能",
    titleEn: "Generative Extend (Video & Audio Room Tone)",
    titleZh: "Firefly AI 生成式延展（無中生有補齊短缺畫面）",
    uiLocation: "Tools 工具列 → Generative Extend Tool (或長按 Ripple Edit B 鍵展開)",
    summary:
      "剪片最崩潰的事：轉場差 1 秒鐘畫面才夠長，但攝影師當時已經按下停止錄影了！2026 版的 Generative Extend 讓你直接往外拖曳片段邊緣，由 Adobe Firefly AI 自動推算並生成最多 2 秒的真實連續動作畫面，甚至能延長多達 10 秒的現場環境底噪 (Room Tone)！",
    steps: [
      "在時間軸左側工具列選擇「Generative Extend Tool（閃亮星星延展圖示）」。",
      "直接點擊時間軸上太短的片段尾端（或開頭），往外拉出你需要的額外秒數。",
      "放開滑鼠後，AI 會在幾秒鐘內自動分析人物眼神、背景雲朵或水波動態，無縫生成補齊畫面！",
      "若針對純音訊軌拖曳，AI 會自動生成自然的現場環境音（Room Tone），徹底解決對話剪接處死寂突兀的問題。",
    ],
    terms: [
      { zh: "AI 生成式延展", en: "Generative Extend" },
      { zh: "現場環境音補齊", en: "AI Audio Room Tone Extension" },
      { zh: "生成式 AI 標記", en: "Content Credentials" },
    ],
  },
  {
    id: "object-masking",
    badge: "免拉貝茲曲線 · 視覺特效革新",
    titleEn: "AI Object Masking & Fast Tracking",
    titleZh: "2026 AI 智慧物件遮罩與自動追蹤",
    uiLocation: "Program Monitor 預覽視窗 → Object Mask Tool → Properties Panel",
    summary:
      "過去想針對「畫面中的人臉局部提亮」或「把主角背後的路人模糊掉」，必須在 Effect Controls 手動一格一格拉鋼筆遮罩。2026 版導入全新 AI Object Masking，滑鼠移到主角或物件上會自動發光選取，一鍵完成高精準度動態追蹤遮罩！",
    steps: [
      "選取時間軸片段，在 Program Monitor 或 Properties 面板點擊「Object Mask（AI 物件遮罩）」。",
      "將滑鼠游標移到畫面中的人物、汽車或商品上，AI 會即時框出紫色邊緣預覽，點一下即可建立遮罩。",
      "搭配 Lumetri Color，你可以單獨將主角提亮 0.5 格曝光，或反轉遮罩 (Invert) 將背景壓暗營造立體電影感！",
    ],
    terms: [
      { zh: "AI 物件遮罩", en: "Object Mask Tool" },
      { zh: "雙向自動追蹤", en: "Track Selected Mask Forward/Backward" },
      { zh: "反轉遮罩區域", en: "Invert Mask" },
    ],
  },
  {
    id: "media-intelligence",
    badge: "百支毛片一秒找鏡頭 · 本機 AI",
    titleEn: "Media Intelligence & Visual Search",
    titleZh: "AI 媒體智慧語意搜尋（找畫面不用記檔名）",
    uiLocation: "Project Panel / Media Browser 頂部 AI 搜尋框",
    summary:
      "去旅遊拍了 300 個 `C0001.MP4 ~ C0300.MP4` 檔案，想找某個「主角在喝咖啡微笑」或「特寫無人機空拍山脈」的鏡頭？2026 的 Media Intelligence 會在背景自動分析畫面內容、鏡頭焦段與收音對話，讓你直接輸入自然語言秒搜素材！",
    steps: [
      "將素材匯入 Project Panel 後，右下角會自動在背景執行本機 AI 視覺索引（完全不需上傳雲端）。",
      "在 Project 面板頂端搜尋欄切換為「Visual（畫面語意）」或「Transcript（對話內容）」。",
      "直接輸入關鍵字如：`close up smile`（特寫微笑）、`sunset mountain`（夕陽山景）或 `drone aerial`（空拍），對應的片段秒數區間就會直接跳出來！",
    ],
    terms: [
      { zh: "媒體智慧引擎", en: "Media Intelligence" },
      { zh: "視覺內容語意搜尋", en: "Visual Content Search" },
      { zh: "鏡位景別自動辨識", en: "Shot Type (Close-up / Wide Shot)" },
    ],
  },
];

export default function AIWorkflows() {
  // 互動模擬器狀態：模擬 Text-Based Editing 一鍵刪除停頓與贅字
  const [cleanPauses, setCleanPauses] = useState(false);

  return (
    <div className="container">
      <div className="ai-header">
        <span className="badge-ai-tag">Adobe Premiere Pro 2026 (v26.0) AI Powered</span>
        <h1 className="ai-title">2026 AI 與專業實戰工作流</h1>
        <p className="page-desc">
          善用內建 AI
          工具處理繁瑣的「聽打粗剪、停頓修剪、片尾延展與去背遮罩」，把寶貴的時間留給真正的敘事節奏與創意。
        </p>
      </div>

      {/* 互動模擬器：親手體驗 Text-Based Editing 如何連動剪輯 */}
      <div className="step-card ai-demo-card">
        <div className="ai-demo-header">
          <div>
            <span className="cmd-en ai-demo-command">INTERACTIVE DEMO · TEXT-BASED EDITING</span>
            <h3 className="ai-demo-title">⚡ 互動體驗：2026 文字基準剪輯（一鍵消滅停頓與贅字）</h3>
          </div>
          <button
            type="button"
            onClick={() => setCleanPauses(!cleanPauses)}
            className={`ai-demo-toggle${cleanPauses ? " active" : ""}`}
          >
            {cleanPauses
              ? "↺ 還原原始毛片 (含停頓與贅字)"
              : "✂️ 點擊體驗：AI 一鍵刪除所有 [停頓] 與 [贅字]"}
          </button>
        </div>

        <div className="ui-diagram-box ai-transcript-box">
          <div className="ai-transcript-label">
            📝 <strong>Text Panel (Transcript 逐字稿視窗)</strong>：
          </div>
          {!cleanPauses ? (
            <div className="ai-transcript-text">
              <span className="ai-pause-mark">[ ... 2.4秒 空白停頓 ... ]</span>{" "}
              大家好！歡迎來到我的頻道， <span className="ai-filler-mark">呃...那個...</span>{" "}
              今天要跟大家分享 Premiere Pro 2026 最新的剪輯技巧，{" "}
              <span className="ai-pause-mark">[ ... 1.8秒 低頭看稿停頓 ... ]</span>{" "}
              只要學會這招，粗剪速度直接快三倍！
            </div>
          ) : (
            <div className="ai-transcript-text ai-transcript-text-clean">
              ✨ 大家好！歡迎來到我的頻道，今天要跟大家分享 Premiere Pro 2026
              最新的剪輯技巧，只要學會這招，粗剪速度直接快三倍！（已自動完成 3 處波紋切割，省下 4.8
              秒廢片！）
            </div>
          )}

          <div className="ai-timeline-summary">
            🎬 <strong>對應 Timeline 時間軸變化</strong>：<br />
            {!cleanPauses
              ? "V1/A1: [ 空白 2.4s | 大家好... | 呃那個 | 今天要... | 空白 1.8s | 只要學會... ] (總長 14.2 秒，節奏拖沓)"
              : "V1/A1: [ 大家好... ]|[ 今天要... ]|[ 只要學會... ] (總長 9.4 秒，零空隙緊湊成片！)"}
          </div>
        </div>
      </div>

      {/* 四大 AI 功能詳解卡片 */}
      <div className="shortcut-grid ai-feature-grid">
        {AI_FEATURES_2026.map((feat) => (
          <div key={feat.id} className="shortcut-card ai-feature-card">
            <div>
              <div className="ai-feature-header">
                <span className="cmd-en">{feat.titleEn}</span>
                <span className="badge-ai-tag">{feat.badge}</span>
              </div>

              <h2 className="ai-feature-title">{feat.titleZh}</h2>
              <div className="ai-feature-location">🧭 面板位置：{feat.uiLocation}</div>

              <p className="ai-feature-summary">{feat.summary}</p>

              <div className="ai-steps-box">
                <strong className="ai-steps-title">🛠️ 實戰操作步驟：</strong>
                <ol className="ai-steps-list">
                  {feat.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <div className="ai-terms-label">📌 相關英文介面詞彙：</div>
              <div className="ai-terms-list">
                {feat.terms.map((t, idx) => (
                  <BilingualTag key={idx} zh={t.zh} en={t.en} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
