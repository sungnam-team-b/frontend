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
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import Backbutton from "@components/Backbutton";

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
    pig: "돼지띠",
  };
  const { state } = useLocation();
  const keys = Object.keys(state.result);
  console.log(state.userimage);
  console.log(state.animalimage);
  console.log(state);

  useEffect(() => {
    window.Kakao.init("fb028531be51c963fa62731f34fe9c5d");
    try {
      console.log(window.Kakao.isInitialized());
    } catch (e) {
      console.log(e);
    }
  }, []);

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

  const sendKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "나와 닮은 12지신 찾기",
        description: "인공지능이 찾아주는 나와 닮은 12지신과 운세",
        imageUrl: "",
        link: {
          webUrl: "http://ec2-3-38-109-64.ap-northeast-2.compute.amazonaws.com",
          mobileWebUrl: "http://ec2-3-38-109-64.ap-northeast-2.compute.amazonaws.com",
        },
      },

      buttons: [
        {
          title: "함께 해보기",
          link: {
            webUrl: "http://ec2-3-38-109-64.ap-northeast-2.compute.amazonaws.com",
            mobileWebUrl: "http://ec2-3-38-109-64.ap-northeast-2.compute.amazonaws.com",
          },
        },
      ],
    });
  };

  return (
    <Mainbackground>
      <div className="absolute z-40 w-full">
        <Topmenu />

        <div className="h-header"></div>
        <div className="h-body grid place-items-center">
          <div
            className="absolute w-[24rem] h-[22rem] bg-mainorange bg-cover md:w-[30rem] md:h-[28rem] "
            style={{ background: `url(${result})`, backgroundSize: "100%" }}
            id="div"
          >
            <div className="flex flex-row mt-14">
              <div className="w-[9rem]">
                <div className="flex  grid place-items-center	mt-[8.7rem] md:mt-[11.3rem] text-xs ml-20  ">
                  <div>{data[keys[0]]}</div>
                  <div>{data[keys[1]]}</div>
                  <div>{data[keys[2]]}</div>
                </div>
              </div>
              <div className="w-[12rem]">
                <div className=" text-center grid place-items-center flex flex-column mt-2">
                  <div className="flex flex-row">
                    <img className="w-[3rem] md:w-[5rem] mr-11" src={state.userimage}></img>
                    <img className="w-[3rem] md:w-[5rem]" src={state.animalimage}></img>
                  </div>

                  <div>
                    <p className="text-sm mt-2">{data[keys[0]]}</p>
                  </div>
                  <div>
                    <Result nums={state.result}></Result>
                  </div>
                  <div className="flex flex-column">
                    <div className="text-xs">
                      <p className="">공유하기</p>
                      <div className="flex flex-column mt-1">
                        <button onClick={() => sendKakaoMessage()}>
                          <Kakaobutton>kakao</Kakaobutton>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[9rem]">
                <div className="flex grid place-items-center mt-[8.7rem] md:mt-[11.3rem] text-xs mr-20">
                  <div>{state.result[keys[0]]}%</div>
                  <div>{state.result[keys[1]]}%</div>
                  <div>{state.result[keys[2]]}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-footer"></div>
        <div className="absolute inset-x-0 bottom-menubuttonspacing6 md:bottom-menubuttonspacing4 flex justify-center ">
          <Backbutton />
        </div>
      </div>
    </Mainbackground>
  );
}

export default Resultpage;
