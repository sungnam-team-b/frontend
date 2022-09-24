import React from "react";
import { useNavigate } from "react-router-dom";

// 뒤로가기 버튼

function Backbutton() {
  const navigate = useNavigate();

  return (
    <button
      className="mt-28 md:mt-24 bg-green-500 p-4 pl-12 pr-12 rounded-3xl z-50 w-[10rem] h-[3rem]"
      onClick={() => navigate("/Mainpage")}
    >
      돌아가기
    </button>
  );
}
export default Backbutton;
