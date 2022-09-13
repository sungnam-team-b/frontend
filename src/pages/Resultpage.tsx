import Discriptionbutton from "@components/Discriptionbutton";
import Kakaobutton from "@components/Kakaobutton";
import Mainbackground from "@components/Mainbackground";
import Picturebutton from "@components/Picturebutton";
import Rankbutton from "@components/Rankbutton";
import Result from "@components/Result";
import Urlbutton from "@components/Urlbutton";
import great1 from "@images/great1.png";
import result from "@images/result.png";

import React from "react";

function Resultpage() {
  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <div className="h-header"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[30rem] h-[28rem] bg-mainorange bg-cover"
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
          >
            <div className="flex flex-row mt-14">
              <div className="w-[9rem]">
                <div className="flex  grid place-items-center	mt-[12.5rem] text-xs ml-20  ">
                  <div>이순신</div>
                  <div>김좌진</div>
                  <div>정약용</div>
                </div>
              </div>
              <div className="w-[12rem]">
                <div className=" text-center grid place-items-center flex flex-column mt-2">
                  <div className="flex flex-row">
                    <img className="w-[5rem] mr-11" src={great1}></img>
                    <img className="w-[5rem]" src={great1}></img>
                  </div>

                  <div>
                    <p className="text-sm mt-2">이순신</p>
                    <p className="text-xs text-slate-500">255523명중 120등</p>
                  </div>
                  <Result></Result>
                  <div className="flex flex-column">
                    <div>
                      <Discriptionbutton></Discriptionbutton>
                    </div>
                    <div>
                      <Rankbutton></Rankbutton>
                    </div>
                  </div>
                  <div className="text-xs">
                    <p>공유하기</p>
                    <div className="flex flex-column">
                      <Kakaobutton>kakao</Kakaobutton>
                      <Urlbutton>url</Urlbutton>
                      <Picturebutton>사진</Picturebutton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[9rem]">
                <div className="flex  grid place-items-center mt-[12.5rem] text-xs mr-20">
                  <div>80%</div>
                  <div>60%</div>
                  <div>50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-footer"></div>
      </div>
    </Mainbackground>
  );
}

export default Resultpage;
