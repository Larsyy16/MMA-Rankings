import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Pfp() {
  return (
    <>
      <section className="description-container">
        <h1 className="fighterHeader">Zhang "Magnum" Weili</h1>
        <GifComponent
          src="https://giphy.com/embed/Y4WAlmLm5QiKrQPdW0"
          title="Zhang Weili Sticker"
        />
      <h3 className="fighterAbout"><em> About</em></h3>

        <p className="fighterParagraph">
          Zhang Weili is a Chinese mixed martial artist who competes in the
          strawweight sectionision of the Ultimate Fighting Championship (UFC).
        </p>
        <p className="fighterParagraph"> She
          is known for her striking and grappling skills and has won several
          awards and titles throughout her career. </p>
        <p className="fighterParagraph">Zhang Weili has had a
          difficult journey to the top of her sport, including growing up in
          poverty and dealing with injuries and setbacks along the way. Despite
          these challenges, she has persevered and become one of the most
          successful fighters in her sectionision. </p>
        <p className="fighterParagraph">Some of her highlights include
          winning the UFC Women's Strawweight Championship in 2019 and defending
          it against Joanna Jedrzejczyk in 2020. She also holds a professional
          record of 24 wins and 3 losses.</p>

        <Link className="fighterNextButton" to="/womens_flyweight">
          {" "}
          Next: Women's Flyweight
        </Link>
      </section>
      <Fighters weightClass={"womens_strawweight"} />
    </>
  );
}
