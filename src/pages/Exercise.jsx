import { useRef, useState } from "react";
import Page from "../components/Page";
import Icon from "../components/Icon";

function Exercise() {
  const [totalTime, setTotalTime] = useState(10);
  const [remainingTime, setRemainingTime] = useState(null);
  const startTime = useRef(null);
  const intervalRef = useRef(null);
  const displayedTime = remainingTime || totalTime;

  function now() {
    return Date.now() / 1000;
  }

  function formatTime(seconds) {
    const f = (n) => ("0" + n).slice(-2);
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return f(m) + ":" + f(s);
  }

  function increaseTime() {
    if (totalTime < 3540) {
      setTotalTime(totalTime + 60);
    }
  }

  function decreaseTime() {
    if (totalTime > 60) {
      setTotalTime(totalTime - 60);
    }
  }

  function start() {
    function update() {
      const elapsedTime = now() - startTime.current;
      const remainingTime = totalTime - elapsedTime;

      if (remainingTime >= 0) {
        setRemainingTime(totalTime - elapsedTime);
      } else {
        clearInterval(intervalRef.current);
        startTime.current = null;
        setRemainingTime(null);
      }
    }
    startTime.current = now();
    intervalRef.current = setInterval(update, 100);
  }

  function pause() {
    clearInterval(intervalRef.current);
    startTime.current = null;
    setRemainingTime(null);
    setTotalTime(remainingTime);
  }

  return (
    <Page title="Exercício" icon="directions_run" flex>
      <div className="max-w-[40rem] space-y-4">
        <p>
          As atividades físicas, principalmente os aeróbicos, liberam hormônios que promovem a
          sensação de bem-estar e felicidade.
        </p>
        <p>
          Caminhar por 30 minutos, cinco vezes por semana, por exemplo, pode ajudar a inibir as
          crises de ansiedade.
        </p>
        <p>
          Utilize o temporizador abaixo para acompanhar seu progresso na atividade e alcançar o
          tempo desejado:
        </p>
      </div>
      <div className="flex-center grow">
        <div className="grid gap-2">
          <button
            className="px-[7px] bg-gray-800 border border-gray-700 text-2xl"
            onClick={decreaseTime}
          >
            <Icon name="remove" />
          </button>
          <div className="px-2.5 py-1 bg-gray-900 border border-gray-800 font-mono text-2xl">
            {formatTime(displayedTime)}
          </div>
          <button
            className="px-[7px] bg-gray-800 border border-gray-700 text-2xl"
            onClick={increaseTime}
          >
            <Icon name="add" />
          </button>
          <button className="col-span-3 py-2 bg-sky-800" onClick={remainingTime ? pause : start}>
            <Icon name={remainingTime ? "pause" : "play_arrow"} />
          </button>
        </div>
      </div>
    </Page>
  );
}

export default Exercise;
