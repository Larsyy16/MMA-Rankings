import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="overlay">
      <div className="home-container">
        <h2> A simple guide to UFC's finest fighters</h2>
        <Link className="enterButton" to="/pound_for_pound">
          {" "}
          Enter
        </Link>
      </div>
    </div>
  );
}