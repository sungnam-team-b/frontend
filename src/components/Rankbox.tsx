import React from "react";

// 랭킹 박스

function Photouploadbox() {
  let titleText = "위인들과 닮은 순위";
  return (
    <div className="box-border rounded-3xl h-72 w-72 p-4">
      <div className="flex justify-center items-center flex-col">
        <div className="mt-5">
          <div className="flex justify-center mb-5">{titleText}</div>
          <div className="grid grid-cols-3 gap-12">
            <div>1등</div>
            <div>aaaaa</div>
            <div>99%</div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div>2등</div>
            <div>aaaaa</div>
            <div>99%</div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            <div>3등</div>
            <div>aaaaa</div>
            <div>99%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photouploadbox;
