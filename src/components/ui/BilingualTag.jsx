// src/components/ui/BilingualTag.jsx
export default function BilingualTag({ zh, en }) {
  return (
    <span className="bilingual-tag">
      <span className="bilingual-zh">{zh}</span>
      {en && <span className="bilingual-en">({en})</span>}
    </span>
  );
}
