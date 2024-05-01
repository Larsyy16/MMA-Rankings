import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Flyweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Alexandre The Cannibal Pantoja</h1>
        <GifComponent
          src="https://giphy.com/embed/mbhXgynraIEyGczh04"
          title="Alexandre Pantoja gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Alexandre Pantoja is a Brazilian professional mixed martial artist who
          competes in the Flyweight division in the Ultimate Fighting
          Championship (UFC), where he is the current UFC Flyweight Champion.
        </p>
        <p className="fighterParagraph">
          He has an impressive record of 26 wins and 5 losses in his
          professional career.
        </p>

        <Link className="fighterNextButton" to="/bantamweight">
          {" "}
          Next: Men's Bantamweight
        </Link>
      </section>
      <Fighters weightClass={"flyweight"} />
    </>
  );
}
