/* eslint-disable react/jsx-key */
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import result from "@images/result.png";
import great1 from "@images/great1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Discriptionbutton from "./Discriptionbutton";
import Kakaobutton from "./Kakaobutton";
import Picturebutton from "./Picturebutton";
import Rankbutton from "./Rankbutton";
import Result from "./Result";
import Urlbutton from "./Urlbutton";
import Readmorebutton from "./Readmorebutton";

let greats = [
  { name: "이순신", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "유관순", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "김좌진", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "정주영", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "싸이", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "손흥민", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "박지성", img: great1, discription: "이 위인은 이순신입니다" },
  { name: "김연아", img: great1, discription: "이 위인은 이순신입니다" },
];

function Slider2() {
  const greatslider = greats.map(great => (
    <SwiperSlide>
      <div
        className="absolute w-[27rem] h-[28rem] bg-mainorange bg-cover"
        style={{ background: `url(${result})`, backgroundSize: "100%" }}
      >
        <div className="flex flex-row mt-14">
          <div className="w-[8rem]">
            <div className="flex  grid place-items-center	mt-[10.5rem] text-xs ml-20  ">
              <div>이순신</div>
              <div>김좌진</div>
              <div>정약용</div>
            </div>
          </div>
          <div className="w-[11rem]">
            <div className=" text-center grid place-items-center flex flex-column mt-2">
              <div className="flex flex-row w-[3.5rem] mr-24">
                <img className="w-[2.5rem] mr-11" src={great1}></img>
                <img className="w-[2.5rem]" src={great1}></img>
              </div>

              <div>
                <p className="text-sm mt-2">이순신</p>
                <p className="text-xs text-slate-500">255523명중 120등</p>
              </div>
              <Result></Result>

              <Readmorebutton></Readmorebutton>
            </div>
          </div>
          <div className="w-[8rem]">
            <div className="flex  grid place-items-center mt-[10.5rem] text-xs mr-20   ">
              <div>80%</div>
              <div>60%</div>
              <div>50%</div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {greatslider}
      </Swiper>
    </>
  );
}

export default Slider2;
