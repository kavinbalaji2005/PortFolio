import { lazy, Suspense } from 'react';
import Header from "./Header";
import Content from "./Content";
import CursorShadow from "./Cursor";
import { ThemeProvider } from "./ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react"

// Lazy load components for better performance
const AboutMe = lazy(() => import("./AboutMe"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '200px',
    color: 'var(--text-primary)'
  }}>
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Analytics mode={import.meta.env.PROD ? "production" : "development"} />
        <div id="home" className="app">
          <CursorShadow />
          <Header />
          <Content />
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <AboutMe />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Skills />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Projects />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Contact />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
