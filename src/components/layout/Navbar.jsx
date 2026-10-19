// src/components/layout/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useOS } from "../../context/OSContext";

export default function Navbar() {
  const { os, setOs } = useOS();

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="pr-logo-box">Pr</span>
        <span className="logo-word">
          Premiere Pro 2026 <br />
          實戰教學網
        </span>
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          學習地圖 <br />
          (Home)
        </NavLink>
        <NavLink
          to="/workspace"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          2026 介面解析 <br />
          (UI)
        </NavLink>
        <NavLink
          to="/tutorials"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          圖文教學 <br />
          (Tutorials)
        </NavLink>
        <NavLink
          to="/shortcuts"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          快速鍵大全 <br />
          (Shortcuts)
        </NavLink>
        <NavLink
          to="/ai-workflows"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          AI 工作流 <br />
          (AI)
        </NavLink>
      </nav>

      <div className="os-toggle" title="切換全站快速鍵顯示系統">
        <button className={`os-btn ${os === "win" ? "active" : ""}`} onClick={() => setOs("win")}>
          ⊞ Windows
        </button>
        <button className={`os-btn ${os === "mac" ? "active" : ""}`} onClick={() => setOs("mac")}>
           macOS
        </button>
      </div>
    </header>
  );
}
