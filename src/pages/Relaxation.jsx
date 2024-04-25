import Page from "../components/Page";
import Icon from "../components/Icon";

function Relaxation() {
  return (
    <Page title="Relaxamento" icon="physical_therapy">
      <p>
        A ansiedade provoca a contração dos músculos como forma de defesa, mas acaba gerando mais
        tensão no corpo, dores e desconforto.
      </p>
      <p>
        A técnica de relaxamento muscular progressivo de Jacobson reduz a tensão muscular através da
        contração e descontração dos músculos.
      </p>
      <p>
        Assista este vídeo para aprender a fazer essa técnica, ou se preferir, procure outros vídeos
        no{" "}
        <a
          className="text-sky-400 underline text-nowrap"
          href="https://www.youtube.com/results?search_query=relaxamento+muscular+progressivo+"
        >
          YouTube
        </a>
      </p>
      <iframe
        className="aspect-video"
        width="100%"
        src="https://www.youtube.com/embed/aTam6a_twPg?si=HuKDC8IoWRjorU5P"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </Page>
  );
}

export default Relaxation;
