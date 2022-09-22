/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";

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
import axios from "axios";
import { useNavigate } from "react-router-dom";

let mypagedata = [
  {
    id: 1,
    similarity: 0,
    picture_id: { id: 1, picture_url: "", user_id: null },
    great_id: { name: "", description: "", great_url: "" },
  },
];

function Slider2() {
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        await setError(null);
        await setAnimals(null);
        await setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/v1/api/animals/e10140c5796c456facef4827acb0ba9c/mypage",
        );
        mypagedata = response.data;
        console.log(mypagedata);
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  const greatslider = mypagedata.map(mydata => (
    <SwiperSlide>
      <div
        className="absolute w-[27rem] h-[28rem] bg-mainorange bg-cover"
        style={{ background: `url(${result})`, backgroundSize: "100%" }}
      >
        <div className="flex flex-row mt-14">
          <div className="w-[8rem]"></div>
          <div className="w-[14rem]">
            <div className=" text-center grid place-items-center flex flex-column mt-[3rem]">
              <div className="flex flex-row w-[6.5rem] mr-[7rem]">
                <img className="w-[2.5rem]" src={mydata.picture_id.picture_url}></img>
                <img className="w-[2.5rem]" src={mydata.great_id.great_url}></img>
              </div>

              <div className="flex flex-row mt-[1rem]">
                <div className="text-sm mr-[1.5rem]">{mydata.great_id.name}</div>
                <div className="text-sm">{mydata.similarity}</div>
              </div>

              <div className="mt-[2rem]">
                <Readmorebutton
                  description={mydata.great_id.description}
                  great_url={mydata.great_id.great_url}
                ></Readmorebutton>
              </div>
            </div>
          </div>
          <div className="w-[8rem]"></div>
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
