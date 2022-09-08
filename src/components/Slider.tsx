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

function Slider() {
  const greatslider = greats.map(great => (
    <SwiperSlide>
      <div
        className="absolute w-[30rem] h-[30rem] bg-cover grid place-items-center"
        style={{ background: `url(${result})`, backgroundSize: "100%" }}
      >
        <div className="absolute w-[15rem] h-[15rem] z-40">
          <img src={great.img} alt="great" />
        </div>

        <div className="z-40 mt-[22rem]">{great.name}</div>
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

export default Slider;
