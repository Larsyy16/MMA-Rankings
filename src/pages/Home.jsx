import { Link } from "react-router-dom";
export default function Home() {
  return (
<>        
<section className="homeSection">
    <h1 className="homeHeader">A SIMPLE GUIDE TO UFC'S FINEST FIGHTERS
</h1>
        <Link className="enterButton" to="/pound_for_pound">
          {" "}
          Enter
        </Link>
        </section>

    </>
  );
}
