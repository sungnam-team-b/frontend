import React from "react";

import footer from "@images/footer.png";

import { ReducerType } from "../rootReducer";
import { useSelector } from "react-redux";
type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground4(props: MainProps) {
  const theme = useSelector<ReducerType, any>(state => state.theme.value);

  return (
    <div className="h-h1" style={{ backgroundColor: theme }}>
      <div className="">
        <img className="absolute w-w1 h-h8 bottom-0 z-40" src={footer} alt="footer" />
      </div>

      {props.children}
    </div>
  );
}

export default Mainbackground4;
