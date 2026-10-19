// src/components/shortcuts/VirtualKeyboard.jsx
const KEYBOARD_ROWS = [
  [
    { key: "`", hint: "放大面板" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
    { key: "9" },
    { key: "0" },
    { key: "-", hint: "縮小軌" },
    { key: "=", hint: "放大軌" },
    { key: "\\", hint: "全覽軌" },
  ],
  [
    { key: "Q", hint: "波紋砍頭" },
    { key: "W", hint: "波紋砍尾" },
    { key: "E" },
    { key: "R", hint: "速度" },
    { key: "T", hint: "文字" },
    { key: "Y", hint: "滑動Slip" },
    { key: "U" },
    { key: "I", hint: "入點In" },
    { key: "O", hint: "出點Out" },
    { key: "P" },
  ],
  [
    { key: "A", hint: "向後全選" },
    { key: "S", hint: "磁吸Snap" },
    { key: "D", hint: "選取當前" },
    { key: "F", hint: "匹配影格" },
    { key: "G", hint: "音量增益" },
    { key: "H", hint: "手形平移" },
    { key: "J", hint: "倒退" },
    { key: "K", hint: "暫停" },
    { key: "L", hint: "快轉審片" },
  ],
  [
    { key: "Z" },
    { key: "X" },
    { key: "C", hint: "剃刀切割" },
    { key: "V", hint: "選取工具" },
    { key: "B", hint: "波紋工具" },
    { key: "N" },
    { key: "M", hint: "打標記點" },
    { key: ",", hint: "插入片段" },
    { key: ".", hint: "覆蓋片段" },
  ],
  [{ key: "Space", hint: "播放 / 暫停 (Play-Stop)", wide: true }],
];

export default function VirtualKeyboard({ activeKey = "", onSelectKey }) {
  return (
    <div className="vk-container">
      <div className="vk-header">
        <span className="vk-title">
          ⌨️ 視覺化剪輯鍵盤（點擊發亮按鍵可快速篩選功能，再點一次取消）
        </span>
        {activeKey && (
          <button className="os-btn active vk-clear-btn" onClick={() => onSelectKey("")}>
            ✕ 清除按鍵篩選 ({activeKey})
          </button>
        )}
      </div>

      {KEYBOARD_ROWS.map((row, rIdx) => (
        <div key={rIdx} className="vk-row">
          {row.map((item) => {
            const isSelected = activeKey.toUpperCase() === item.key.toUpperCase();
            return (
              <button
                key={item.key}
                type="button"
                className={`vk-key ${item.hint ? "has-shortcut" : ""} ${isSelected ? "active" : ""} ${item.wide ? "vk-key-wide" : ""}`}
                onClick={() => onSelectKey(isSelected ? "" : item.key)}
              >
                <span>{item.key}</span>
                {item.hint && <span className="vk-key-hint">{item.hint}</span>}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
