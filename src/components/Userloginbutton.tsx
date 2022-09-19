import React from "react";
import { useNavigate } from "react-router-dom";

function Userloginbutton() {
  const navigate = useNavigate();

  return (
    <button
      className="absoulte h-guestloginh1 w-guestloginw1 bg-blue-400  text-xs md:text-xl z-40 "
      onClick={() => navigate("/Signinpage")}
    >
      회원 로그인
    </button>
  );
}

export default Userloginbutton;
