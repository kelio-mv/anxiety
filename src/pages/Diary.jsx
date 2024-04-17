import Page from "../components/Page";

function Diary() {
  return (
    <Page title="Diário" icon="sticky_note_2">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Escrever em um diário pode ter benefícios terapêuticos pois ajuda a encontrar padrões de
          pensamento e de comportamento que contribuem para a ansiedade.
        </p>
        <p>
          Escreva sobre os momentos em que ficou ansioso, quais gatilhos despertaram esse sentimento
          e expresse como se sentiu sem medo de julgamentos.
        </p>
      </div>
    </Page>
  );
}

export default Diary;
