import React from "react";
import Fighters from "../components/Fighters";
import GifComponent from "../components/GifComponent";
import { Link } from "react-router-dom";

export default function Pfp() {
  return (
    <div className="container">
      <div className="description-container">
        <h1 className="fighterHeader">#1 Jon Jones: The MMA Virtuoso</h1>
        <GifComponent
          src="https://giphy.com/embed/kGdHb1zoKOx764R7MN"
          title="Jon Jones Sticker"
        />

        <p className="fighterParagraph">
          Jon Jones, the undeniable maestro of mixed martial arts, is more than
          just a fighter; he's a force of nature in the octagon. With an elusive
          blend of strategy, strength, and uncanny adaptability, he dances
          through challenges like a virtuoso, leaving fans and opponents alike
          in awe.
        </p>
        <p className="fighterParagraph">
          Often hailed as the "Bones" of the sport, Jones has an almost
          supernatural ability to bend the rules of physics, proving that limits
          are merely illusions in the world of MMA. His striking prowess is as
          sharp as a samurai's blade, while his ground game feels like a
          mystical puzzle only he can solve.
        </p>
        <p className="fighterParagraph">
          But it's not just his physical gifts that set Jon Jones apart. His
          relentless dedication, unmatched work ethic, and unbreakable spirit
          have made him an icon in and out of the cage. He's a symbol of
          resilience, proving that with the right mindset, one can conquer any
          obstacle.
        </p>
        <p className="fighterParagraph">
          In the arena of combat, Jon Jones is a living legend. Beyond the cage,
          he's an inspiration to all who dare to dream big and chase their goals
          with unwavering determination. His story is a testament to the
          enduring power of the human spirit and the relentless pursuit of
          greatness.
        </p>

        <Link className="fighterNextButton" to="/womens_strawweight">
          {" "}
          Next: Women's Strawweight
        </Link>
      </div>
      <Fighters weightClass={"pound_for_pound"} />
    </div>
  );
}
