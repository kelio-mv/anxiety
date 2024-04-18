import Page from "../components/Page";

function Therapy() {
  return (
    <Page title="Terapia" icon="psychology">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Todas as técnicas que você conheceu ajudam a aliviar sintomas mas não substituem o
          acompanhamento psicológico.
        </p>
        <p>
          A terapia cognitiva-comportamental é o tratamento mais indicado para os casos de
          transtorno de ansiedade, pois tem se mostrado eficaz em inúmeras pesquisas desenvolvidas.
        </p>
        <p>
          Ela permite que o paciente identifique e mude padrões de pensamento e comportamento e
          desenvolva novas interpretações em relação às situações do presente e do futuro, reduzindo
          os sintomas e as crises de ansiedade.
        </p>
        <p>
          Procure um psicólogo que seja especializado nesse tipo de abordagem e agende uma consulta
          online ou presencial, de acordo com sua preferência e necessidade.
        </p>
      </div>
    </Page>
  );
}

export default Therapy;
