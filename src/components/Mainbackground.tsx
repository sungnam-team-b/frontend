import React from "react";

import korea from "@images/korea.png";
import birds from "@images/birds.png";
import logo from "@images/logo.png";
import cloud1 from "@images/cloud1.png";
import cloud2 from "@images/cloud2.png";
type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground() {
  return (
    <div className="h-h1 bg-mainblue">
      <div className="flex justify-center">
        <div className="absolute md:w-w2 md:h-h2 w-w3 h-h3 mt-sph2 ">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="absolute md:w-w2 md:h-h2 w-w3 h-h3  ">
        <img className="w-w5 h-h5" src={cloud1} alt="cloud1" />
      </div>
      <div className="absolute md:w-w2 md:h-h md:ml-ml1 ml-ml2 w-w6 h-h6 mt-spc ">
        <img src={cloud2} alt="cloud2" />
      </div>

      <div className="absolute md:w-w2 md:h-h2 w-w4 h-h4 mt-sph ml-spw">
        <img src={birds} alt="birds" />
      </div>
    </div>
  );
}

export default Mainbackground;
