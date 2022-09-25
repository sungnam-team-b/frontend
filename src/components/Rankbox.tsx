import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 랭킹 박스

var rankjson = { 0: { rank: 0, alias: 0, similarity: 0, name: "" } };

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

        const response = await axios.get(
          "http://ec2-3-37-191-225.ap-northeast-2.compute.amazonaws.com:8080/api/v1/animals/rank",
        );
        rankjson = await response.data;
        console.log(rankjson);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  var rankmap = Object.values(rankjson).map(ranking => (
    <div className="flex flex-row mt-2" key={ranking.rank}>
      <div className="mr-[2rem]">{ranking.rank + 1}등</div>
      <div className="mr-[2rem]">{ranking.alias}</div>
      <div className="mr-[2rem]">{ranking.name}</div>
      <div className="">{ranking.similarity}%</div>
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
