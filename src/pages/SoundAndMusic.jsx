import { useRef } from "react";
import Page from "../components/Page";

function SoundAndMusic() {
  const currentAudioRef = useRef();

  function handleAudioPlay(e) {
    const audio = e.target;
    const currentAudio = currentAudioRef.current;

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    currentAudioRef.current = audio;
  }

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
        onPlay={handleAudioPlay}
      />
      <Audio
        name="Deep Meditation"
        artist="Grand_Project"
        albumCover="https://cdn.pixabay.com/audio/2024/02/24/20-43-45-882_200x200.jpg"
        src="https://cdn.pixabay.com/download/audio/2024/02/24/audio_1fe2d5f39b.mp3?filename=deep-meditation-192828.mp3"
        onPlay={handleAudioPlay}
      />
      <Audio
        name="Meditation at the river yoga zen relaxation positive sleep music"
        artist="AlanFrijns"
        albumCover="https://cdn.pixabay.com/audio/2023/02/27/19-57-11-935_200x200.jpg"
        src="https://cdn.pixabay.com/download/audio/2023/02/26/audio_4c182f7459.mp3?filename=meditation-at-the-river-yoga-zen-relaxation-positive-sleep-music-140641.mp3"
        onPlay={handleAudioPlay}
      />
    </Page>
  );
}

function Audio({ name, artist, albumCover, src, onPlay }) {
  return (
    <div className="p-2 space-y-2 border border-gray-800 rounded-lg">
      <div className="flex items-center gap-x-4">
        <img className="w-12 border-2 border-gray-800 rounded" src={albumCover} alt="album cover" />
        <div className="overflow-hidden">
          <div className="overflow-hidden text-nowrap text-ellipsis">{name}</div>
          <div className="text-gray-400">{artist}</div>
        </div>
      </div>
      <audio className="w-full" src={src} controls onPlay={onPlay}></audio>
    </div>
  );
}

export default SoundAndMusic;
