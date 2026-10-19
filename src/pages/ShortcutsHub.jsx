// src/pages/ShortcutsHub.jsx
import { useState, useMemo } from "react";
import { SHORTCUT_CATEGORIES, SHORTCUTS_DATA } from "../data/shortcutsData";
import Keybd from "../components/ui/Keybd";
import VirtualKeyboard from "../components/shortcuts/VirtualKeyboard";
import ShortcutTable from "../components/shortcuts/ShortcutTable";
import { useOS } from "../context/OSContext";

export default function ShortcutsHub() {
  const { os } = useOS();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyEssential, setOnlyEssential] = useState(false);
  const [viewMode, setViewMode] = useState("card"); // 'card' | 'table'

  const filteredShortcuts = useMemo(() => {
    return SHORTCUTS_DATA.filter((item) => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchEssential = !onlyEssential || item.essential;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.nameZh.toLowerCase().includes(q) ||
        item.commandEn.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.winKeys.some((k) => k.toLowerCase().includes(q)) ||
        item.macKeys.some((k) => k.toLowerCase().includes(q));

      return matchCat && matchEssential && matchSearch;
    });
  }, [selectedCategory, searchQuery, onlyEssential]);

  return (
    <div className="container">
      <div className="shortcuts-header">
        <h1 className="page-title">Premiere Pro 2026 快速鍵互動中心</h1>
        <p className="page-desc">
          目前顯示系統為{" "}
          <strong>{os === "mac" ? "macOS (Cmd / Option)" : "Windows (Ctrl / Alt)"}</strong>。
          掌握「左手 Q / W / V / C、右手 J / K / L / 滑鼠」的雙手分工，剪輯效率可提升 3 倍以上！
        </p>
      </div>

      {/* 互動式虛擬鍵盤 */}
      <VirtualKeyboard activeKey={searchQuery} onSelectKey={(key) => setSearchQuery(key)} />

      {/* 搜尋列、必背開關與檢視模式切換 */}
      <div className="controls-bar">
        <input
          type="text"
          className="search-input"
          placeholder="搜尋中文功能、英文指令 (如 Ripple, Trim, 波紋, 字幕) 或點擊上方虛擬鍵盤..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <label className="essential-toggle">
          <input
            type="checkbox"
            className="essential-checkbox"
            checked={onlyEssential}
            onChange={(e) => setOnlyEssential(e.target.checked)}
          />
          <span className="essential-label">★ 只看必背核心鍵</span>
        </label>

        <div className="os-toggle">
          <button
            className={`os-btn ${viewMode === "card" ? "active" : ""}`}
            onClick={() => setViewMode("card")}
          >
            🗂️ 卡片檢視
          </button>
          <button
            className={`os-btn ${viewMode === "table" ? "active" : ""}`}
            onClick={() => setViewMode("table")}
          >
            📋 表格總覽
          </button>
        </div>
      </div>

      {/* 分類頁籤 */}
      <div className="category-tabs">
        {SHORTCUT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-tab ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="search-result-count">
        共找到 <strong>{filteredShortcuts.length}</strong> 個快速鍵指令
      </div>

      {/* 根據 viewMode 切換渲染卡片或表格 */}
      {viewMode === "table" ? (
        <ShortcutTable items={filteredShortcuts} />
      ) : (
        <div className="shortcut-grid">
          {filteredShortcuts.map((item) => (
            <div key={item.id} className="shortcut-card">
              <div>
                <div className="card-header">
                  <div>
                    <span className="cmd-en">{item.commandEn}</span>
                    <h3 className="cmd-zh">{item.nameZh}</h3>
                  </div>
                  {item.essential && <span className="badge-essential">★ 必背核心</span>}
                </div>

                <div className="card-keys">
                  <Keybd winKeys={item.winKeys} macKeys={item.macKeys} />
                </div>

                <p className="card-description">{item.description}</p>
              </div>

              {item.proTip && (
                <div className="pro-tip-box">
                  <strong>💡 實戰技巧：</strong>
                  {item.proTip}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
