import Mainbackground2 from "@components/Mainbackground2";
import React from "react";
import intro from "@images/intro.png";
import Slider from "@components/Slider";
import Topmenu from "@components/Topmenu";
import Backbutton from "@components/Backbutton";

function Intropage() {
  return (
    <div>
      <Mainbackground2>
        <div className="absolute z-40 w-full">
          <Topmenu />
          <div className="h-header"></div>
          <div className="h-body w-full ">
            <div
              className="absolute w-full h-[28rem] bg-mainorange bg-cover"
              style={{ background: `url(${intro})`, backgroundSize: "100%" }}
            ></div>
            <div className="z-40">
              <Slider></Slider>
            </div>
          </div>

          <div className=" h-footer flex justify-center align-center">
            <Backbutton />
          </div>
        </div>
      </Mainbackground2>
    </div>
  );
}

export default Intropage;
