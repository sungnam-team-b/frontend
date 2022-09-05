import React from "react";

// 상세 소개 박스
// 웹 -> 가로 배치 / 모바일 -> 세로 배치

function Detailbox() {
  let text = "text..";
  return (
    <nav>
      {/* Mode: WEB */}
      <div className="hidden md:grid grid-cols-2 gap-24 border-5">
        <div className="box-border rounded-3xl h-72 w-72 p-4 border-2 border-black">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-20">image</div>
          </div>
        </div>
        <div className="box-border rounded-3xl h-72 w-72 p-4 border-2 border-white z-50">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-20">
              <button className="whitespace-pre-wrap text-white  ">{text}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mode: Mobile */}
      <div className="md:hidden grid grid-rows-2 gap-24 border-5 content-center">
        <div className="box-border rounded-3xl h-52 w-52 p-4 border-2 border-black z-50 content-center">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-20">image </div>
          </div>
        </div>
        <div className="box-border rounded-3xl h-52 w-52 p-4 border-2 border-white z-50">
          <div className="flex justify-center items-center flex-col">
            <div className="mt-20">
              <button className="whitespace-pre-wrap text-white  ">{text}</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Detailbox;
