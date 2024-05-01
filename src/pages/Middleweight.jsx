import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Middleweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Israel Stylebender Adesanya</h1>
        <GifComponent
          src="https://giphy.com/embed/d8PARN8r0GEXeedaWO"
          title="Izzy gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Israel Adesanya is a Nigerian-New Zealand professional mixed martial
          artist who competes in the Middleweight division in the Ultimate
          Fighting Championship (UFC). He was born on July 22, 1989, in Lagos,
          Nigeria. He has an impressive record of 22-2-0 (W-L-D) with 15 wins by
          knockout, 1 win by submission, and 6 wins by decision. Israel Adesanya
          had an epic win against Alex Pereira at UFC 287 where he knocked him
          out in the second round of their title fight.
        </p>

        <Link className="fighterNextButton" to="/light_heavyweight">
          {" "}
          Next: Light Heavyweight
        </Link>
      </section>
      <Fighters weightClass={"middleweight"} />
    </>
  );
}
