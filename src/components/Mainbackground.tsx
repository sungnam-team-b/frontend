import React from "react";
import mainBackground from "@images/mainBackground.png";

type MainProps = {
  children: React.ReactNode; // 👈️ type children
};
function Mainbackground(props: MainProps) {
  return (
    <div
      className="h-h1 w-w1 bg-auto  bg-contain
    "
      style={{ backgroundImage: `url(${mainBackground})` }}
    >
      {props.children}
    </div>
  );
}

export default Mainbackground;
