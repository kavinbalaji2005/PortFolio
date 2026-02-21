const Layout = ({ children }) => {
  return (
    <main
      id="layout-container"
      role="main"
      className="w-full bg-background text-text-primary"
    >
      {children}
    </main>
  );
};

export default Layout;
