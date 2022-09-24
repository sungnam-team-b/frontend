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
import { useSelector } from "react-redux";

interface mydatatype {
  id: number;
  similarity: number;
  picture_id: { id: number; picture_url: string; user_id: string };
  great_id: { name: string; description: string; great_url: string };
}

export interface mydatainterface extends Array<mydatatype> {}

let mypagedata: mydatainterface;

function Slider2() {
  const [animals, setAnimals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user_id = useSelector<any>(state => state.uuid.value);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        await setError(null);
        await setAnimals(null);
        await setLoading(true);

        const response = await axios.get(
          `http://ec2-3-35-165-113.ap-northeast-2.compute.amazonaws.com:8080/api/v1/animals/${user_id}/mypage`,
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
