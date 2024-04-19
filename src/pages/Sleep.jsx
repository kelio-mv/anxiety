import Page from "../components/Page";

function Sleep() {
  return (
    <Page title="Sono" icon="bedtime">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Uma boa noite de sono é fundamental para a saúde, principalmente para quem tem transtornos
          de ansiedade.
        </p>
        <p>
          Aqui estão algumas dicas do que fazer e não fazer, quando estiver próximo do{" "}
          <span className="underline">horário de dormir</span>:
        </p>
        <ul className="space-y-2 *:before:content-['•_']">
          <li>Deixe seu quarto confortável, de preferência escuro e silencioso</li>
          <li>Faça uma atividade relaxante como ler um livro ou ouvir uma música calma</li>
          <li>Evite comer, realizar atividades físicas ou usar eletrônicos</li>
          <li>Evite pensar no dia seguinte, deixe as pendências para amanhã</li>
        </ul>
      </div>
    </Page>
  );
}

export default Sleep;
