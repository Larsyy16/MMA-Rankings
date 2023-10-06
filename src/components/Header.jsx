import { Link } from "react-router-dom";
import logo from '../assets/mma-logo.png'
export default function Header() {
  return (
    <header>
      <Link to="./" className="logoName">
        <img src={logo} className="sitePicture" />
        <h1>

        Ufc Guide
      </h1>
      </Link>

  
      <nav>
        
        <Link className="siteRankings" to="/Rankings">
          <h2>Rankings</h2>
        </Link>

        <Link to="https://www.ufc.com/events" className="ufcLink">
          <h2>Next Event </h2>
        </Link>
      </nav>
    </header>
  );
}
