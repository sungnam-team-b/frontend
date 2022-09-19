import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 랭킹 박스

var rankjson = { 0: { rank: 0, alias: 0, similarity: 0 } };

function Rankbox() {
  const [ranks, setRanks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        await setError(null);
        await setRanks(null);
        await setLoading(true);
        const response = await axios.get("http://localhost:8080/v1/api/animals/rank");
        rankjson = await response.data;
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  var rankmap = Object.values(rankjson).map(ranking => (
    <div className="grid grid-cols-3 gap-12 mt-2" key={ranking.rank}>
      <div>{ranking.rank + 1}등</div>
      <div>{ranking.alias}</div>
      <div>{ranking.similarity}%</div>
    </div>
  ));

  let titleText = "위인들과 닮은 순위";
  return (
    <div className="box-border rounded-3xl h-72 w-72 p-4">
      <div className="flex justify-center items-center flex-col">
        <div className="mt-5 overflow">
          <div className="flex justify-center mb-5">{titleText}</div>
          {rankmap}
        </div>
      </div>
    </div>
  );
}

export default Rankbox;
