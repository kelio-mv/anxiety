import Icon from "../components/Icon";
import { Link } from "react-router-dom";

function Home() {
  const items = [
    ["Respiração", "air", "bg-green-700", "breathing"],
    ["Relaxamento", "physical_therapy", "bg-emerald-700", "relaxation"],
    ["Meditação", "self_improvement", "bg-teal-700", "meditation"],
    ["5-4-3-2-1", "relax", "bg-cyan-700", "technique-5-4-3-2-1"],
    ["Som e Música", "headphones", "bg-sky-700", "sound-and-music"],
    ["Exercício", "directions_run", "bg-blue-700", "exercise"],
    ["Alimentação", "local_dining", "bg-indigo-700", "diet"],
    ["Sono", "bedtime", "bg-violet-700", "sleep"],
    ["Agenda", "task_alt", "bg-purple-700", "agenda"],
    ["Diário", "event_note", "bg-fuchsia-700", "diary"],
    ["Terapia", "psychology", "bg-pink-700", "therapy"],
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-3 p-4">
      {items.map(([title, icon, bg, to]) => (
        <Link className={`p-4 ${bg} rounded-lg space-x-3 cursor-pointer`} key={title} to={to}>
          <Icon name={icon} />
          <span className="text-xl align-middle">{title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Home;
