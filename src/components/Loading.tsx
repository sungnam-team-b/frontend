import React from "react";
import Spinner from "@images/spinner.gif";

export const Loading = () => {
  return (
    <div>
      <div className="relative h-48 w-48">
        <img className="w-48 h-48 z-50" src={Spinner} alt="로딩중" width="5%" />
        <p className="absolute justify-center w-48 h-48 top-0 text-center pt-20">분석중..</p>
      </div>
    </div>
  );
};

export default Loading;
