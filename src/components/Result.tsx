import React from "react";
import result from "@images/result.png";

function Result() {
  return (
    <div className="">
      <img
        className="absolute w-w12 h-h12 mt-rt ml-rl z-40 min-w-[50%] min-h-[50%] "
        src={result}
        alt="result"
      />
    </div>
  );
}

export default Result;
