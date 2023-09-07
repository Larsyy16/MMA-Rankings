import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="./">
        <img src="./src/assets/mma-logo.png" className="siteLogo" />
      </Link>

      <nav>
        <Link className="site-logo" to="/Rankings">
          {" "}
          UFC Rankings
        </Link>

        <Link to="https://www.ufc.com/events" className="ufcLink">
          Next Event
        </Link>
      </nav>
    </header>
  );
}
