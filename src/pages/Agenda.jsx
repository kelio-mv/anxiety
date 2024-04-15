import { useState } from "react";
import Page from "../components/Page";
import Icon from "../components/Icon";

function Agenda() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

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
    <Page title="Agenda" icon="task_alt">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Organizar as atividades do dia em uma lista de tarefas também ajuda a diminuir o estresse
          e a ansiedade causada pelas nossas responsabilidades diárias.
        </p>
        <p>Anote aqui tudo que você precisa ou deseja fazer:</p>
      </div>

      <div className="w-fit space-y-1.5">
        <div className="space-x-2">
          <input
            type="text"
            className="w-72 px-2 py-1 bg-gray-800 border border-gray-700 rounded"
            placeholder="Nova tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            maxLength={32}
          />
          <button className="p-1 bg-cyan-800 rounded" onClick={handleAddTask}>
            <Icon name="add" />
          </button>
        </div>

        {tasks.map((task, index) => (
          <div className="pt-1.5 space-x-2 border-t border-gray-800" key={index}>
            <span className="inline-block w-72 align-middle overflow-hidden text-ellipsis">
              {task}
            </span>
            <button className="p-1 bg-red-800 rounded" onClick={() => handleRemoveTask(index)}>
              <Icon name="remove" />
            </button>
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Agenda;
