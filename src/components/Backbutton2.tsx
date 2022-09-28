import React from "react";
import { useNavigate } from "react-router-dom";

// 뒤로가기 버튼

function Backbutton() {
  const navigate = useNavigate();

  return (
    <button
      className="mt-14 bg-green-500 p-4 pl-12 pr-12 rounded-3xl z-50 w-[5rem] h-[3rem] md: w-[10rem] md:h-[3rem] align-middle	"
      onClick={() => navigate(-1)}
    >
      돌아가기
    </button>
  );
}
export default Backbutton;
