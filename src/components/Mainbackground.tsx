import React from "react";

import birds from "@images/birds.png";
import logo from "@images/logo.png";
import cloud1 from "@images/cloud1.png";
import cloud2 from "@images/cloud2.png";
import footer from "@images/footer.png";
import star from "@images/star.png";
import mainBackground4 from "@images/mainBackground4.png";
import { ReducerType } from "../rootReducer";
import { useSelector } from "react-redux";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground(props: MainProps) {
  const theme = useSelector<ReducerType, any>(state => state.theme.value);

  return (
    <div className="h-h1" style={{ backgroundColor: theme }}>
      <div className="flex justify-center">
        <div className="absolute md:w-w2 md:h-h2 w-w3 h-h3 ">
          <img className="mt-16 md:mt-0" src={logo} alt="logo" />
        </div>
      </div>
      <div className="absolute w-w7 h-h7 mt-sph ml-spw z-30">
        <img src={birds} alt="birds" />
      </div>
      <div className="">
        <img className="absolute w-w1 h-h8 bottom-0 z-40" src={footer} alt="footer" />
      </div>
      <div className="">
        <img className="absolute w-w5 h-h5" src={cloud1} alt="cloud1" />
      </div>
      <div className="">
        <img className="absolute w-w9 h-h9 right-0 mt-spc" src={cloud2} alt="cloud2" />
      </div>
      <div className="">
        <img className="absolute w-10 h-h10 right-0 mt-sps mr-spsr" src={star} alt="star" />
      </div>
      <div className="">
        <img className="absolute w-10 h-h10 mt-sps2 ml-spsr" src={star} alt="star" />
      </div>
      {props.children}
    </div>
  );
}

export default Mainbackground;
