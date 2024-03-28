import { Link } from "react-router-dom";
import logo from '../assets/mma-logo.png'
export default function Header() {
  return (
    <header>
      <Link to="./" className="logoName">
        <img src={logo} className="sitePicture" />
        <span>

        Ufc Guide
      </span>
      </Link>

  
      <nav>
        
        <Link className="siteLink" to="/Rankings">
          <span>Rankings</span>
        </Link>

        <Link to="https://www.ufc.com/events" className="siteLink">
          <span>Next Event </span>
        </Link>
      </nav>
    </header>
  );
}
