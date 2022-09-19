import React from "react";

import footer from "@images/footer.png";

import flower from "@images/flower.png";
<<<<<<< HEAD

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground3(props: MainProps) {
  return (
    <div className="h-h1 bg-mainblue">
=======
import { ReducerType } from "../rootReducer";
import { useSelector } from "react-redux";
type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground2(props: MainProps) {
  const theme = useSelector<ReducerType, any>(state => state.theme.value);

  return (
    <div className="h-h1" style={{ backgroundColor: theme }}>
>>>>>>> aa6166f85df2127da08c420936a64fed7c1dfceb
      <div className="absolute w-[2.5rem] mt-mt1 ml-mt2 z-30">
        <img src={flower} alt="flower" />
      </div>
      <div className="absolute w-[2.5rem] mt-mt1 ml-mt3 z-30">
        <img src={flower} alt="flower" />
      </div>
      <div className="absolute mt-mt5 w-full text-center text-text1 md:text-[2.9rem] z-40 text-[1.5rem]">
<<<<<<< HEAD
        마이 페이지
=======
        마이페이지
>>>>>>> aa6166f85df2127da08c420936a64fed7c1dfceb
      </div>

      <div className="">
        <img className="absolute w-w1 h-h8 bottom-0 z-40" src={footer} alt="footer" />
      </div>

      {props.children}
    </div>
  );
}

<<<<<<< HEAD
export default Mainbackground3;
=======
export default Mainbackground2;
>>>>>>> aa6166f85df2127da08c420936a64fed7c1dfceb
