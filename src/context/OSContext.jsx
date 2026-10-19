// src/context/OSContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const OSContext = createContext();

export function OSProvider({ children }) {
  const [os, setOs] = useState(() => {
    const saved = localStorage.getItem("pr_guide_os");
    if (saved) return saved;
    return navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "mac" : "win";
  });

  useEffect(() => {
    localStorage.setItem("pr_guide_os", os);
  }, [os]);

  return <OSContext.Provider value={{ os, setOs }}>{children}</OSContext.Provider>;
}

export function useOS() {
  return useContext(OSContext);
}
