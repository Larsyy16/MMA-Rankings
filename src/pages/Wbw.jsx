import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Wbw() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Julianna The Venezuelan Vixen Pena</h1>
        <GifComponent
          src="https://giphy.com/embed/h3tmjvCdKYfedhJ1KL"
          title="Julianna Pena gif"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          The women's bantamweight sectionision in the UFC has seen many talented
          fighters over the years.
        </p>
        <p className="fighterParagraph">
          Julianna Peña is one such fighter who has had her share of hardships
          and triumphs.
        </p>
        <p className="fighterParagraph">
          Peña is an American professional mixed martial artist who competes in
          the bantamweight sectionision of the Ultimate Fighting Championship (UFC),
          where she is the former UFC Women's Bantamweight Champion.
        </p>
        <p className="fighterParagraph">
          She is also the first woman to win The Ultimate Fighter.
        </p>

        <Link className="fighterNextButton" to="/flyweight">
          {" "}
          Next: Men's Flyweight
        </Link>
      </section>
      <Fighters weightClass={"womens_bantamweight"} />
    </>
  );
}
