import { Link } from "react-router-dom";
export default function Home() {
  return (
<>        
<div>
    <h4>A SIMPLE GUIDE TO UFC'S FINEST FIGHTERS
</h4>
</div>
        <Link className="enterButton" to="/pound_for_pound">
          {" "}
          Enter
        </Link>
    </>
  );
}
