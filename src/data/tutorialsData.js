// src/data/tutorialsData.js

export const TUTORIAL_LEVELS = [
  { id: "beginner", title: "LEVEL 1 · 初學者地基篇 (Beginner)" },
  { id: "intermediate", title: "LEVEL 2 · 中階流暢與質感篇 (Intermediate)" },
  { id: "advanced", title: "LEVEL 3 · 進階效率與特效篇 (Advanced)" },
];

export const TUTORIALS_DATA = [
  // ==================== LEVEL 1: 初學者篇 ====================
  {
    id: "ch1-project-sequence",
    level: "beginner",
    chapterCode: "CH 01",
    title: "建立專案、切換英文介面與 Sequence 序列黃金設定",
    subtitle: "搞懂 Frame Rate 與 1080p/4K 設定，避免匯出黑邊或掉格",
    readTime: "8 min",
    summary:
      "在 Premiere Pro 中，「Project (.prproj)」就像一個大公事包，而裡面可以建立很多條「Sequence（序列/時間軸）」。剪輯的第一步，就是確保序列的解析度與影格率符合你的拍攝素材。",
    keyTerms: [
      { zh: "序列（時間軸）", en: "Sequence" },
      { zh: "影格率（每秒張數）", en: "Frame Rate (Timebase)" },
      { zh: "像素長寬比", en: "Pixel Aspect Ratio (Square Pixels 1.0)" },
      { zh: "代理剪輯檔", en: "Proxy Media" },
    ],
    steps: [
      {
        stepTitle: "小技巧：如何將 Premiere Pro 2026 切換為中/英文雙語或純英文介面？",
        uiPath: "Ctrl/Cmd + F12 → Console Panel → Debug Database View",
        content:
          "為什麼專業教學都推薦用英文版？因為所有特效名稱（如 Warp Stabilizer、Lumetri Color）與國際論壇除錯都以英文為主。若你的軟體是中文版，無須重灌，只需透過內建工程面板即可一秒改為英文介面：",
        diagram: `[ 切換英文介面 3 步驟 ]\n1. 在軟體內按下 Ctrl + F12 (Mac: Cmd + Fn + F12) 喚出 Console 面板\n2. 點擊 Console 標題旁的三條線選單 (≡) ➔ 勾選「Debug Database View」\n3. 找到「ApplicationLanguage」欄位：\n   • 輸入 en_US ➔ 純英文介面 (推薦！)\n   • 勾選 Bilingual ➔ 中英雙語同時顯示 (適合過渡期)\n4. 重新啟動 Premiere Pro 立即生效！`,
        winKeys: ["Ctrl", "F12"],
        macKeys: ["Cmd", "F12"],
      },
      {
        stepTitle: "建立新專案 (New Project) 與整理 Bins 資料夾",
        uiPath: "Home Screen → New Project → Project Panel (左下角)",
        content:
          "打開 Premiere 2026 點擊 New Project，輸入專案名稱並選擇硬碟儲存路徑（建議放在 SSD 固態硬碟）。進入主畫面後，在左下角 Project 面板空白處按右鍵選「New Bin」，建立 4 個標準分類資料夾：",
        diagram: `📁 Project: MyFirstVlog.prproj\n ├── 📁 01_Footage   (放相機/手機拍的原始影片毛片)\n ├── 📁 02_Audio     (放 BGM 背景音樂、SFX 音效)\n ├── 📁 03_Graphics  (放 Logo、字卡、PNG 去背圖)\n └── 📁 04_Sequences (放時間軸序列，千萬別跟毛片混在一起！)`,
        winKeys: ["Ctrl", "I"],
        macKeys: ["Cmd", "I"],
      },
      {
        stepTitle: "建立黃金標準 Sequence（序列設定不踩雷）",
        uiPath: "File → New → Sequence (或直接將第一支主力影片拖曳至 Timeline)",
        content:
          "新手最怕自己設錯序列規格！有兩個最安全的方法：(1) 直接把你拍好的主力影片從 Project 拖進右側空白 Timeline，Pr 會自動建立一模一樣規格的序列；(2) 按 Ctrl/Cmd + N 手動設定橫式或直式短影音規格：",
        diagram: `[ 2026 常用 Sequence Settings 規格表 ]\n• YouTube 橫式標準 (1080p) : Frame Size 1920 x 1080 (16:9) | 29.97 or 30 fps\n• YouTube 高畫質 (4K)      : Frame Size 3840 x 2160 (16:9) | 29.97 or 60 fps\n• Reels / Shorts 直式短片   : Frame Size 1080 x 1920 (9:16) | 30 or 60 fps\n• 電影感敘事短片           : Frame Size 1920 x 1080        | 23.976 or 24 fps`,
        winKeys: ["Ctrl", "N"],
        macKeys: ["Cmd", "N"],
      },
    ],
    practiceTask:
      "打開你的 Premiere Pro 2026，建立一個名為「Practice_01」的專案，在 Project 面板建立 4 個分類 Bins，並按 Ctrl/Cmd + N 建立一個 1920x1080、30fps 的 Sequence。",
  },

  {
    id: "ch2-rough-cut",
    level: "beginner",
    chapterCode: "CH 02",
    title: "極速粗剪實戰：Source 預覽與黃金左手 Q / W 波紋剪輯",
    subtitle: "戒掉「用滑鼠慢慢拉邊緣補空隙」的慢速習慣",
    readTime: "12 min",
    summary:
      "拿到幾十段拍攝毛片時，千萬別一股腦全部丟進時間軸！學會「先在 Source 挑精華」以及在時間軸用「Q、W、Ctrl+K」連切帶刪，你的粗剪速度會比別人快上 3 倍。",
    keyTerms: [
      { zh: "入點 / 出點", en: "In Point (I) / Out Point (O)" },
      { zh: "波紋刪除（自動貼齊）", en: "Ripple Delete" },
      { zh: "播放頭", en: "Playhead" },
      { zh: "剃刀與切點", en: "Razor & Edit Point" },
    ],
    steps: [
      {
        stepTitle: "第一關：在 Source Monitor 用 I 與 O 挑選可用鏡頭",
        uiPath: "Double-click clip in Project Panel → Source Monitor (左上角)",
        content:
          "在左下角 Project 面板「連點兩下」影片素材，它會出現在左上角的 Source Monitor。按 L 快轉瀏覽，看到主角準備開口講話時按「I (Mark In)」，講完話瞬間按「O (Mark Out)」，最後按「. (句號 Overwrite)」或直接把畫面往下拖進時間軸。",
        diagram: `Source Monitor 預覽軸：\n[ 晃動廢片... ] ┣━━━━━━ (I 入點：精華對話區段 ：O 出點) ━━━━━━┫ [ 結尾NG... ]\n                         ⬇ 按下「 , (Insert)」或「 . (Overwrite)」\nTimeline 時間軸：        [====== 只有精華區段乾淨進入時間軸 ======]`,
        winKeys: ["I", "O"],
        macKeys: ["I", "O"],
      },
      {
        stepTitle: "第二關：時間軸上的神級組合技 —— Q 砍頭、W 砍尾",
        uiPath: "Timeline Panel → Playhead position → Press Q or W",
        content:
          "傳統做法是：按 C 切一刀 → 按 V 選取廢片 → 按 Delete → 再把後面片段拉過來補黑洞（共 4 步）。在 Premiere Pro 中，你只需要把藍色播放頭 (Playhead) 停在正確位置，按一顆鍵就結束了：",
        diagram: `【按 Q 鍵：Ripple Trim Previous (砍掉播放頭左邊到上個切點 + 自動往前補齊)】\n切點A ─── [ 呃...那個...(廢話) | 💙播放頭 大家好我是... ] ─── 切點B\n按下 Q 鍵後 ➔ [ 💙大家好我是... ] (前面廢話瞬間消失且不留黑格！)\n\n【按 W 鍵：Ripple Trim Next (砍掉播放頭右邊到下個切點 + 自動往前補齊)】\n切點A ─── [ 今天分享到這邊！💙播放頭 | (低頭關相機廢片...) ] ─── 切點B\n按下 W 鍵後 ➔ [ 今天分享到這邊！💙 ] [ 下一段影片自動無縫接上 ]`,
        winKeys: ["Q", "W"],
        macKeys: ["Q", "W"],
      },
      {
        stepTitle: "第三關：片段中間有口誤怎麼辦？Ctrl/Cmd + K 一刀切開",
        uiPath: "Timeline Panel → Add Edit (Ctrl/Cmd + K)",
        content:
          "如果廢話在片段正中間，把播放頭移到廢話開頭按「Ctrl/Cmd + K」切一刀，再移到廢話結束瞬間直接按「Q」，中間那段口誤就會直接被吃掉並無縫接合！",
        diagram: `[ 正常說話A ] ✂️(按 Ctrl+K 切開) [ 中間口誤NG... | 💙播放頭 正常說話B ]\n                                                   ⬆ 在這按 Q 鍵！\n結果 ➔ [ 正常說話A ][ 正常說話B ] (無縫接合完成)`,
        winKeys: ["Ctrl", "K"],
        macKeys: ["Cmd", "K"],
      },
    ],
    practiceTask:
      "匯入一段隨手用手機拍的 1 分鐘講話影片，強迫自己「完全不使用滑鼠點剃刀工具 (C)」，只用 Space / JKL 播放、Ctrl+K 切開、以及 Q 與 W 鍵，把所有停頓與廢話剪乾淨！",
  },

  {
    id: "ch3-properties-panel",
    level: "beginner",
    chapterCode: "CH 03",
    title: "2026 全新 Properties Panel（隨選智慧屬性面板）與字幕實戰",
    subtitle: "點選什麼就顯示什麼！縮放構圖、快速裁切與上字幕一次搞定",
    readTime: "10 min",
    summary:
      "在 Premiere Pro 2026 (v26.0) 中，右側的 Properties Panel 是新手最大的福音。無論你想把畫面放大做跳剪 (Jump Cut)、加上雙語字幕、還是調整音量，點一下片段就能直接在右側面板修改。",
    keyTerms: [
      { zh: "智慧屬性面板", en: "Properties Panel" },
      { zh: "畫面縮放與位置", en: "Scale & Position" },
      { zh: "快速裁切模式", en: "Quick Crop" },
      { zh: "文字圖層樣式", en: "Graphic Text & Linked Style" },
    ],
    steps: [
      {
        stepTitle: "點選影片片段：一秒調整 Scale（放大鏡次）與 Crop（裁切）",
        uiPath: "Select Video Clip in Timeline (Press D) → Properties Panel (右側)",
        content:
          "在剪訪談或 Vlog 時，如果兩段話剪在一起畫面跳動很突兀（Jump Cut），只要選取第二段影片（按 D），在右側 Properties 面板將 Scale 從 100% 改為 115%～120%，瞬間就像換了一台特寫機位一樣自然！",
        diagram: `Properties Panel (當選取 Video Clip 時)：\n┌──────────────────────────────────────────┐\n│ Transform                                │\n│  • Position : [ 960.0 ]  [ 540.0 ]       │\n│  • Scale    : [ 118.0 % ] ━━●━━━━━━ (放大構圖消除跳接感)\n│  • Crop     : [ Left / Right / Top / Bottom ] │\n│  • Opacity  : [ 100.0 % ]                │\n└──────────────────────────────────────────┘`,
        winKeys: ["D"],
        macKeys: ["D"],
      },
      {
        stepTitle: "使用 Type Tool 建立標題字卡與 Linked Style（統一樣式）",
        uiPath: "Press Ctrl/Cmd + T → Program Monitor → Properties Panel",
        content:
          "按下 Ctrl/Cmd + T 即可直接在畫面中央產生新的文字層（位於時間軸 V2 軌）。在右側 Properties 面板中調整字型 (Font)、填色 (Fill)、描邊 (Stroke) 與圓角背景底框 (Background)，並可儲存為 Linked Style 一鍵套用到整支影片。",
        diagram: `[ 高質感 YouTube 字幕建議參數 (Properties > Appearance) ]\n• Fill (文字顏色)       : #FFFFFF (純白) 或 #FFD34E (重點亮黃)\n• Stroke (外框描邊)     : 勾選，設為黑色 #000000，粗細 4 ~ 8 px\n• Background (半透明底) : 勾選，黑色不透明度 65%，Corner Radius (圓角) 設為 16`,
        winKeys: ["Ctrl", "T"],
        macKeys: ["Cmd", "T"],
      },
    ],
    practiceTask:
      "在你的時間軸上任選一段影片按 Ctrl+K 切成兩半，將後半段的 Scale 放大為 115%，並在 V2 軌按 Ctrl+T 加上一行帶有半透明圓角黑底的標題字幕。",
  },

  // ==================== LEVEL 2: 中階進修篇 ====================
  {
    id: "ch4-keyframes-motion",
    level: "intermediate",
    chapterCode: "CH 04",
    title: "Keyframes 關鍵影格動畫與 Bezier 絲滑緩動曲線",
    subtitle: "做出專業紀錄片般的 Ken Burns 緩慢推軌運鏡與字卡滑入效果",
    readTime: "15 min",
    summary:
      "為什麼別人做的圖片放大或字卡進場看起來特別絲滑，而自己做的卻像機器人一樣生硬？關鍵就在於「關鍵影格（Keyframes）」與「Ease In / Ease Out（貝茲曲線緩動）」。",
    keyTerms: [
      { zh: "關鍵影格（碼錶圖示）", en: "Toggle Animation (Stopwatch Icon)" },
      { zh: "緩入 / 緩出", en: "Temporal Interpolation: Ease In / Ease Out" },
      { zh: "效果控制面板", en: "Effect Controls Panel" },
      { zh: "動態模糊", en: "Transform Effect (Shutter Angle)" },
    ],
    steps: [
      {
        stepTitle: "打下兩個關鍵影格：起點 (A) 與終點 (B) 的狀態變化",
        uiPath: "Select Clip → Effect Controls Panel (左上角頁籤) → Motion",
        content:
          "要讓畫面產生動態，只需記住口訣：「先移時間軸播放頭 → 點一下碼錶圖示 (Toggle Animation) 打第一顆點 → 往後移播放頭 → 改數值自動產生第二顆點」。",
        diagram: `Effect Controls > Motion > Scale 關鍵影格時間軸：\n\n00:00 (片段起點)                        00:04 (4秒後)\n   ◆ (點擊碼錶：設為 100%) ───────────────► ◆ (輸入 115%，自動產生第二顆菱形點)\n   結果：畫面會在 4 秒內由 100% 平滑放大至 115% (推軌運鏡感)`,
        winKeys: ["Shift", "5"],
        macKeys: ["Shift", "5"],
      },
      {
        stepTitle: "告別機械感：右鍵改為 Bezier (Ease Out / Ease In)",
        uiPath: "Right-click Keyframe in Effect Controls → Temporal Interpolation",
        content:
          "預設的菱形關鍵影格是「Linear（等速直線運動）」，起步和煞車都很生硬。對著第一顆點按右鍵選「Ease Out（緩出：起步加速）」，對著最後一顆點按右鍵選「Ease In（緩入：結尾減速煞車）」，並展開小箭頭拉動曲線手把，動態瞬間擁有蘋果發表會般的絲滑感！",
        diagram: `[ Linear 等速運動 ]  速度：━━━━━━━━━━ (生硬啟動、突然急煞)\n[ Ease Out + In ]    速度：╭━━━━━━━━╮ (溫柔起步、高速滑行、絲滑煞車，形狀變成沙漏 ⧗)`,
        winKeys: ["←", "→"],
        macKeys: ["←", "→"],
      },
    ],
    practiceTask:
      "放一張靜態風景照或 B-Roll 到時間軸，在 Effect Controls 為 Scale 打上 100% 到 112% 的關鍵影格，並將兩顆點分別改為 Ease Out 與 Ease In。",
  },

  {
    id: "ch5-audio-color",
    level: "intermediate",
    chapterCode: "CH 05",
    title: "Essential Sound 智慧混音（自動壓低背景樂）與 Lumetri 基礎調色",
    subtitle: "解決「背景音樂蓋過人聲」與「膚色暗沉偏黃」兩大痛點",
    readTime: "15 min",
    summary:
      "觀眾可以容忍畫質普通，但無法忍受忽大忽小、聽不清人聲的音訊！學會 Essential Sound 的 Auto-Ducking（自動閃避）與 Lumetri Scopes 波形圖看曝光，你的影片質感立刻超越 90% 的自媒體創作者。",
    keyTerms: [
      { zh: "人聲對話 / 背景音樂標籤", en: "Audio Type: Dialogue / Music" },
      { zh: "自動閃避（人聲說話時壓低音樂）", en: "Ducking (Auto-Duck against Dialogue)" },
      { zh: "亮度波形示波器", en: "Lumetri Scopes (Waveform Luma)" },
      { zh: "一級色彩校正", en: "Basic Correction (WB / Exposure / Contrast)" },
    ],
    steps: [
      {
        stepTitle: "神技 Auto-Ducking：不需手動拉音量線，人聲開口音樂自動變小！",
        uiPath: "Window → Essential Sound → Tag Dialogue & Music → Enable Ducking",
        content:
          "以前為了讓人聲清楚，要在音樂軌打幾十個關鍵影格把音量拉低。現在只需兩步：(1) 框選 A1 所有人聲片段，在 Essential Sound 點擊「Dialogue」；(2) 選取 A2 的背景音樂，點擊「Music」，勾選「Ducking」並按下「Generate Keyframes」，Pr 就會自動在有人講話的地方把音樂壓低 -15dB，停頓時音樂自動回升！",
        diagram: `A1 (標記為 Dialogue) :  [ 大家好我是... ]         [ 今天要介紹... ]\nA2 (Music 開啟 Ducking): ━━━╲_______________╱━━━━━━━━━╲_______________╱━━━\n                           (有人說話自動壓低音量)     (空檔自動恢復音樂熱度)`,
        winKeys: ["G"],
        macKeys: ["G"],
      },
      {
        stepTitle: "Lumetri Color 調色第一步：先看 Waveform 示波器，再調色溫與對比",
        uiPath: "Window → Lumetri Color & Lumetri Scopes",
        content:
          "肉眼容易被螢幕亮度欺騙，調色時請務必打開「Lumetri Scopes (Waveform)」。刻度 0 代表死黑，100 代表死白過曝。透過 Basic Correction 調整 Exposure 與 Whites/Blacks，讓畫面波形均勻分佈在 10 到 90 之間，人臉膚色亮度落在 60~70 IRE 最自然！",
        diagram: `[ Lumetri Color 標準調色順序 ]\n1. White Balance (白平衡) : 用滴管吸畫面中的白色物體，修正偏黃或偏藍\n2. Tone (曝光與動態範圍)  : Exposure (整體明暗) ➔ Highlights (壓回過曝天空) ➔ Shadows (提亮暗部細節)\n3. Saturation (飽和度)    : 微調至 105 ~ 115 讓色彩討喜（切勿拉過頭變螢光色）\n4. Creative (風格化 LUT)  : 套用電影感 LUT，並將 Intensity 強度降為 40%~60% 最耐看`,
        winKeys: ["Ctrl", "`"],
        macKeys: ["Ctrl", "`"],
      },
    ],
    practiceTask:
      "在時間軸放上一段人聲與一首 BGM，使用 Essential Sound 完成 Auto-Ducking 自動壓音；並開啟 Lumetri Color 幫畫面校正白平衡與對比度。",
  },

  // ==================== LEVEL 3: 進階實戰篇 ====================
  {
    id: "ch6-export-delivery",
    level: "advanced",
    chapterCode: "CH 06",
    title: "2026 Export Mode 最佳化匯出設定與全鍵盤高效率客製化",
    subtitle: "搞懂 H.264、VBR 鮑率控制、與 YouTube 4K 高畫質不壓縮秘訣",
    readTime: "10 min",
    summary:
      "辛苦剪完影片，最後一步匯出 (Export) 如果設錯，檔案可能肥大到好幾十 GB，或是上傳 YouTube 後變得很模糊。本章教你設定最佳 Bitrate（位元速率）與建立專屬快速鍵配置。",
    keyTerms: [
      { zh: "H.264 通用封裝格式", en: "Format: H.264 (.mp4)" },
      { zh: "可變位元速率", en: "Bitrate Encoding: VBR, 1 Pass" },
      { zh: "硬體加速算圖", en: "Performance: Hardware Encoding" },
      { zh: "媒體編碼佇列", en: "Send to Media Encoder" },
    ],
    steps: [
      {
        stepTitle: "匯出前必做檢查：在時間軸用 I 與 O 框出正確輸出範圍",
        uiPath: "Timeline → Mark In (I) at 00:00 & Mark Out (O) at End → Ctrl/Cmd + M",
        content:
          "很多新手匯出後發現片尾多了 3 分鐘的黑畫面，是因為時間軸後面留了一小塊忘記刪的碎片！養成習慣：在片頭按 I、片尾最後一格按 O，再按 Ctrl/Cmd + M 進入 Export Mode。",
        diagram: `[ 2026 Export Mode 黃金輸出參數 (Format: H.264) ]\n• Preset (預設集)       : Match Source - Adaptive High Bitrate\n• Video > Frame Size   : 確認與序列一致 (1920x1080 或 3840x2160)\n• Bitrate Settings     :\n  - 1080p 30fps 建議設為 : VBR, 1 Pass | Target Bitrate: 16 ~ 20 Mbps\n  - 4K 30/60fps 建議設為 : VBR, 1 Pass | Target Bitrate: 45 ~ 60 Mbps\n• Audio                : AAC | 320 kbps | 48000 Hz`,
        winKeys: ["Ctrl", "M"],
        macKeys: ["Cmd", "M"],
      },
    ],
    practiceTask:
      "將你前面練習剪好的時間軸標記好 In / Out，按 Ctrl/Cmd + M 進入匯出面板，檢查 Format 是否為 H.264，並成功輸出一支 MP4 成品影片！",
  },
  // 接在 CH 06 的後面...

  {
    id: "ch7-proxy-workflow",
    level: "advanced",
    chapterCode: "CH 07",
    title: "代理檔案 (Proxy) 極速剪輯術：拯救卡頓的 4K 工作流",
    subtitle: "讓老電腦也能順暢剪輯 10-bit 4K 甚至 8K 影片的神級技巧",
    readTime: "12 min",
    summary:
      "當影片解析度越來越高（4K/8K）或使用了高壓縮格式（H.265），直接剪輯原始檔會讓電腦哀嚎卡頓。代理檔 (Proxy) 就像是給影片製作一個「低畫質輕量版分身」，剪輯時系統播放分身，匯出時會自動切換回高畫質本尊進行算圖！",
    keyTerms: [
      { zh: "代理檔案", en: "Proxy" },
      { zh: "建立代理檔", en: "Create Proxies" },
      { zh: "切換代理開關", en: "Toggle Proxies (按鈕圖示)" },
      { zh: "高畫質原始檔", en: "Full Resolution Media" },
    ],
    steps: [
      {
        stepTitle: "步驟一：選取毛片，交給 Media Encoder 產生輕量分身",
        uiPath: "Project Panel → 選取影片按右鍵 → Proxy → Create Proxies",
        content:
          "在 Project 面板把需要剪輯的 4K 影片全部框起來，按右鍵選擇「Proxy > Create Proxies」。在彈出的視窗中，Format 建議選「QuickTime」，Preset 選擇「ProRes Low Resolution Proxy」或「CineForm」。按下 OK 後，Adobe Media Encoder 會自動在背景幫你轉檔，你完全可以繼續在 Premiere 裡做其他事。",
        diagram: `[ 🎬 原始 4K 影片 (H.265 / 檔案大 / 剪輯超卡) ]\n       ⬇ (Create Proxies)\n[ 📄 ProRes 代理分身 (720p / 檔案稍大但極度順暢) ] ── (背景轉檔中...)`,
        winKeys: [],
        macKeys: [],
      },
      {
        stepTitle: "步驟二：在 Program 面板新增「Toggle Proxies」切換開關",
        uiPath: "Program Monitor → 右下角 (+) Button Editor → 拖曳 Toggle Proxies",
        content:
          "轉檔完成後，要怎麼跟 Premiere 說「我現在要用低畫質分身剪」？點擊 Program Monitor 右下角的「+ (Button Editor)」，找到一個長得像『兩個箭頭繞著螢幕』的按鈕 (Toggle Proxies)，把它拖曳到下方的工具列中。點擊讓它變成【藍色】，畫面就會立刻切換成超級順暢的代理檔！",
        diagram: `Program Monitor 下方工具列：\n[ ▶ ] [ ⏸ ] [ ⏭ ] ... 🔘 (灰色：播放原檔，卡頓) ➔ 🔵 (變成藍色：播放代理檔，滑順！)\n\n※ 💡 放心！就算你忘記關掉藍色按鈕，Ctrl+M 匯出時，Pr 依然會【強制使用 4K 原檔】最高畫質輸出，絕不翻車！`,
        winKeys: [],
        macKeys: [],
      },
    ],
    practiceTask:
      "找 3 段 4K 高畫質影片匯入專案，幫它們建立 ProRes Proxy 代理檔。試著把 Program Monitor 的 Toggle Proxies 按鈕開開關關，感受在時間軸上拖拉播放頭時的流暢度差異！",
  },

  {
    id: "ch8-adjustment-layer",
    level: "advanced",
    chapterCode: "CH 08",
    title: "調整圖層 (Adjustment Layer) 批次調色與電影黑邊",
    subtitle: "拒絕逐一貼特效！在時間軸頂部統治全片的最高效率解法",
    readTime: "10 min",
    summary:
      "如果你有 50 個剪碎的片段需要套用同一個調色風格 (LUT)，或者想在畫面上方加兩條「電影感黑邊」，一個一個片段貼特效會累死，事後要改也改不完。Adjustment Layer (調整圖層) 是一個透明圖層，放在它身上的任何特效，都會無條件套用到它【下方所有軌道】的畫面上！",
    keyTerms: [
      { zh: "調整圖層", en: "Adjustment Layer" },
      { zh: "新增項目", en: "New Item (Project 面板右下角折角圖示)" },
      { zh: "裁切特效", en: "Crop (Effects 面板)" },
      { zh: "全局調色", en: "Global Color Grading" },
    ],
    steps: [
      {
        stepTitle: "建立 Adjustment Layer 並覆蓋整條時間軸",
        uiPath: "Project Panel 底端 → New Item → Adjustment Layer",
        content:
          "在左下角 Project 面板，點擊垃圾桶旁邊的「New Item (折角圖紙)」圖示，選擇 Adjustment Layer。直接按 OK (它會自動抓取你現在 Sequence 的長寬規格)。接著，把這個透明圖層拖曳到時間軸的 V3 或最高軌道上，並往右拉長，讓它覆蓋底下所有的片段。",
        diagram: `Timeline (時間軸疊加邏輯)：\n[ V3 軌道 ] : 🟦🟦🟦🟦🟦 [ Adjustment Layer (套用 LUT 調色 + 裁切黑邊) ] 🟦🟦🟦🟦🟦\n             ⬇ (往下貫穿影響)\n[ V2 軌道 ] : 🟨 [ B-Roll 畫面 A ] 🟨   🟨 [ B-Roll 畫面 B ] 🟨\n[ V1 軌道 ] : 🟥🟥 [ 主視角訪談畫面 1 ] 🟥🟥🟥🟥🟥 [ 主視角訪談畫面 2 ] 🟥🟥🟥`,
        winKeys: [],
        macKeys: [],
      },
      {
        stepTitle: "一鍵套用全片電影感調色與 Crop 寬高比黑邊",
        uiPath: "選取 Adjustment Layer → 開啟 Lumetri Color & Effects 面板",
        content:
          "點選 V3 軌道上的 Adjustment Layer，在右側 Properties 或是 Lumetri Color 面板中調整色溫、曝光，或套用一個電影 LUT，底下的所有畫面都會瞬間改變色調。若要加電影黑邊，在 Effects 面板搜尋「Crop (裁切)」，套用到調整圖層上，把 Top (上) 與 Bottom (下) 都設為 12%，瞬間搞定 2.35:1 寬銀幕電影感！",
        diagram: `[ Effect Controls 面板中的 Crop 參數 ]\n  • Left   : 0.0 %\n  • Top    : 12.0 % ━━●━━━━ (製造上方黑邊)\n  • Right  : 0.0 %\n  • Bottom : 12.0 % ━━●━━━━ (製造下方黑邊)`,
        winKeys: ["Shift", "7"],
        macKeys: ["Shift", "7"],
      },
    ],
    practiceTask:
      "在你的專案中建立一個 Adjustment Layer，把它拉到最上層軌道。試著用 Lumetri Color 把它調成偏藍的冷色調，並加上上下各 10% 的 Crop 裁切黑邊，體會一次影響幾十個片段的極速快感！",
  },
  {
    id: "ch9-multicam",
    level: "advanced",
    chapterCode: "CH 09",
    title: "Multicam 多機位自動對齊：音訊波形同步、建立來源序列與 1/2/3 盲切",
    subtitle: "把三機訪談從手動對位地獄，變成邊看表演邊按數字鍵的導播級剪輯",
    readTime: "14 min",
    summary:
      "拍訪談、Podcast 或 Live 表演時，通常會同時用 A 機拍全景、B 機拍特寫、C 機拍側面。若把三段素材手動對位，不只要花上半小時，還很容易對到懷疑人生。Premiere 的 Multicam 會讀取每台相機的現場收音波形，自動把多機素材對齊，並包裝成一條「多機位來源序列」；你只要在播放時按 1、2、3，就能像導播一樣即時切換鏡頭，系統會自動把切點記錄成一條剪好的時間軸。",
    keyTerms: [
      { zh: "多機位來源序列", en: "Multi-Camera Source Sequence" },
      { zh: "音訊波形同步", en: "Synchronize by Audio" },
      { zh: "多機位監看模式", en: "Multi-Camera View" },
      { zh: "切換機位／錄製剪輯", en: "Switch Camera / Record Cut" },
    ],
    steps: [
      {
        stepTitle: "前置作業：每一台相機都要留下「可對齊」的現場音",
        uiPath: "Project Panel (Shift + 1) → 建立 03_Multicam Bin → 依 A/B/C 命名機位",
        content:
          "Multicam 的自動同步不是靠畫面比對，而是靠「音訊波形」。因此每一台相機最好都開著機身麥克風錄下現場聲（就算全是環境雜訊也沒關係），波形特徵越相似，Pr 對齊越準。若某台相機完全沒有音軌，就必須改用 Timecode（多機有同步時間碼時）或手動 Marker 對齊。先把所有機位放進同一個 Bin，並用 A_CAM、B_CAM、C_CAM 命名，後續在 Multi-Camera Monitor 才能一眼認出角度。",
        diagram: `[ 多機素材 Bin 建議命名 ]
📁 03_Multicam
 ├── 🎥 A_CAM_Wide.mp4      (全景 / 含現場收音)
 ├── 🎥 B_CAM_Close.mp4     (特寫 / 含現場收音)
 └── 🎥 C_CAM_Side.mp4      (側面 / 含現場收音)

[ 音訊波形自動對齊原理 ]
A_CAM 波形 ━━╱╲━━━━╲╱━━━
B_CAM 波形   ━━╱╲━━━━╲╱━━━  ← 波形特徵相同，Pr 會自動平移對齊
C_CAM 波形 ━━━━╱╲━━━━╲╱━

⚠️ 沒有音軌的機位無法用 Audio Sync，請改用 Timecode 或 Marker。`,
        winKeys: ["Shift", "1"],
        macKeys: ["Shift", "1"],
      },
      {
        stepTitle: "建立多機位來源序列：Audio Sync 一鍵對齊所有角度",
        uiPath: "Project Panel → 框選 A/B/C 機位 → 右鍵 → Create Multi-Camera Source Sequence",
        content:
          "框選三台機位的素材，按右鍵選 Create Multi-Camera Source Sequence。視窗中依序設定：Name 輸入 MC_Interview_3Cam；Sequence Preset 選與主機位相同的格式（例如 DSLR 1080p 30）；Synchronize Point 選 Audio；Audio Sync Offset 保持 0；Video Clip Channel 選 All Cameras。按下 OK 後，Pr 會分析每段音訊波形，把三機對齊並打包成一條多機位來源序列（本質是 Nested Sequence）。完成後可雙擊它，在 Multi-Camera Monitor 檢查每個角度是否真的同步。",
        diagram: `[ Create Multi-Camera Source Sequence 建議參數 ]
• Name               : MC_Interview_3Cam
• Sequence Preset    : DSLR 1080p 30 (或與主機位一致)
• Synchronize Point  : Audio  ← 以現場收音波形自動對齊
• Audio Sync Offset  : 0
• Video Clip Channel : All Cameras

完成後 Project 面板會出現：
📁 MC_Interview_3Cam (Multi-Camera Source Sequence)
   └── 內含 A / B / C 三個角度，已依波形對齊

💡 小抄：對齊不準時，先確認每個機位的音軌沒有被靜音或裁掉開頭。`,
        winKeys: ["Shift", "1"],
        macKeys: ["Shift", "1"],
      },
      {
        stepTitle: "導播模式：用 1 / 2 / 3 盲切機位，邊看表演邊錄剪輯",
        uiPath: "Timeline → 拖入 Multicam Sequence → Program Monitor → Multi-Camera View",
        content:
          "把多機位來源序列從 Project 拖到時間軸，它會變成一條可剪的 Nested Sequence。點擊 Program Monitor 下方的 Multi-Camera View 圖示，畫面會切成多格監看器；按 Shift + 4 可把鍵盤焦點移到 Program Monitor。按下空白鍵播放，眼睛盯著表演，手指放在 1、2、3 上：按哪個數字，當下就切到那個機位，Pr 會即時在時間軸上記錄切點，全程不必暫停或動滑鼠。要修正某個切點，把播放頭移到該影格再按正確的機位數字即可。若只有 A 機接麥克風，記得在 Multi-Camera 選單取消 Audio Follows Video，讓聲音固定使用 A 機，避免切機時音量忽大忽小。",
        diagram: `[ Program Monitor：Multi-Camera View ]
┌────────────┬────────────┐
│ 1 A_CAM    │ 2 B_CAM    │  ← 按 1 / 2 / 3 直接切換
│   全景     │   特寫     │
├────────────┼────────────┤
│ 3 C_CAM    │ 現在播出： │
│   側面     │ 2 B_CAM    │
└────────────┴────────────┘

播放時：Space 開始 ➔ 按 1 / 2 / 3 盲切 ➔ Pr 自動記錄切點
修正時：播放頭移到切點 ➔ 按正確數字 ➔ 切點立即更新

⚠️ 按數字鍵沒反應？先點一下 Program Monitor，確認面板有取得焦點。`,
        winKeys: ["1 ~ 3"],
        macKeys: ["1 ~ 3"],
      },
    ],
    practiceTask:
      "用 2～3 台相機（手機也可以）同時拍一段 60 秒對話，每一台都開麥克風收音。建立 Multi-Camera Source Sequence，確認三個角度都已依 Audio 對齊；把序列拖進時間軸，練習全程不看鍵盤、只按 1/2/3 完成至少 10 個切點，最後把 A 機音訊鎖定為主要聲音。",
  },

  {
    id: "ch10-auto-reframe",
    level: "advanced",
    chapterCode: "CH 10",
    title: "垂直短影音 Auto Reframe：16:9 轉 9:16 的 AI 追焦與關鍵影格微調",
    subtitle: "讓 Reels / Shorts 的主體永遠在畫面中央，再手動修掉 AI 的判斷失誤",
    readTime: "12 min",
    summary:
      "把 16:9 的 YouTube 影片直接縮小放進 9:16，畫面會出現兩條巨大黑邊；若整段放大填滿，又會把左右的人物切掉。Auto Reframe 會用 AI 追蹤畫面中的主體，自動產生 Position 關鍵影格，讓人物永遠留在垂直安全框內；你只需要選好構圖範圍，再針對 AI 判斷失誤的片段手動微調。",
    keyTerms: [
      { zh: "自動重構圖", en: "Auto Reframe" },
      { zh: "主體追蹤", en: "Subject Tracking" },
      { zh: "構圖範圍", en: "Framing: Wide / Medium / Close-Up" },
      { zh: "手動關鍵影格", en: "Manual Position Keyframes" },
    ],
    steps: [
      {
        stepTitle: "先建立 9:16 舞台：整條序列重構 vs. 單段素材重構",
        uiPath: "Sequence → Auto Reframe Sequence (整條) 或 File → New → Sequence (單段)",
        content:
          "先決定你要重構的範圍。若你已經有一條剪好的 16:9 時間軸，最快的方法是在 Project 面板選取該 Sequence，執行 Sequence → Auto Reframe Sequence，Aspect Ratio 選 9:16，Pr 會直接產生一條新的垂直序列，原檔完全不動。若你只想處理單一素材，則按 Ctrl/Cmd + N 新建 Sequence，把 Frame Size 設為 1080 x 1920、Timebase 設為 30 fps（動作片可選 60 fps），再把 16:9 素材放進去，準備套用 Auto Reframe 效果。",
        diagram: `[ 9:16 垂直 Sequence 黃金規格 ]
• Frame Size    : 1080 x 1920 (9:16)
• Timebase      : 30 fps (Reels / Shorts) 或 60 fps (高動態)
• Pixel Aspect  : Square Pixels (1.0)
• Audio         : 48 kHz / 立體聲

[ 兩種重構範圍 ]
A. 整條時間軸：Project 選 Sequence ➔ Sequence > Auto Reframe Sequence
B. 單段素材  ：Ctrl/Cmd + N 建 1080x1920 ➔ 拖入素材 ➔ 套用 Auto Reframe`,
        winKeys: ["Ctrl", "N"],
        macKeys: ["Cmd", "N"],
      },
      {
        stepTitle: "讓 AI 追主體：Motion Tracking 與 Framing 的參數怎麼選？",
        uiPath: "Effects → 搜尋 Auto Reframe → 拖到片段 → Effect Controls",
        content:
          "把 Auto Reframe 拖到時間軸上的 16:9 片段，Pr 會開始分析畫面並自動產生追蹤關鍵影格。Effect Controls 中有兩個核心參數：Motion Tracking 決定 AI 多積極地跟著主體移動，人物訪談這類幾乎不動的畫面選 Slower Motion 會最穩；一般 Vlog 用 Default；運動、舞蹈或快速運鏡才選 Faster Motion，否則畫面會一直左右追趕。Framing 則決定裁切後的構圖鬆緊：Wide 保留較多環境、Medium 是人物訪談的安全選擇、Close-Up 會把人物拉得更近。",
        diagram: `[ Effect Controls > Auto Reframe 參數建議 ]
• Motion Tracking : Slower Motion  ← 訪談 / 固定機位
                     Default        ← 一般 Vlog / 生活紀錄
                     Faster Motion  ← 運動 / 舞蹈 / 快速移動

• Framing         : Wide      (保留環境與左右空間)
                     Medium    (人物訪談最安全，推薦先試這個)
                     Close-Up  (主體特寫，適合情感或產品細節)

⚠️ Auto Reframe 不支援靜態圖片；同一條序列也不要重複執行 Auto Reframe Sequence，否則會產生多層巢狀序列。`,
        winKeys: ["Shift", "5"],
        macKeys: ["Shift", "5"],
      },
      {
        stepTitle: "AI 修片：用 Position 關鍵影格把主體拉回安全框",
        uiPath: "Effect Controls → Auto Reframe → Position → 關鍵影格導航",
        content:
          "Auto Reframe 會在多個時間點自動打下 Position 關鍵影格，讓主體維持在畫面中央。但遇到兩人同框、主體被遮擋，或 AI 把鏡頭追去背景路人時，還是要手動修。把播放頭移到要修正的影格，在 Effect Controls 展開 Auto Reframe 的 Position，點擊關鍵影格導航箭頭新增或選取該影格，再調整 Position 的 X 數值（1080 寬的序列中央是 540），把人物拉回安全框。若修正後運鏡出現跳動，將該關鍵影格右鍵設為 Ease In / Ease Out，或把前後關鍵格拉開，讓位移過渡更柔和。",
        diagram: `[ 9:16 安全框：不要把人物放在平台 UI 底下 ]
┌────────────────┐
│   ╭────────╮   │  ← 上方留 10~15% 給帳號/標題
│   │  人物  │   │
│   │  頭部  │   │  Position X = 540 (水平置中)
│   ╰────────╯   │
│                │
│  字幕 / CTA 區  │  ← 下方留 20% 給字幕與按鈕
└────────────────┘

[ 手動修正 ]
00:03 ◆────────◆ 00:07
       ↑ AI 追到背景路人，將 X 從 612 改回 540
       ↑ 右鍵設 Ease In / Ease Out，讓修正不突兀`,
        winKeys: ["Shift", "5"],
        macKeys: ["Shift", "5"],
      },
    ],
    practiceTask:
      "找一段 16:9 的人物訪談或 Vlog，先用 Sequence → Auto Reframe Sequence 產生 9:16 版本，Aspect Ratio 選 9:16、Motion Tracking 選 Slower Motion、Framing 選 Medium。播放檢查全片，至少手動修正 3 個 AI 追錯的 Position 關鍵影格，確認人物頭部沒有被平台 UI 遮住，最後輸出一支 15 秒的 Reels / Shorts 測試檔。",
  },
];
