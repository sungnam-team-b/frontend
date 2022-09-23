import React from "react";
import result from "@images/result.png";
import great1 from "@images/great1.png";
import Chart from "@components/Chart";
import Chart2 from "@components/Chart2";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};

function Result(props: any) {
  props = props["nums"];
  return <Chart2 nums2={props}></Chart2>;
}

export default Result;
