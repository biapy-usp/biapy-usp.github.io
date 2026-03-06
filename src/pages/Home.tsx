export function Home() {
  return (
    <>
      <header className="page-header" id="inicio">
        <h1 className="page-title">Fundamentos de Análise de Bioimagens de Microscopia com Python</h1>
        <div className="meta-info">
          <span>Curso de Atualização - Universidade de São Paulo</span>
        </div>
      </header>

      <article className="content-body">
        <section>
          <h2>Sobre o Curso</h2>
          <p>
            Esta é a página do curso de atualização <strong>Curso: Fundamentos de Análise de Bioimagens de Microscopia com Python</strong>. Veja mais abaixo, mais informações sobre o curso, incluindo conteúdo, docente, valores e mais.
          </p>
          <p>
            O curso ocorrerá dentre os dias (período a definir) de forma totalmente remota. O curso está dividido em 3 módulos contendo aulas gravadas, aulas síncronas e atividades de aprendizado e avaliação.
          </p>
          <p>
            Nosso público-alvo consiste em estudantes de pós-graduação, pesquisadores e profissionais das áreas de ciências biomédicas, química e informática e se objetiva capacitar o aluno a utilizar Python como ferramenta principal para o processamento, segmentação e análise quantitativa de imagens de microscopia, indo desde os fundamentos da imagem digital até a aplicação de Inteligência Artificial e análise estatística.
          </p>
          <p>
            <em>Curso certificado pela Universidade de São Paulo.</em>
          </p>
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
            <em>Bruni-Cardoso, A. (2025). Teaching material for microscopy image (bioimage) analysis with Python. Zenodo. <a href="https://doi.org/10.5281/zenodo.15089565">https://doi.org/10.5281/zenodo.15089565</a></em>
          </p>
          <p>
            A maioria dos materiais do curso são explorados em tutoriais em vídeo no <a href="https://www.youtube.com/channel/UCbJAU7N9FYvwkdgSwD_1S4Q">Canal do YouTube BioPrograma</a>.
          </p>
        </section>
      </article>
    </>
  );
}
