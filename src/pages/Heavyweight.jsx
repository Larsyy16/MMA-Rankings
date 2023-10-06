import React from "react";
import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Heavyweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Jon Bones Jones</h1>
        <GifComponent
          src="https://giphy.com/embed/Y0yWjc7zSaYaTcIxKY"
          title="bones gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Jon Jones is an American professional mixed martial artist who
          competes in the Heavyweight division in the Ultimate Fighting
          Championship (UFC). He was born on July 19, 1987, in Rochester, New
          York, USA. He has an impressive record of 27-1-0 (W-L-D) with 10 wins
          by knockout, 7 wins by submission, and 10 wins by decision.
        </p>

        <Link className="fighterNextButton" to="/">
          {" "}
          Home
        </Link>
      </section>
      <Fighters weightClass={"heavyweight"} />
    </>
  );
}
