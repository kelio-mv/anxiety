import { Link } from "react-router-dom";
import Icon from "../components/Icon";

function Home() {
  const links = [
    ["Respiração", "air", "breathing"],
    ["Relaxamento", "physical_therapy", "relaxation"],
    ["Meditação", "self_improvement", "meditation"],
    ["5-4-3-2-1", "mindfulness", "technique-5-4-3-2-1"],
    ["Música", "headphones", "music"],
    ["Exercício", "directions_run", "exercise"],
    ["Alimentação", "local_dining", "diet"],
    ["Sono", "bedtime", "sleep"],
    ["Agenda", "checklist", "agenda"],
    ["Diário", "sticky_note_2", "diary"],
    ["Terapia", "psychology", "therapy"],
  ];

  return (
    <div className="flex flex-col min-h-full gap-4">
      <div className="space-x-3">
        <img className="inline w-8" src="app-logo.png" alt="app logo" />
        <span className="text-2xl align-middle">Healthy Mind</span>
      </div>
      <hr />
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map(([title, icon, to]) => (
          <Link
            className="p-3.5 space-x-2.5 bg-gray-900 border border-gray-800 rounded-lg"
            key={to}
            to={to}
          >
            <Icon name={icon} />
            <span className="text-xl align-middle">{title}</span>
          </Link>
        ))}
      </div>
      <p className="mt-auto text-gray-400 text-center">
        Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida.
        Em caso de crise, ligue para 188 (CVV) ou acesse o site www.cvv.org.br. Em caso de
        emergência, procure atendimento em um hospital mais próximo.
      </p>
    </div>
  );
}

export default Home;
