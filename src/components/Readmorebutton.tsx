import React from "react";
import { useNavigate } from "react-router-dom";

function Readmorebutton(props: any) {
  const navigate = useNavigate();
  let readmoredata = { description: props.description, great_url: props.great_url };

  return (
    <button
      className="absoulte bg-button1 w-[7rem] h-[2rem] text-xs mr-2 rounded-xl text-white	"
      onClick={() => navigate("/Detailpage", { state: readmoredata })}
    >
      자세히보기
    </button>
  );
}

export default Readmorebutton;
