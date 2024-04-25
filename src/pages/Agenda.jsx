import { useState } from "react";
import useStorage from "../useStorage";
import Page from "../components/Page";
import Icon from "../components/Icon";
import TextInput from "../components/TextInput";

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
      <p>
        Organizar as atividades do dia em uma lista também ajuda a diminuir o estresse e a
        ansiedade. No entanto, tome cuidado para não se cobrar demais.
      </p>
      <p>Anote aqui tudo que você precisa ou deseja fazer:</p>

      <div className="space-y-1.5">
        <div className="flex gap-2">
          <TextInput
            className="grow"
            placeholder="Nova tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={({ key }) => key === "Enter" && handleAddTask()}
            maxLength={40}
          />
          <button
            className="p-[3px] bg-sky-800 border border-sky-700 rounded"
            onClick={handleAddTask}
          >
            <Icon name="add" />
          </button>
        </div>

        {tasks.map((task, index) => (
          <div
            className="flex justify-between items-center pt-1.5 border-t border-gray-800"
            key={index}
          >
            <span className="overflow-hidden text-ellipsis">{task}</span>
            <Icon name="close" small onClick={() => handleRemoveTask(index)} />
          </div>
        ))}
      </div>
    </Page>
  );
}

export default Agenda;
