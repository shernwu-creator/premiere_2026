// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OSProvider } from "./context/OSContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import WorkspaceGuide from "./pages/WorkspaceGuide";
import Tutorials from "./pages/Tutorials";
import ShortcutsHub from "./pages/ShortcutsHub";
import AIWorkflows from "./pages/AIWorkflows";

export default function App() {
  return (
    <OSProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<WorkspaceGuide />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/shortcuts" element={<ShortcutsHub />} />
            <Route path="/ai-workflows" element={<AIWorkflows />} />
          </Routes>
        </main>
      </Router>
    </OSProvider>
  );
}
