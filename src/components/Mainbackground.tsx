import React from "react";

import mainBackground4 from "@images/mainBackground4.png";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground(props: MainProps) {
  return (
    <div
      className="h-h1 w-w1 bg-center bg-cover bg-no-repeat

    "
      style={{ backgroundImage: `url(${mainBackground4})` }}
    >
      <div className="text-white absolute flex-col 2xl:mt-mainspacingt5 2xl:ml-mainspacingl5 xl:mt-mainspacingt1 xl:ml-mainspacingl1 md:mt-mainspacingt3 md:ml-mainspacingl3 sm:mt-mainspacingt4 sm:ml-mainspacingl4 ">
        <div className="md:text-maint3small xl:text-maint1medium sm:text-maint5">
          인공지능이 찾아주는
        </div>
        <div className="md:text-maint4small xl:text-maint2medium sm:text-maint6 mt-mainspacingt2 ml-mainspacingl2">
          나와 닮은 대한민국의 위인 찾기
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default Mainbackground;
