import Discriptionbutton from "@components/Discriptionbutton";
import Kakaobutton from "@components/Kakaobutton";
import Mainbackground from "@components/Mainbackground";
import Picturebutton from "@components/Picturebutton";
import Rankbutton from "@components/Rankbutton";
import Result from "@components/Result";
import Topmenu from "@components/Topmenu";
import Urlbutton from "@components/Urlbutton";
import great1 from "@images/great1.png";
import result from "@images/result.png";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Resultpage() {
  // 한
  const data: any = {
    mouse: "쥐",
    cow: "소",
    tiger: "호랑이",
    rabbit: "토끼",
    dragon: "용",
    snake: "뱀",
    horse: "말",
    sheep: "양",
    monkey: "원숭이",
    chicken: "닭",
    dog: "개",
    pig: "돼지",
  };
  const { state } = useLocation();
  const keys = Object.keys(state.result);
  console.log(state.userimage);
  console.log(state.animalimage);
  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <Topmenu />

        <div className="h-header"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[30rem] h-[28rem] bg-mainorange bg-cover"
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
          >
            <div className="flex flex-row mt-14">
              <div className="w-[9rem]">
                <div className="flex  grid place-items-center	mt-[12.5rem] text-xs ml-20  ">
                  <div>{data[keys[0]]}</div>
                  <div>{data[keys[1]]}</div>
                  <div>{data[keys[2]]}</div>
                </div>
              </div>
              <div className="w-[12rem]">
                <div className=" text-center grid place-items-center flex flex-column mt-2">
                  <div className="flex flex-row">
                    <img className="w-[5rem] mr-11" src={state.userimage}></img>
                    <img className="w-[5rem]" src={state.animalimage}></img>
                  </div>

                  <div>
                    <p className="text-sm mt-2">{data[keys[0]]}</p>
                    <p className="text-xs text-slate-500">255523명중 120등</p>
                  </div>
                  <div>
                    <Result nums={state.result}></Result>
                  </div>
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
                <div className="flex grid place-items-center mt-[12.5rem] text-xs mr-20">
                  <div>{state.result[keys[0]]}%</div>
                  <div>{state.result[keys[1]]}%</div>
                  <div>{state.result[keys[2]]}%</div>
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
