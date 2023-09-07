import React from "react";
import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Featherweight() {
  return (
    <div className="container">
      <div className="description-container">
        <h1 className="fighterHeader">Alex The Great Volkanovski</h1>
        <GifComponent
          src="https://giphy.com/embed/rliNGNQKYizbtmjEHd"
          title="Volk gif"
        />

        <p className="fighterParagraph">
          Alexander Volkanovski is an Australian professional fighter and the
          UFC featherweight champion. He is known for his incredible fighting
          skills and has an impressive record of 26-2-0 (W-L-D) with 13 wins by
          knockout, 3 wins by submission, and 7 first-round finishes. He is also
          known for his intelligence in the ring and his ability to out-strike
          taller men despite his shorter reach. Alexander Volkanovski is truly a
          great fighter!
        </p>

        <Link className="fighterNextButton" to="/lightweight">
          {" "}
          Next: Lightweight
        </Link>
      </div>
      <Fighters weightClass={"featherweight"} />
    </div>
  );
}
