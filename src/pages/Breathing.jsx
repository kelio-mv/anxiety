import Icon from "../components/Icon";

function Breathing() {
  return (
    <div className="flex flex-col gap-4 min-h-full">
      <div className="space-x-3">
        <Icon name="air" />
        <span className="text-2xl align-middle">Respiração</span>
      </div>
      <hr />
      <div className=" max-w-[40rem] space-y-4">
        <p>
          Uma das principais formas de aliviar a ansiedade é através da respiração diafragmática.
        </p>
        <p>
          Para praticá-la, sente-se em uma posição confortável e acompanhe o movimento da bola,
          inspirando profundamente pelo <span className="underline">nariz</span> enquanto ela se
          enche e expirando lentamente pela <span className="underline">boca</span> enquanto ela se
          seca.
        </p>
        <p>Repita o processo até sentir o alívio dos sintomas.</p>
      </div>

      <div className="flex justify-center items-center grow">
        <div className="flex justify-center items-center w-60 h-60 border-8 border-gray-700 rounded-full">
          <div className="w-1/2 h-1/2 bg-gray-100 rounded-full animate-[breathing_14s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
}

export default Breathing;
