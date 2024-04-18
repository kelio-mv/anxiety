import { Link } from "react-router-dom";
import Icon from "../components/Icon";

function Home() {
  const items = [
    ["Respiração", "air", "bg-green-700", "breathing"],
    ["Relaxamento", "physical_therapy", "bg-emerald-700", "relaxation"],
    ["Meditação", "self_improvement", "bg-teal-700", "meditation"],
    ["5-4-3-2-1", "mindfulness", "bg-cyan-700", "technique-5-4-3-2-1"],
    ["Som e Música", "headphones", "bg-sky-700", "sound-and-music"],
    ["Exercício", "directions_run", "bg-blue-700", "exercise"],
    ["Alimentação", "local_dining", "bg-indigo-700", "diet"],
    ["Sono", "bedtime", "bg-violet-700", "sleep"],
    ["Agenda", "checklist", "bg-purple-700", "agenda"],
    ["Diário", "sticky_note_2", "bg-fuchsia-700", "diary"],
    ["Terapia", "psychology", "bg-pink-700", "therapy"],
  ];

  return (
    <div className="flex flex-col justify-between min-h-full gap-4">
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map(([title, icon, bg, to]) => (
          <Link className={`p-4 ${bg} rounded-lg space-x-3`} key={title} to={to}>
            <Icon name={icon} />
            <span className="text-xl align-middle">{title}</span>
          </Link>
        ))}
      </div>
      <p className="text-gray-400 text-center">
        Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida.
        Em caso de crise, ligue para 188 (CVV) ou acesse o site www.cvv.org.br. Em caso de
        emergência, procure atendimento em um hospital mais próximo.
      </p>
    </div>
  );
}

export default Home;
