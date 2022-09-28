import Mainbackground from "@components/Mainbackground";
import React from "react";
import mainBackground from "@images/mainBackground.png";
import Guestloginbutton from "@components/Guestloginbutton";
import Userloginbutton from "@components/Userloginbutton";
import loginarrow from "@images/loginarrow.png";
import Signinbox from "@components/Signinbox";
import Signupbox from "@components/Signupbox";
import result from "@images/result.png";
import Signupbutton from "@components/Signupbutton";

const Signuppage = () => {
  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <div className="h-header"></div>
        <div className="h-2"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[26rem] h-[28rem] md:w-[30rem] md:h-[28rem] bg-mainorange bg-cover"
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
          >
            <div className="flex flex-row justify-center mt-14">
              <Signupbox></Signupbox>
            </div>
          </div>
        </div>
      </div>
    </Mainbackground>
  );
};

export default Signuppage;
