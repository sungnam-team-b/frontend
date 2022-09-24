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
import html2canvas from "html2canvas";

function Resultpage() {
  // 한
  const data: any = {
    mouse: "쥐띠",
    cow: "소띠",
    tiger: "호랑이띠",
    rabbit: "토끼띠",
    dragon: "용띠",
    snake: "뱀띠",
    horse: "말띠",
    lamb: "양띠",
    monkey: "원숭이띠",
    chicken: "닭띠",
    dog: "개띠",
    pig: "돼지ㄸ:",
  };
  const { state } = useLocation();
  const keys = Object.keys(state.result);
  console.log(state.userimage);
  console.log(state.animalimage);

  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.getElementById("div") as HTMLElement).then(canvas => {
      onSaveAs(canvas.toDataURL("image/png"), "image-download.png");
    });
  };

  const onSaveAs = (uri: any, filename: any) => {
    console.log("onSaveAs");
    var link = document.createElement("a");
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <Topmenu />

        <div className="h-header"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[30rem] h-[28rem] bg-mainorange bg-cover "
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
            id="div"
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
                    <p className="text-sm mt-2 mb-2">{data[keys[0]]}</p>
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
                      <Picturebutton onClick={() => onCapture()}>사진</Picturebutton>
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
