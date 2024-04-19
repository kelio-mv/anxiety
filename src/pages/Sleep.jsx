import useStorage from "../useStorage";
import Page from "../components/Page";
import Icon from "../components/Icon";

function Sleep() {
  const [sleepRecords, setSleepRecords] = useStorage("sleepRecords", []);
  const yesterday = getYesterday();
  const emoji = { 1: "☹️", 2: "😐", 3: "🙂" };
  const borderColor = { 1: "border-red-800", 2: "border-yellow-800", 3: "border-green-800" };

  function getYesterday() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toLocaleDateString("pt-BR");
  }

  function createSleepRecord(rating) {
    setSleepRecords([{ date: yesterday, rating }, ...sleepRecords]);
  }

  function deleteSleepRecord(date) {
    setSleepRecords(sleepRecords.filter((sr) => sr.date !== date));
  }

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
      </div>
      <ul className="space-y-2 *:before:content-['•_']">
        <li>Deixe seu quarto confortável, de preferência escuro e silencioso</li>
        <li>Faça uma atividade relaxante como ler um livro ou ouvir uma música calma</li>
        <li>Evite comer, realizar atividades físicas ou usar eletrônicos</li>
        <li>Evite pensar no dia seguinte, deixe as pendências para amanhã</li>
      </ul>
      {!sleepRecords.some(({ date }) => date === yesterday) && (
        <>
          <p>Você dormiu bem na noite passada?</p>
          <div className="space-x-2">
            <button
              className="px-2 py-1 bg-green-800 border border-green-700 rounded"
              onClick={() => createSleepRecord(3)}
            >
              {emoji[3]} Sim
            </button>
            <button
              className="px-2 py-1 bg-yellow-800 border border-yellow-700 rounded"
              onClick={() => createSleepRecord(2)}
            >
              {emoji[2]} Mais ou menos
            </button>
            <button
              className="px-2 py-1 bg-red-800 border border-red-700 rounded"
              onClick={() => createSleepRecord(1)}
            >
              {emoji[1]} Não
            </button>
          </div>
        </>
      )}
      {sleepRecords.map(({ date, rating }) => (
        <div className="space-x-2" key={date}>
          <span
            className={
              "inline-block px-2 py-1 border-2 rounded-lg font-mono text-lg align-middle " +
              borderColor[rating]
            }
          >
            {date} {emoji[rating]}
          </span>
          <Icon name="close" small onClick={() => deleteSleepRecord(date)} />
        </div>
      ))}
    </Page>
  );
}

export default Sleep;
