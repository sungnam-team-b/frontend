import React from "react";
import result from "@images/result.png";
import great1 from "@images/great1.png";
import styled from "styled-components";
import Chart from "@components/Chart";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};

function Result(props: any) {
  props = props["nums"];
  return <Chart nums2={props}></Chart>;
}

export default Result;
