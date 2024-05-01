import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Lightweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Islam Makhachev</h1>
        <GifComponent
          src="https://giphy.com/embed/6UtfPXJPmbpQzkLhty"
          title="Islam gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Islam Makhachev is a Russian professional mixed martial artist and
          former Sambo competitor. He currently competes in the Lightweight
          division in the Ultimate Fighting Championship (UFC), where he is the
          current UFC Lightweight Champion. He has an impressive record of
          24-1-0 (W-L-D) with 4 wins by knockout, 11 wins by submission, and 9
          wins by decision. Islam Makhachev is truly a great fighter!
        </p>

        <Link className="fighterNextButton" to="/welterweight">
          {" "}
          Next: Welterweight
        </Link>
      </section>
      <Fighters weightClass={"lightweight"} />
    </>
  );
}
