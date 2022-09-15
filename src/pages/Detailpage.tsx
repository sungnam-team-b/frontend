import React from "react";
import Mainbackground from "@components/Mainbackground";
import Topmenu from "@components/Topmenu";
import Detailbox from "@components/Detailbox";
import Backbutton from "@components/Backbutton";
function Detailpage() {
  return (
    <div>
      <Mainbackground>
        <Topmenu />
        <div className="w-w1 h-h1 flex justify-center items-center flex-col flex-start">
          <div className="mt-14" />
          <Detailbox />
          <Backbutton />
        </div>
      </Mainbackground>
    </div>
  );
}

export default Detailpage;
