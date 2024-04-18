import { useEffect, useRef } from "react";
import Page from "../components/Page";
import Icon from "../components/Icon";
import useStorage from "../useStorage";

function Diary() {
  const [notes, setNotes] = useStorage("notes", []);
  const today = new Date().toLocaleDateString("pt-BR");

  function createNote() {
    setNotes([{ date: today, content: "" }, ...notes]);
  }

  function editNote(date, content) {
    setNotes(notes.map((note) => (note.date === date ? { ...note, content } : note)));
  }

  function deleteNote(date) {
    setNotes(notes.filter((note) => note.date !== date));
  }

  return (
    <Page title="Diário" icon="sticky_note_2">
      <div className="max-w-[40rem] space-y-4">
        <p>
          Escrever em um diário pode ter efeitos terapêuticos pois ajuda a encontrar padrões de
          pensamento e de comportamento que contribuem para a ansiedade.
        </p>
        <p>
          Escreva sobre os momentos em que ficou ansioso, quais gatilhos despertaram este sentimento
          e expresse como se sentiu sem medo de julgamentos.
        </p>

        {!notes.some(({ date }) => date === today) && (
          <button
            className="px-2 py-1 space-x-1 bg-sky-800 border border-sky-700"
            onClick={createNote}
          >
            <Icon name="add" small />
            <span className="align-middle">Nova anotação</span>
          </button>
        )}

        {notes.map(({ date, content }) => (
          <Note key={date} {...{ date, content, editNote, deleteNote }} />
        ))}
      </div>
    </Page>
  );
}

function Note({ date, content, editNote, deleteNote }) {
  const textareaRef = useRef();

  useEffect(() => {
    const textarea = textareaRef.current;
    const style = getComputedStyle(textarea);
    const borderWidth = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + borderWidth + "px";
  }, [content]);

  return (
    <div className="p-2 space-y-2 border border-gray-800 rounded-lg" key={date}>
      <div className="flex justify-between">
        <span className="text-lg">{date}</span>
        <Icon name="delete" onClick={() => deleteNote(date)} />
      </div>

      <textarea
        className="block w-full px-[7px] py-1 bg-gray-800 border border-gray-700 rounded overflow-hidden"
        ref={textareaRef}
        placeholder="Escreva aqui..."
        rows="1"
        value={content}
        spellCheck={false}
        onChange={(e) => editNote(date, e.target.value)}
        onBlur={() => editNote(date, content.trim())}
      />
    </div>
  );
}

export default Diary;
