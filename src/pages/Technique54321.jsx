import Page from "../components/Page";
import { Fragment } from "react";

function Technique54321() {
  const senseVerbs = ["ver", "ouvir", "tocar", "cheirar", "saborear"];

  return (
    <Page title="5-4-3-2-1" icon="mindfulness">
      <div className="max-w-[40rem] space-y-4">
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
                  <input
                    type="text"
                    className="px-2 py-1 bg-gray-800 border border-gray-700 rounded"
                    key={j}
                  />
                ))}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Page>
  );
}

export default Technique54321;
