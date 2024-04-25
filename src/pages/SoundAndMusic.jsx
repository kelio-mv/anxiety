import { useEffect, useRef, useState } from "react";
import Page from "../components/Page";
import Icon from "../components/Icon";

function SoundAndMusic() {
  return (
    <Page title="Som e Música" icon="headphones">
      <p>
        Uma música calma pode ajudar a reduzir o estresse e a promover uma sensação de bem-estar,
        graças à liberação da endorfina, um neurotransmissor capaz de melhorar o humor.
      </p>
      <p>
        Deite-se confortavelmente, coloque um fone de ouvido, feche os olhos e aproveite estas
        músicas relaxantes:
      </p>
      <Audio
        name="Perfect Beauty"
        artist="Good_B_Music"
        albumCover="https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png"
        src="https://cdn.pixabay.com/download/audio/2024/02/14/audio_b9bc3934cc.mp3?filename=perfect-beauty-191271.mp3"
      />
    </Page>
  );
}

function Audio({ name, artist, albumCover, src }) {
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();
  const remainingTime = Math.floor(duration) - Math.floor(currentTime);

  useEffect(() => {
    const audio = audioRef.current;
    const updateDuration = () => setDuration(audio.duration);
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateCurrentTime);
    audio.addEventListener("ended", stop);

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateCurrentTime);
      audio.removeEventListener("ended", stop);
    };
  });

  function formatTime(seconds) {
    const f = (n) => ("0" + n).slice(-2);
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return f(m) + ":" + f(s);
  }

  function play() {
    audioRef.current.play();
    setPlaying(true);
  }

  function stop() {
    audioRef.current.pause();
    setPlaying(false);
  }

  return (
    <div className="p-2 space-y-2 border border-gray-800 rounded-lg">
      <div className="flex items-center gap-x-4">
        <img className="w-12 border-2 border-gray-800 rounded" src={albumCover} alt="album cover" />
        <div>
          <div>{name}</div>
          <div className="text-gray-400">{artist}</div>
        </div>
      </div>
      <div className="flex items-center gap-x-2 p-2 bg-gray-900 rounded">
        <Icon name={playing ? "pause" : "play_arrow"} onClick={playing ? stop : play} />
        <span className="font-mono text-sm">
          {formatTime(currentTime)}/{formatTime(remainingTime)}
        </span>
        <input
          type="range"
          className="w-full"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
          }}
        />
      </div>
      <audio ref={audioRef} src={src} preload="metadata"></audio>
    </div>
  );
}

export default SoundAndMusic;
