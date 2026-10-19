// src/components/shortcuts/ShortcutTable.jsx
import Keybd from "../ui/Keybd";

export default function ShortcutTable({ items = [] }) {
  return (
    <div className="shortcut-table-wrap">
      <table className="shortcut-table">
        <thead>
          <tr>
            <th>功能名稱 (中文)</th>
            <th>英文版指令 (English UI)</th>
            <th>快速鍵組合</th>
            <th>操作說明與實戰技巧</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="shortcut-name-cell">
                {item.nameZh}
                {item.essential && (
                  <div className="shortcut-essential-wrap">
                    <span className="badge-essential">★ 必背</span>
                  </div>
                )}
              </td>
              <td className="shortcut-command-cell">{item.commandEn}</td>
              <td className="shortcut-keys-cell">
                <Keybd winKeys={item.winKeys} macKeys={item.macKeys} />
              </td>
              <td className="shortcut-desc-cell">
                <div>{item.description}</div>
                {item.proTip && <div className="shortcut-protip">💡 {item.proTip}</div>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
