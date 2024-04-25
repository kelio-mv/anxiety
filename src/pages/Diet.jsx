import Page from "../components/Page";
import Icon from "../components/Icon";
import useStorage from "../useStorage";

function Diet() {
  const [dietRecords, setDietRecords] = useStorage("dietRecords", []);
  const today = new Date().toLocaleDateString("pt-BR");
  const emoji = { 1: "☹️", 2: "😐", 3: "🙂" };
  const borderColor = { 1: "border-red-800", 2: "border-yellow-800", 3: "border-green-800" };

  function createDietRecord(rating) {
    setDietRecords([{ date: today, rating }, ...dietRecords]);
  }

  function deleteDietRecord(date) {
    setDietRecords(dietRecords.filter((dr) => dr.date !== date));
  }

  return (
    <Page title="Alimentação" icon="local_dining">
      <p>
        Algumas subtâncias como a cafeína, o açúcar, a nicotina, o guaraná em pó e o chocolate
        estimulam o desenvolvimento do quadro ansioso.
      </p>
      <p>
        Evitar o consumo dessas substâncias, assim como de estimulantes e industrializados é
        importante para quem deseja tratar a ansiedade. Além disso, ter uma dieta saudável
        desenvolve uma melhor imunidade e promove o bem-estar.
      </p>

      {!dietRecords.some(({ date }) => date === today) && (
        <>
          <p>Você se alimentou bem hoje?</p>
          <div className="space-x-2">
            <button
              className="px-2 py-1 bg-green-800 border border-green-700 rounded"
              onClick={() => createDietRecord(3)}
            >
              {emoji[3]} Sim
            </button>
            <button
              className="px-2 py-1 bg-yellow-800 border border-yellow-700 rounded"
              onClick={() => createDietRecord(2)}
            >
              {emoji[2]} Mais ou menos
            </button>
            <button
              className="px-2 py-1 bg-red-800 border border-red-700 rounded"
              onClick={() => createDietRecord(1)}
            >
              {emoji[1]} Não
            </button>
          </div>
        </>
      )}

      {dietRecords.map(({ date, rating }) => (
        <div className="space-x-2" key={date}>
          <span
            className={
              "inline-block px-2 py-1 border-2 rounded-lg font-mono text-lg align-middle " +
              borderColor[rating]
            }
          >
            {date} {emoji[rating]}
          </span>
          <Icon name="close" small onClick={() => deleteDietRecord(date)} />
        </div>
      ))}
    </Page>
  );
}

export default Diet;
