import { useState } from 'react';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="profile-img-placeholder">QBQ</div>
          <h1 className="site-title">Análise de Bioimagens</h1>
          <p className="site-subtitle">Prof. Alexandre Bruni-Cardoso<br/>Universidade de São Paulo</p>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#inicio" className="active">
                <span className="nav-icon">🏠</span> Início
              </a>
            </li>
            <li>
              <a href="#ementa">
                <span className="nav-icon">📚</span> Ementa
              </a>
            </li>
            <li>
              <a href="#metodologia">
                <span className="nav-icon">🧪</span> Metodologia
              </a>
            </li>
            <li>
              <a href="#recursos">
                <span className="nav-icon">💻</span> Recursos
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <a href="https://github.com/cdpo-usp" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
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
          <header className="page-header" id="inicio">
            <h1 className="page-title">Fundamentos de Análise de Bioimagens com Python</h1>
            <div className="meta-info">
              <span className="badge">QBQ5915</span>
              <span>Pós-graduação - Instituto de Química, USP</span>
            </div>
          </header>

          <article className="content-body">
            <section>
              <h2>Sobre o Curso</h2>
              <p>
                Este curso foi desenhado para pós-graduandos e pesquisadores na área de biociências que desejam utilizar ferramentas computacionais para a análise de imagens de microscopia, com foco principal na linguagem <strong>Python</strong>.
              </p>
              <p>
                <strong>Objetivo:</strong> Capacitar o aluno a utilizar Python como ferramenta principal para o processamento, segmentação e análise quantitativa de imagens de microscopia, indo desde os fundamentos da imagem digital até a aplicação de Inteligência Artificial e análise estatística.
              </p>
              
              <h3>Pré-requisitos</h3>
              <ul>
                <li>Computador pessoal com especificações mínimas: 4GB RAM, 10GB de armazenamento livre, processador moderno e conexão à internet.</li>
                <li>Conta ativa no Google (para uso do Google Colab).</li>
                <li>Instalação prévia do FIJI/ImageJ.</li>
                <li>Preferencialmente, estudantes que já utilizam ou planejam utilizar análise de bioimagens em seus projetos.</li>
              </ul>
            </section>

            <section id="ementa">
              <h2>Cronograma e Ementa</h2>
              
              <div className="module-card">
                <h3>Dia 1: Fundamentos da Imagem Digital e Python Básico</h3>
                <p>Neste módulo, estabelecemos a base técnica e conceitual para trabalhar com imagens como dados numéricos.</p>
                <ul>
                  <li><strong>Introdução ao Ambiente de Trabalho:</strong> Configuração do Google Colab e montagem do Google Drive.</li>
                  <li><strong>Python Essencial:</strong> Variáveis, operações matemáticas, funções, pacotes e bibliotecas científicas (NumPy, Scikit-image).</li>
                  <li><strong>A Natureza da Imagem Digital:</strong> Pixels, Resolução, Cores e Canais (hiperstacks), Lookup Tables (LUTs) e Profundidade de Bits (Bit Depth).</li>
                  <li><strong>Formatos de Arquivo:</strong> JPEG, PNG, TIFF, e formatos proprietários (Bio-Formats).</li>
                </ul>
              </div>

              <div className="module-card">
                <h3>Dia 2: Processamento, Segmentação e Automação</h3>
                <p>O foco aqui é transformar imagens brutas em dados binários (máscaras) e medidas quantitativas.</p>
                <ul>
                  <li><strong>Captura e Pré-processamento:</strong> Filtros Digitais (Gaussian, Sobel/Median) e Correção de fundo.</li>
                  <li><strong>Segmentação de Imagens:</strong> Limiarização (Thresholding), Operações morfológicas e Watershed.</li>
                  <li><strong>Segmentação com Deep Learning:</strong> Uso de <strong>StarDist</strong> e <strong>Cellpose</strong>.</li>
                  <li><strong>Automação e Boas Práticas:</strong> Loops (for, while) para processamento em lote e execução local com Miniconda.</li>
                  <li><strong>Introdução a Superplots:</strong> Visualização avançada para publicações científicas.</li>
                </ul>
              </div>

              <div className="module-card">
                <h3>Dia 3: Treinamento Cellpose e Ferramentas de IA</h3>
                <p>A etapa final focada em personalização e fluxos de trabalho avançados.</p>
                <ul>
                  <li><strong>IA Avançada:</strong> Treinamento de modelos personalizados no Cellpose (GUI e script).</li>
                  <li><strong>Programação Assistida:</strong> Uso de LLMs (Gemini, ChatGPT) como assistentes de programação.</li>
                  <li><strong>BiaBob:</strong> Ferramentas baseadas em Agentes para fluxos de trabalho automatizados em bioimagens.</li>
                  <li>Projeto Final.</li>
                </ul>
              </div>
            </section>

            <section id="metodologia">
              <h2>Metodologia e Avaliação</h2>
              <p>
                O curso combina aulas práticas utilizando <strong>Google Colab</strong> e notebooks <strong>Jupyter</strong>, estudos de caso com imagens reais de microscopia e aprendizagem ativa (hands-on com códigos).
              </p>
              <p>
                <strong>Avaliação:</strong> A conclusão do curso exige a realização de exercícios práticos e a submissão de um projeto final.
              </p>
            </section>

            <section id="recursos">
              <h2>Contato e Citação</h2>
              <p>
                Para dúvidas sobre o curso e material, contate o Prof. Alexandre Bruni Cardoso via email: <code>brunicar@iq.usp.br</code>.
              </p>
              <p>
                <strong>Citação do Material:</strong><br/>
                <em>Bruni-Cardoso, A. (2025). Teaching material for microscopy image (bioimage) analysis with Python (QBQ5915 - 2025). Zenodo. <a href="https://doi.org/10.5281/zenodo.15089565">https://doi.org/10.5281/zenodo.15089565</a></em>
              </p>
              <p>
                A maioria dos materiais do curso são explorados em tutoriais em vídeo no <a href="https://www.youtube.com/channel/UCbJAU7N9FYvwkdgSwD_1S4Q">Canal do YouTube BioPrograma</a>.
              </p>
            </section>
          </article>
        </div>
        
        <footer className="footer">
          <p>© {new Date().getFullYear()} Alexandre Bruni-Cardoso. Distribuído sob a licença BSD 3-Clause.</p>
          <p>Feito com React + Vite, inspirado no tema Chirpy.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
