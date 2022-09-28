import React from "react";
import { useNavigate } from "react-router-dom";

// 뒤로가기 버튼

function Backbutton() {
  const navigate = useNavigate();

  return (
    <button
      className="mt-[8rem] md:mt-24 bg-green-500 p-4 md:pl-12 md:pr-12 rounded-3xl z-50 w-[8rem] h-[1rem] text-[0.7rem] md:w-[10rem] md:h-[3rem] align-middle  "
      onClick={() => navigate("/Mainpage")}
    >
      돌아가기
    </button>
  );
}
export default Backbutton;
