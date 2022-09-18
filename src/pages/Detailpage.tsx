import React from "react";
import Mainbackground from "@components/Mainbackground";
import Topmenu from "@components/Topmenu";
import Detailbox from "@components/Detailbox";
import Backbutton from "@components/Backbutton";
import { useLocation } from "react-router";
import Mainbackground4 from "@components/Mainbackground4";
import result from "@images/result.png";
import Backbutton2 from "@components/Backbutton2";

function Detailpage() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Mainbackground4>
        <Topmenu />
        <div className="flex flex-row">
          <div className="w-[50vw] h-[100vh]  flex items-center justify-center">
            <div
              className="absolute w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] bg-cover grid place-items-center"
              style={{ background: `url(${result})`, backgroundSize: "100%" }}
            >
              <div className="absolute w-[10rem] h-[10rem] mt-5 md:w-[15rem] md:h-[15rem] z-40 mb-20">
                <img src={state.great_url} alt="" />
              </div>

              <div className="z-40 mt-[12rem] md:mt-[22rem] ">{state.name}</div>
            </div>
          </div>
          <div className="w-[50vw] h-[100vh] flex items-center justify-center">
            <div className="w-[30vw] text-white">{state.description}</div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-menubuttonspacing4 flex justify-center ">
          <Backbutton2 />
        </div>
      </Mainbackground4>
    </div>
  );
}

export default Detailpage;
