// src/pages/Tutorials.jsx
import { useState, useEffect } from "react";
import { TUTORIALS_DATA } from "../data/tutorialsData";
import Sidebar from "../components/layout/Sidebar";
import BilingualTag from "../components/ui/BilingualTag";
import Keybd from "../components/ui/Keybd";

export default function Tutorials() {
  const [activeId, setActiveId] = useState(TUTORIALS_DATA[0].id);
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem("pr_guide_completed_chapters");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("pr_guide_completed_chapters", JSON.stringify(completedIds));
  }, [completedIds]);

  const currentIndex = TUTORIALS_DATA.findIndex((ch) => ch.id === activeId);
  const chapter = TUTORIALS_DATA[currentIndex] || TUTORIALS_DATA[0];
  const isCompleted = completedIds.includes(chapter.id);

  const toggleComplete = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="container">
      <div className="tutorials-header">
        <div>
          <h1 className="tutorials-title">Premiere Pro 2026 分級圖文實戰課綱</h1>
          <p className="page-desc">
            從建立正確的序列地基到中進階調色混音，搭配英文版介面路徑與鍵盤快速鍵一步步實作。
          </p>
        </div>
        <div className="badge-ai-tag">
          學習進度：已完成 {completedIds.length} / {TUTORIALS_DATA.length} 章
        </div>
      </div>

      <div className="tutorials-layout">
        {/* 左側章節導覽 */}
        <Sidebar
          chapters={TUTORIALS_DATA}
          activeChapterId={activeId}
          onSelectChapter={(id) => {
            setActiveId(id);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* 右側圖文教學內容區 */}
        <div>
          {/* 章節標題卡 */}
          <div className="step-card chapter-card">
            <div className="chapter-meta">
              <span className="cmd-en chapter-meta-command">
                {chapter.chapterCode} · 預計閱讀與實作：{chapter.readTime}
              </span>
              <button
                type="button"
                className={`os-btn chapter-complete-btn ${isCompleted ? "active" : ""}`}
                onClick={() => toggleComplete(chapter.id)}
              >
                {isCompleted ? "✅ 本章已學會" : "☐ 標記本章為已學會"}
              </button>
            </div>

            <h2 className="chapter-title">{chapter.title}</h2>
            <p className="chapter-subtitle">{chapter.subtitle}</p>
            <p className="chapter-summary">{chapter.summary}</p>

            <div>
              <span className="chapter-terms-label">📌 本章核心中英術語對照：</span>
              <div className="chapter-terms-list">
                {chapter.keyTerms.map((t, idx) => (
                  <BilingualTag key={idx} zh={t.zh} en={t.en} />
                ))}
              </div>
            </div>
          </div>

          {/* 步驟詳解列表 */}
          {chapter.steps.map((step, sIdx) => (
            <div key={sIdx} className="step-card">
              <div className="step-header">
                <span className="step-number-badge">STEP 0{sIdx + 1}</span>
                <span className="step-uipath">🧭 英文介面路徑：{step.uiPath}</span>
              </div>

              <h3 className="step-title">{step.stepTitle}</h3>
              <p className="step-content">{step.content}</p>

              {/* 視覺化圖解框 */}
              {step.diagram && <div className="ui-diagram-box">{step.diagram}</div>}

              {/* 搭配快速鍵 */}
              <div className="step-shortcut-row">
                <span className="step-shortcut-label">⌨️ 搭配快速鍵：</span>
                <Keybd winKeys={step.winKeys} macKeys={step.macKeys} />
              </div>
            </div>
          ))}

          {/* 課後實戰任務 */}
          <div className="pro-tip-box chapter-practice-box">
            <strong className="chapter-practice-title">
              🎯 動手實戰練習 (Hands-on Challenge)：
            </strong>
            {chapter.practiceTask}
          </div>

          {/* 上一章 / 下一章導覽按鈕 */}
          <div className="chapter-nav">
            {currentIndex > 0 ? (
              <button
                className="cat-tab"
                onClick={() => {
                  setActiveId(TUTORIALS_DATA[currentIndex - 1].id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                ← 上一章：{TUTORIALS_DATA[currentIndex - 1].chapterCode}
              </button>
            ) : (
              <div />
            )}

            {currentIndex < TUTORIALS_DATA.length - 1 && (
              <button
                className="cat-tab active"
                onClick={() => {
                  setActiveId(TUTORIALS_DATA[currentIndex + 1].id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                下一章：{TUTORIALS_DATA[currentIndex + 1].chapterCode} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
