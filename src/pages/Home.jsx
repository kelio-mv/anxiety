import { Link } from "react-router-dom";
import Icon from "../components/Icon";

function Home() {
  const items = [
    ["Respiração", "air", "breathing"],
    ["Relaxamento", "physical_therapy", "relaxation"],
    ["Meditação", "self_improvement", "meditation"],
    ["5-4-3-2-1", "mindfulness", "technique-5-4-3-2-1"],
    ["Som e Música", "headphones", "sound-and-music"],
    ["Exercício", "directions_run", "exercise"],
    ["Alimentação", "local_dining", "diet"],
    ["Sono", "bedtime", "sleep"],
    ["Agenda", "checklist", "agenda"],
    ["Diário", "sticky_note_2", "diary"],
    ["Terapia", "psychology", "therapy"],
  ];

  return (
    <div className="flex flex-col justify-between min-h-full gap-4">
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map(([title, icon, to]) => (
          <Link
            className="p-3.5 space-x-2.5 bg-gray-900 border border-gray-800 rounded-lg"
            key={title}
            to={to}
          >
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
