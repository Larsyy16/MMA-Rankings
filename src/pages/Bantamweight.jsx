import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Bantamweight() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Suga Sean O'Malley</h1>
        <GifComponent
          src="https://giphy.com/embed/rTr7eJ1BOtnS4Dudy4"
          title="Suga gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Sean O'Malley is an American professional mixed martial artist who
          competes in the Bantamweight division in the Ultimate Fighting
          Championship (UFC) where he is the current UFC Bantamweight Champion.
          He was born on October 24, 1994, in Helena, Montana, USA. As of August
          22, 2023, he is ranked #8 in the UFC men's pound-for-pound rankings.
          He has a brown belt in Brazilian Jiu-Jitsu under Augusto "Tanquinho"
          Mendes.
        </p>

        <Link className="fighterNextButton" to="/featherweight">
          {" "}
          Next: Men's Featherweight
        </Link>
      </section>
      <Fighters weightClass={"bantamweight"} />
    </>
  );
}
