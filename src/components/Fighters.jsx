import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Fighters({ weightClass }) {
  const [mmaRankings, setMmaRankings] = useState([]);

  useEffect(() => {
    fetch("api/data")
      .then((res) => res.json())
      .then((data) => setMmaRankings(data.rankings));
  }, []);

  const filteredRankings = mmaRankings.filter(
    (ranking) => ranking.name === weightClass,
  );

  const mmaClasses =
    filteredRankings.length > 0
      ? filteredRankings[0].competitor_rankings.map((ranking, index) => (
            <p key={uuidv4()} className="pfp">
              <span>#{index + 1} </span>
              {ranking.competitor.name}
            </p>
        ))
      : null;

  // console.log(filteredRankings)

  return (
    <aside>
      <h2 className="rankingHeader"><em>Top Ranked </em></h2>
       {mmaClasses}</aside>
  );
}
