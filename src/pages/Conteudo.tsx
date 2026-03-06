export function Conteudo() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Conteúdo do Curso</h1>
        <div className="meta-info">
          <span>Cronograma e Ementa Detalhada</span>
        </div>
      </header>

      <article className="content-body">
        <section id="ementa">
          <div className="module-card">
            <h3>Módulo 1: Fundamentos da Imagem Digital e Python Básico</h3>
            <p>Neste módulo, estabelecemos a base técnica e conceitual para trabalhar com imagens como dados numéricos.</p>
            <ul>
              <li><strong>Introdução ao Ambiente de Trabalho:</strong> Configuração do Google Colab e montagem do Google Drive. Gerenciamento de ambientes locais com Miniconda/Mamba.</li>
              <li><strong>Python Essencial para Bioimagens:</strong> Variáveis, operações matemáticas e tipos de dados. Funções, pacotes e bibliotecas científicas (NumPy, Scikit-image).</li>
              <li><strong>A Natureza da Imagem Digital:</strong> Pixels e Números, Resolução de Imagens, Cores e Canais (hiperstacks), Lookup Tables (LUTs) e Profundidade de Bits (Bit Depth).</li>
              <li><strong>Formatos de Arquivo:</strong> Formatos padrão (JPEG, PNG, TIFF, SVG, BMP) e introdução a formatos proprietários e a importância da conversão (Bio-Formats).</li>
            </ul>
          </div>

          <div className="module-card">
            <h3>Módulo 2: Processamento, Segmentação e Automação</h3>
            <p>O foco aqui é transformar imagens brutas em dados binários (máscaras) e medidas quantitativas.</p>
            <ul>
              <li><strong>Captura e Pré-processamento:</strong> Filtros Digitais (Gaussian, Sobel/Median), redução de ruído e Correção de fundo (Background subtraction).</li>
              <li><strong>Segmentação de Imagens:</strong> Limiarização (Thresholding) global e local (Otsu, Li), Operações morfológicas e Segmentação baseada em Watershed.</li>
              <li><strong>Imagens 3D (Z-stacks):</strong> Manipulação de volumes, projeções (Max, Sum, Median) e visualização.</li>
              <li><strong>Segmentação com Deep Learning:</strong> Uso de StarDist e Cellpose. Execução local vs. nuvem (GPU).</li>
              <li><strong>Automação e Boas Práticas:</strong> Loops (for, while) para processamento em lote e escrita de código limpo.</li>
            </ul>
          </div>

          <div className="module-card">
            <h3>Módulo 3: Análise de Dados, Visualização e IA Avançada</h3>
            <p>A etapa final onde os números gerados tornam-se descobertas científicas.</p>
            <ul>
              <li><strong>Estruturação de Dados com Pandas:</strong> Manipulação de DataFrames, limpeza, filtragem, fusão de tabelas e exportação.</li>
              <li><strong>Estatística Básica com Scipy:</strong> Testes de hipótese, correlações, distribuições e análise descritiva.</li>
              <li><strong>Visualização de Dados com Matplotlib e Seaborn:</strong> Histogramas, Boxplots, Scatter plots e visualizações avançadas (Superplots).</li>
              <li><strong>IA Avançada e Programação Assistida:</strong> Treinamento de modelos personalizados no Cellpose (GUI e script). Uso de LLMs (Gemini, ChatGPT) como assistentes e ferramentas baseadas em Agentes (BiaBob).</li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
