import Mainbackground from "@components/Mainbackground";
import React from "react";
import mainBackground from "@images/mainBackground.png";
import Guestloginbutton from "@components/Guestloginbutton";
import Userloginbutton from "@components/Userloginbutton";
import loginarrow from "@images/loginarrow.png";

const Loginpage = () => {
  return (
    <Mainbackground>
      <div className="w-w1 h-h1 flex justify-center flex items-center flex-col">
        <div className="mt-14"></div>
        <Guestloginbutton />
        <div className="h-loginspacing1"> </div>
        <div className="">
          <img className="w-w11" src={loginarrow} alt="loginarrow" />
        </div>
        <div className="h-loginspacing1"> </div>
        <Userloginbutton />
      </div>
    </Mainbackground>
  );
};

export default Loginpage;
