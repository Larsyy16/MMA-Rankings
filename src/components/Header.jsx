import { Link } from "react-router-dom";
import logo from './src/assets/mma-logo.png'
export default function Header() {
  return (
    <header>
      <Link to="./">
        <img src={logo} className="siteLogo" />
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
