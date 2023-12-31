import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function UfcRankings() {
  const [weightClasses, setWeightClasses] = useState([]);

  useEffect(() => {
    fetch("api/data")
      .then((res) => res.json())
      .then((data) => setWeightClasses(data.rankings));
  }, []);

  const mmaWeightClasses = weightClasses.map((ranking) => (
    <Link key={uuidv4()} to={`../${ranking.name}`}>
        <h5 className="rankingsPageClasses">
          {ranking.name
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </h5>
    </Link>
  ));

  return (
  
  <>
<section className="rankingsPageSection">
<h2 className="rankingsHeader"> Rankings</h2>
  {mmaWeightClasses}
  </section>
  </>);
}
