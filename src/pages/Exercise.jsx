import { useRef, useState, useEffect } from "react";
import Page from "../components/Page";
import Icon from "../components/Icon";

const alarmSound = new Audio("./alarm.mp3");

function Exercise() {
  const [time, setTime] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);
  const lastUpdateTimeRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => stopTimer, []);

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
    setTime(Math.min(time + 60, 3600));
  }

  function decreaseTime() {
    setTime(Math.max(time - 60, 0));
  }

  function startTimer() {
    lastUpdateTimeRef.current = now();
    intervalRef.current = setInterval(() => {
      const deltaTime = now() - lastUpdateTimeRef.current;
      lastUpdateTimeRef.current = now();
      setTime((prevTime) => {
        if (prevTime - deltaTime <= 0) {
          console.log("last test");
          stopTimer();
          alarmSound.play();
          return 0;
        }
        return prevTime - deltaTime;
      });
    });
    setTimerRunning(true);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    setTimerRunning(false);
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
            disabled={timerRunning || time === 0}
          >
            <Icon name="remove" />
          </button>
          <div className="px-2.5 py-1 bg-gray-900 border border-gray-800 font-mono text-2xl">
            {formatTime(time)}
          </div>
          <button
            className="px-[7px] bg-gray-800 border border-gray-700 text-2xl"
            onClick={increaseTime}
            disabled={timerRunning || time === 3600}
          >
            <Icon name="add" />
          </button>
          <button
            className="col-span-3 py-2 bg-sky-800"
            onClick={timerRunning ? stopTimer : startTimer}
            disabled={time === 0}
          >
            <Icon name={timerRunning ? "pause" : "play_arrow"} />
          </button>
        </div>
      </div>
    </Page>
  );
}

export default Exercise;
