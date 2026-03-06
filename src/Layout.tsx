import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-img-placeholder">BIO</div>
          <h1 className="site-title">Análise de Bioimagens</h1>
          <p className="site-subtitle">Prof. Alexandre Bruni-Cardoso<br/>Universidade de São Paulo</p>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                <span className="nav-icon">🏠</span> Início
              </Link>
            </li>
            <li>
              <Link to="/conteudo" className={location.pathname === '/conteudo' ? 'active' : ''} onClick={() => setSidebarOpen(false)}>
                <span className="nav-icon">📚</span> Conteúdo
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <a href="https://github.com/biapy-usp/biapy-usp.github.io" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.youtube.com/channel/UCbJAU7N9FYvwkdgSwD_1S4Q" className="social-link" title="YouTube" target="_blank" rel="noopener noreferrer">
             <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-wrapper">
        <div className="topbar">
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <span style={{ fontWeight: 600 }}>Análise de Bioimagens</span>
        </div>

        <div className="content-container">
          <Outlet />
        </div>
        
        <footer className="footer">
          <p>© {new Date().getFullYear()} Alexandre Bruni-Cardoso. Distribuído sob a licença BSD 3-Clause.</p>
          <p>Feito com React + Vite.</p>
        </footer>
      </main>
    </div>
  );
}
