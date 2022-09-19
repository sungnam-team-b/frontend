import React from "react";
import result from "@images/result.png";
import Mainbackground from "@components/Mainbackground";
import Rankbox from "@components/Rankbox";
import Topmenu from "@components/Topmenu";
import Backbutton from "@components/Backbutton";

function Rankpage() {
  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <Topmenu />
        <div className="h-header"></div>
        <div className="h-2"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[30rem] h-[28rem] bg-mainorange bg-cover"
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
          >
            <div className="flex flex-row justify-center mt-14">
              <Rankbox />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-menubuttonspacing4 flex justify-center ">
        <Backbutton />
      </div>
    </Mainbackground>
  );
}

export default Rankpage;
