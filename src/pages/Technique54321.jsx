import { Fragment } from "react";
import Page from "../components/Page";
import TextInput from "../components/TextInput";

function Technique54321() {
  const senseVerbs = ["ver", "ouvir", "tocar", "cheirar", "saborear"];

  return (
    <Page title="5-4-3-2-1" icon="mindfulness">
      <p>
        Esta é uma técnica usada para atenção plena, com o objetivo de trazer a mente para o
        presente, já que na ansiedade a mente é “sequestrada” para o futuro.
      </p>

      <p>Para praticá-la, olhe à sua volta e liste:</p>

      {senseVerbs.map((verb, i) => {
        const quantity = senseVerbs.length - i;
        const suffix = quantity === 1 ? "" : "s";
        const array = Array(quantity).fill(null);

        return (
          <Fragment key={i}>
            <p>{`• ${quantity} coisa${suffix} que você pode ${verb}`}</p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {array.map((_, j) => (
                <TextInput key={j} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Page>
  );
}

export default Technique54321;
