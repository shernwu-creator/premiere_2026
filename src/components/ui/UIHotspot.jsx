// src/components/ui/UIHotspot.jsx
export default function UIHotspot({ number, label, active = false, onClick }) {
  return (
    <span
      onClick={onClick}
      title={label}
      className={`ui-hotspot-badge${active ? " active" : ""}${onClick ? " clickable" : ""}`}
    >
      {number}
    </span>
  );
}
