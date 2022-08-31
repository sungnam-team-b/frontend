import Mainbackground from "@components/Mainbackground";
import React from "react";
import mainBackground from "@images/mainBackground.png";
import Guestloginbutton from "@components/Guestloginbutton";
import Userloginbutton from "@components/Userloginbutton";

const Loginpage = () => {
  return (
    <div>
      <Mainbackground>
        <div className="w-w1 h-h1 flex justify-center flex items-center flex-col">
          <div className="mt-14"></div>
          <Guestloginbutton />
          <div className="h-loginspacing1"> </div>
          <Userloginbutton />
        </div>
      </Mainbackground>
    </div>
  );
};

export default Loginpage;
