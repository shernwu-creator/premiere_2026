// src/components/layout/Sidebar.jsx
import { TUTORIAL_LEVELS } from "../../data/tutorialsData";

export default function Sidebar({ chapters = [], activeChapterId, onSelectChapter }) {
  return (
    <aside className="tutorial-sidebar">
      <div className="sidebar-title">📚 系統化章節導覽</div>

      {TUTORIAL_LEVELS.map((level) => {
        const levelChapters = chapters.filter((ch) => ch.level === level.id);
        return (
          <div key={level.id} className="sidebar-group">
            <div className="sidebar-level-title">{level.title}</div>
            {levelChapters.map((ch) => (
              <button
                key={ch.id}
                type="button"
                className={`sidebar-item-btn ${activeChapterId === ch.id ? "active" : ""}`}
                onClick={() => onSelectChapter(ch.id)}
              >
                <span className="sidebar-chapter-code">{ch.chapterCode}</span>
                {ch.title.split("：")[0]}
              </button>
            ))}
          </div>
        );
      })}
    </aside>
  );
}
