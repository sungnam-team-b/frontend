import React from "react";
import mainBackground from "@images/mainBackground.png";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainpagebackground(props: MainProps) {
  return (
    <div
      className="h-h1 w-w1 bg-center bg-cover bg-no-repeat
    "
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      <div className="text-white absolute flex-col 2xl:mt-mainspacingt5 2xl:ml-mainspacingl5 xl:mt-mainspacingt1 xl:ml-mainspacingl1 md:mt-mainspacingt3 md:ml-mainspacingl3 sm:mt-mainspacingt4 sm:ml-mainspacingl4 ">
        <div className="2xl:text-main2xl1 md:text-maint3small xl:text-maint1medium sm:text-maint5">
          인공지능이 찾아주는
        </div>
        <div className="2xl:text-main2xl2 md:text-maint4small xl:text-maint2medium sm:text-maint6 mt-mainspacingt2 ml-mainspacingl2">
          나와 닮은 대한민국의 위인 찾기
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Mainpagebackground;
