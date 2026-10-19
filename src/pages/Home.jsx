// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Keybd from "../components/ui/Keybd";

export default function Home() {
  return (
    <div className="container">
      {/* Hero 區塊 */}
      <section className="home-hero">
        <span className="home-hero-badge">Based on Adobe Premiere Pro 2026 (v26.0 English UI)</span>
        <h1 className="home-hero-title">從零開始掌握現代影片剪輯與 AI 工作流</h1>
        <p className="home-hero-desc">
          專為初學者到進階創作者打造的互動式圖文指南。無痛跨越英文版介面門檻，熟練掌握諸如{" "}
          <Keybd winKeys={["Q"]} macKeys={["Q"]} /> / <Keybd winKeys={["W"]} macKeys={["W"]} />{" "}
          波紋極速粗剪、2026 全新 Properties 面板與 Text-Based Editing 文字剪輯。
        </p>

        <div className="home-hero-actions">
          <Link to="/shortcuts" className="home-hero-cta">
            前往快速鍵互動中心 →
          </Link>
        </div>
      </section>

      {/* 三階段課綱預覽 */}
      <h2 className="section-title">系統化學習路徑 (Curriculum)</h2>
      <div className="shortcut-grid">
        <div className="shortcut-card">
          <div>
            <span className="cmd-en">LEVEL 01 · BEGINNER</span>
            <h3 className="cmd-zh home-level-title">初學者篇：介面與粗剪地基</h3>
            <p className="home-level-desc">
              認識 2026 Import/Edit/Export 三大階段、Sequence 序列設定、四大核心面板，以及全新
              Context-Sensitive Properties Panel（隨選屬性面板）。
            </p>
          </div>
          <div className="pro-tip-box">即將更新：互動式英文介面拆解圖</div>
        </div>

        <div className="shortcut-card">
          <div>
            <span className="cmd-en">LEVEL 02 · INTERMEDIATE</span>
            <h3 className="cmd-zh home-level-title">中階進修篇：節奏、關鍵影格與調色</h3>
            <p className="home-level-desc">
              學會三點剪輯法、Keyframes 貝茲曲線緩動運鏡、Essential Sound 自動迴避背景音樂
              (Auto-Ducking) 與 Lumetri Color 基礎一級調色。
            </p>
          </div>
          <div className="pro-tip-box">核心技能：讓影片具備商業級流暢質感</div>
        </div>

        <div className="shortcut-card">
          <div>
            <span className="cmd-en">LEVEL 03 · 2026 AI & PRO</span>
            <h3 className="cmd-zh home-level-title">進階實戰篇：AI 生成延展與文字剪輯</h3>
            <p className="home-level-desc">
              掌握 2026 必學黑科技：Text-Based Editing 語音轉文字自動砍停頓、Firefly Generative
              Extend 生成式補畫面，以及 Object Masking AI 智慧遮罩。
            </p>
          </div>
          <div className="pro-tip-box">核心技能：剪輯效率提升 300% 的現代工作流</div>
        </div>
      </div>
    </div>
  );
}
