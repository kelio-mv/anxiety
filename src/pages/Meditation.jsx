import Page from "../components/Page";

function Meditation() {
  return (
    <Page title="Meditação" icon="self_improvement">
      <p>
        A prática da meditação melhora a concentração e reduz os sintomas ansiosos, restaurando a
        paz e o equilíbrio interior.
      </p>
      <p>
        No entanto, para desfrutar dos seus benefícios, você precisa transformá-la em um hábito, por
        isso, escolha um horário para meditar diariamente por pelo menos cinco minutos. As primeiras
        tentativas são complicadas, mas logo você aprenderá a controlar sua atenção.
      </p>
      <p>
        Assista este vídeo para aprender a fazer essa técnica, ou se preferir, procure outros vídeos
        no{" "}
        <a
          className="text-sky-400 underline"
          href="https://www.youtube.com/results?search_query=medita%C3%A7%C3%A3o+guiada"
        >
          YouTube
        </a>
      </p>
      <iframe
        className="aspect-video"
        width="100%"
        src="https://www.youtube.com/embed/sJjyX9W-E-Y?si=8q3JA2JlkP7ywPC8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Page>
  );
}

export default Meditation;
