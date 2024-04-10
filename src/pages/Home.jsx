import Icon from "../components/Icon";

function Home() {
  return (
    <div className="p-3 space-y-3">
      <Item title="Respiração" icon="air" />
      <Item title="Relaxamento" icon="physical_therapy" />
      <Item title="Meditação" icon="self_improvement" />
      <Item title="5-4-3-2-1" icon="relax" />
      <Item title="Sons e Música" icon="headphones" />
      <Item title="Exercícios" icon="directions_run" />
      <Item title="Alimentação" icon="local_dining" />
      <Item title="Sono" icon="bedtime" />
      <Item title="Agenda" icon="task_alt" />
      <Item title="Diário" icon="event_note" />
      <Item title="Terapia" icon="psychology" />
    </div>
  );
}

function Item({ title, icon }) {
  return (
    <div className="p-3 bg-sky-600 rounded-lg space-x-2 cursor-pointer hover:bg-sky-700">
      <Icon name={icon} />
      <span className="text-xl text-white align-middle">{title}</span>
    </div>
  );
}

export default Home;
