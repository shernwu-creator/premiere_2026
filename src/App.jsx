// src/App.jsx (優化範例)
import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { OSProvider } from "./context/OSContext";
import Navbar from "./components/layout/Navbar";

const Home = lazy(() => import("./pages/Home"));
const WorkspaceGuide = lazy(() => import("./pages/WorkspaceGuide"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const ShortcutsHub = lazy(() => import("./pages/ShortcutsHub"));
const AIWorkflows = lazy(() => import("./pages/AIWorkflows"));

export default function App() {
  return (
    <OSProvider>
      <Router>
        <Navbar />
        <main>
          <Suspense
            fallback={
              <div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>
                載入中...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workspace" element={<WorkspaceGuide />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/shortcuts" element={<ShortcutsHub />} />
              <Route path="/ai-workflows" element={<AIWorkflows />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </OSProvider>
  );
}
