import Mainbackground2 from "@components/Mainbackground2";
import React from "react";
import intro from "@images/intro.png";
import Slider from "@components/Slider";
import Slider2 from "@components/Slider2";
import Mainbackground3 from "@components/Mainbackground3";
import Topmenu from "@components/Topmenu";

function Mypage() {
  return (
    <div>
      <Mainbackground3>
        <div className="absolute z-40 w-full">
          <Topmenu />
          <div className="h-header"></div>
          <div className="h-body w-full ">
            <div
              className="absolute w-full h-[28rem] bg-mainorange bg-cover"
              style={{ background: `url(${intro})`, backgroundSize: "100%" }}
            ></div>
            <div className="z-40">
              <Slider2></Slider2>
            </div>
          </div>

          <div className=" h-footer"></div>
        </div>
      </Mainbackground3>
    </div>
  );
}

export default Mypage;
