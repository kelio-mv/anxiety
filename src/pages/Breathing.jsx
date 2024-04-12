import Icon from "../components/Icon";

function Breathing() {
  return (
    <div className="flex flex-col h-full p-4">
      <div>
        <Icon name="air" />
        <span className="ml-3 text-2xl align-middle">Respiração</span>
      </div>
      <hr className="my-4" />
      <p>
        Uma das principais formas de aliviar a ansiedade é através da respiração lenta e profunda.
      </p>
      <br />
      <p>
        Sente-se em uma posição confortável e acompanhe o movimento da bola, inspirando pelo nariz
        enquanto ela se enche e expirando pela boca enquanto ela se seca.
      </p>
      <br />
      <p> Repita o processo quantas vezes for necessário, até sentir o alívio dos sintomas.</p>
      <div className="flex justify-center items-center grow">
        <div className="flex justify-center items-center w-64 h-64 border-[6px] border-[#808388] rounded-full">
          <div className="w-1/2 h-1/2 bg-white rounded-full opacity-50 animate-[breathing_14s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
}

export default Breathing;
