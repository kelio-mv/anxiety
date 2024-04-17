import { useState } from "react";
import useStorage from "../useStorage";
import Page from "../components/Page";
import Icon from "../components/Icon";

function Agenda() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useStorage("tasks", []);

  function handleAddTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  }

  function handleRemoveTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <Page title="Agenda" icon="checklist">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Organizar as atividades do dia em uma lista também ajuda a diminuir o estresse e a
          ansiedade. No entanto, tome cuidado para não se cobrar demais.
        </p>
        <p>Anote aqui tudo que você precisa ou deseja fazer:</p>
      </div>

      <div className="max-w-[30rem] space-y-1.5">
        <div className="flex gap-2">
          <input
            type="text"
            className="grow px-2 py-1 bg-gray-800 border border-gray-700 rounded"
            placeholder="Nova tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={({ key }) => key === "Enter" && handleAddTask()}
            maxLength={40}
          />
          <button className="p-1 bg-cyan-800 rounded" onClick={handleAddTask}>
            <Icon name="add" />
          </button>
        </div>

        {tasks.map((task, index) => (
          <div
            className="flex items-center gap-2 pt-1.5 pr-0.5 border-t border-gray-800"
            key={index}
          >
            <span className="grow overflow-hidden text-ellipsis">{task}</span>
            <button className="p-0.5 bg-red-800 rounded" onClick={() => handleRemoveTask(index)}>
              <Icon name="close" />
            </button>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Agenda;
