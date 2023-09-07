import React from "react";
import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Pfp() {
  return (
    <div className="container">
      <div className="description-container">
        <h1 className="fighterHeader">Zhang "Magnum" Weili</h1>
        <GifComponent
          src="https://giphy.com/embed/Y4WAlmLm5QiKrQPdW0"
          title="Zhang Weili Sticker"
        />

        <p className="fighterParagraph">
          Zhang Weili is a Chinese mixed martial artist who competes in the
          strawweight division of the Ultimate Fighting Championship (UFC). She
          is known for her striking and grappling skills and has won several
          awards and titles throughout her career. Zhang Weili has had a
          difficult journey to the top of her sport, including growing up in
          poverty and dealing with injuries and setbacks along the way. Despite
          these challenges, she has persevered and become one of the most
          successful fighters in her division. Some of her highlights include
          winning the UFC Women's Strawweight Championship in 2019 and defending
          it against Joanna Jedrzejczyk in 2020. She also holds a professional
          record of 24 wins and 3 losses.
        </p>
        <p className="fighterParagraph"></p>
        <p className="fighterParagraph"></p>
        <p className="fighterParagraph"></p>

        <Link className="fighterNextButton" to="/womens_flyweight">
          {" "}
          Next: Women's Flyweight
        </Link>
      </div>
      <Fighters weightClass={"womens_strawweight"} />
    </div>
  );
}
