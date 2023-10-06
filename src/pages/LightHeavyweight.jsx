import React from "react";
import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function LightHeavyweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Jamahal Hill</h1>
        <GifComponent
          src="https://giphy.com/embed/YWhENHmJhpboaI3CrY"
          title="Jamahal gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Jamahal Hill is an American professional mixed martial artist who
          competes in the Light Heavyweight division in the Ultimate Fighting
          Championship (UFC). He was born on May 19, 1991, in Chicago, Illinois,
          USA. He has an impressive record of 12-1-0 (W-L-D) with 7 wins by
          knockout, and 5 wins by decision.{" "}
        </p>

        <Link className="fighterNextButton" to="/heavyweight">
          {" "}
          Next: Heavyweight
        </Link>
      </section>
      <Fighters weightClass={"light_heavyweight"} />
    </>
  );
}
