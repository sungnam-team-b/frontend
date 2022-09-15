import Mainbackground from "@components/Mainbackground";
import Photouploadbox from "@components/Photouploadbox";
import Startbutton from "@components/Startbutton";
import Topmenu from "@components/Topmenu";
import React from "react";

function Mainpage() {
  return (
    <div>
      <Mainbackground>
        <Topmenu />
        <div className="w-w1 h-h1 flex justify-center items-center flex-col flex-start">
          <div className="mt-14" />
          <Photouploadbox />
          <Startbutton />
        </div>
      </Mainbackground>
    </div>
  );
}

export default Mainpage;
