import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Breathing from "./pages/Breathing";
import Relaxation from "./pages/Relaxation";
import Meditation from "./pages/Meditation";
import Technique54321 from "./pages/Technique54321";
import Music from "./pages/Music";
import Exercise from "./pages/Exercise";
import Diet from "./pages/Diet";
import Sleep from "./pages/Sleep";
import Agenda from "./pages/Agenda";
import Diary from "./pages/Diary";
import Therapy from "./pages/Therapy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/breathing" element={<Breathing />} />
      <Route path="/relaxation" element={<Relaxation />} />
      <Route path="/meditation" element={<Meditation />} />
      <Route path="/technique-5-4-3-2-1" element={<Technique54321 />} />
      <Route path="/music" element={<Music />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/diet" element={<Diet />} />
      <Route path="/sleep" element={<Sleep />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/therapy" element={<Therapy />} />
    </Routes>
  );
}

export default App;
