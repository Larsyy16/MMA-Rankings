import { Link } from "react-router-dom";
export default function Home() {
  return (
<>        
<section className="homeSection">
    <h4 className="homeHeader">A SIMPLE GUIDE TO UFC'S FINEST FIGHTERS
</h4>
        <Link className="enterButton" to="/pound_for_pound">
          {" "}
          Enter
        </Link>
        </section>

    </>
  );
}
