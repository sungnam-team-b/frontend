import React from "react";

// 사진 업로드 박스 -> 드래그앤 드롭, 누르면 파일 업로드 기능

function Photouploadbox() {
  let buttonText = "본인의 사진을 올리면\n인공지능이 분석을\n 시작합니다.";
  return (
    <div className="box-border rounded-3xl h-72 w-72 p-4 border-2 border-black bg-slate-600 opacity-50">
      <div className="flex justify-center items-center flex-col">
        <div className="mt-20">
          <button className="whitespace-pre-wrap text-white  ">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Photouploadbox;
