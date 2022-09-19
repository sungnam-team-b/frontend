import Mainbackground from "@components/Mainbackground";
import React from "react";
import mainBackground from "@images/mainBackground.png";
import Guestloginbutton from "@components/Guestloginbutton";
import Userloginbutton from "@components/Userloginbutton";
import loginarrow from "@images/loginarrow.png";
import Signinbox from "@components/Signinbox";

const Signinpage = () => {
  return (
    <Mainbackground>
      <div className="w-w1 h-h1 flex justify-center flex items-center flex-col">
        <div className="mt-14"></div>
        <div className=" bg-white rounded-2xl h-boxborder w-boxborder p-4 border-2 fill-current border-white z-50">
          <Signinbox />
        </div>
      </div>
    </Mainbackground>
  );
};

export default Signinpage;
