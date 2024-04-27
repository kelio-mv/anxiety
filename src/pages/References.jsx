import Page from "../components/Page";

function References() {
  return (
    <Page title="Referências" icon="quick_reference_all" flex>
      <p>
        Este site é um projeto de extensão universitária do curso de Análise e Desenvolvimento de
        Sistemas da Unopar.
      </p>
      <p>
        Todas as informações disponibilizadas neste site foram baseadas em artigos de profissionais
        de saúde e estudos científicos.
      </p>
      <p>Referências utilizadas:</p>
      <ul className="space-y-2 break-all *:before:content-['•_'] [&_a]:text-sky-400 [&_a]:underline">
        <li>
          <a href="https://summitsaude.estadao.com.br/saude-humanizada/7-tecnicas-para-controlar-a-ansiedade/">
            7 técnicas para controlar a ansiedade • Summit Saúde Estadão
          </a>
        </li>
        <li>
          <a href="https://institutodepsiquiatriapr.com.br/blog/tecnicas-comportamentais-para-combater-a-ansiedade/">
            Técnicas comportamentais para combater a ansiedade - Instituto de Psiquiatria do Paraná
          </a>
        </li>
        <li>
          <a href="https://www.pucrs.br/blog/5-dicas-acoes-diarias-para-reduzir-a-ansiedade/">
            Confira 5 dicas de ações diárias para reduzir a ansiedade
          </a>
        </li>
        <li>
          <a href="https://psiquiatriapaulista.com.br/17-dicas-de-como-controlar-a-ansiedade/">
            17 dicas de como controlar a ansiedade - Psiquiatria Paulista
          </a>
        </li>
        <li>
          <a href="https://www.vittude.com/blog/controlar-a-ansiedade/">
            10 dicas para controlar a ansiedade - Vittude
          </a>
        </li>
        <li>
          <a href="https://www.psitto.com.br/blog/como-aliviar-ansiedade/">
            Como aliviar ansiedade em 7 passos + Dicas de como tratar e sintomas
          </a>
        </li>
        <li>
          <a href="https://www.unimedcampinas.com.br/blog/saude-emocional/crise-de-ansiedade-veja-dicas-de-como-agir-para-aliviar-os-sintomas">
            Unimed Campinas - Crise de ansiedade: veja dicas de como agir para aliviar os sintomas
          </a>
        </li>
        <li>
          <a href="https://semprebem.paguemenos.com.br/posts/mente-e-comportamento/conheca-a-tecnica-5-4-3-2-1-para-o-controle-da-ansiedade">
            Conheça a técnica 5-4-3-2-1 para o controle da ansiedade
          </a>
        </li>
        <li>
          <a href="https://www.vittude.com/blog/tecnicas-de-relaxamento-para-ansiedade/">
            Técnicas de relaxamento para ansiedade: 8 dicas para aliviar crises - Blog Vittude
          </a>
        </li>
      </ul>
      <div className="flex grow justify-center items-end">
        <a
          className="text-gray-400 underline"
          href="https://www.flaticon.com/free-icons/calm"
          title="calm icons"
        >
          Calm icons created by Freepik - Flaticon
        </a>
      </div>
    </Page>
  );
}

export default References;
