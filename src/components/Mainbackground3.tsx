import React from "react";

import footer from "@images/footer.png";

import flower from "@images/flower.png";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground3(props: MainProps) {
  return (
    <div className="h-h1 bg-mainblue">
      <div className="absolute w-[2.5rem] mt-mt1 ml-mt2 z-30">
        <img src={flower} alt="flower" />
      </div>
      <div className="absolute w-[2.5rem] mt-mt1 ml-mt3 z-30">
        <img src={flower} alt="flower" />
      </div>
      <div className="absolute mt-mt5 w-full text-center text-text1 md:text-[2.9rem] z-40 text-[1.5rem]">
        마이 페이지
      </div>

      <div className="">
        <img className="absolute w-w1 h-h8 bottom-0 z-40" src={footer} alt="footer" />
      </div>

      {props.children}
    </div>
  );
}

export default Mainbackground3;
