import Icon from "../components/Icon";

function Home() {
  const items = [
    ["Respiração", "air", "bg-green-700"],
    ["Relaxamento", "physical_therapy", "bg-emerald-700"],
    ["Meditação", "self_improvement", "bg-teal-700"],
    ["5-4-3-2-1", "relax", "bg-cyan-700"],
    ["Sons e Música", "headphones", "bg-sky-700"],
    ["Exercícios", "directions_run", "bg-blue-700"],
    ["Alimentação", "local_dining", "bg-indigo-700"],
    ["Sono", "bedtime", "bg-violet-700"],
    ["Agenda", "task_alt", "bg-purple-700"],
    ["Diário", "event_note", "bg-fuchsia-700"],
    ["Terapia", "psychology", "bg-pink-700"],
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-3 p-4">
      {items.map(([title, icon, bg]) => (
        <div key={title} className={`p-4 ${bg} rounded-lg space-x-3 cursor-pointer`}>
          <Icon name={icon} />
          <span className="text-xl align-middle">{title}</span>
        </div>
      ))}
    </div>
  );
}

export default Home;
