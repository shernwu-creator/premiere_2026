// src/components/ui/Keybd.jsx
import { useOS } from "../../context/OSContext";

export default function Keybd({ winKeys = [], macKeys = [] }) {
  const { os } = useOS();
  const keysToRender = os === "mac" ? macKeys : winKeys;

  return (
    <span className="keybd-group">
      {keysToRender.map((key, index) => (
        <span key={index} className="keybd-combo">
          <kbd className="keybd-key">{key}</kbd>
          {index < keysToRender.length - 1 && <span className="keybd-plus">+</span>}
        </span>
      ))}
    </span>
  );
}
