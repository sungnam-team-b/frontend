import React from "react";
import { useNavigate } from "react-router-dom";

function Guestloginbutton() {
  const navigate = useNavigate();

  return (
    <button
      className="absoulte h-guestloginh1 w-guestloginw1 bg-green-500 text-xs md:text-xl z-40"
      onClick={() => navigate("/Mainpage")}
    >
      비회원 로그인
    </button>
  );
}

export default Guestloginbutton;
