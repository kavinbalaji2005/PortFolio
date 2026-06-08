import { createContext, useContext, useCallback } from "react";

const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Use Lenis if available for smooth momentum scroll
    if (window.__lenis) {
      window.__lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error("useScroll must be used within ScrollProvider");
  return ctx;
}
