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

let mypagedata: mydatainterface | undefined;

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
        await console.log(axios.defaults.headers);
        const response = await axios.get(
          `http://localhost:8080/api/v1/animals/user/${user_id}/mypage`,
        );
        mypagedata = (await response.data) as mydatainterface;
        mypagedata.map(data => {
          console.log(data.great_id.name);
          if (data.great_id.name === "tiger") data.great_id.name = "호랑이띠";
          if (data.great_id.name === "horse") data.great_id.name = "말띠";
          if (data.great_id.name === "snake") data.great_id.name = "뱀띠";
          if (data.great_id.name === "chicken") data.great_id.name = "닭띠";
          if (data.great_id.name === "pig") data.great_id.name = "돼지띠";
          if (data.great_id.name === "lamb") data.great_id.name = "양띠";
          if (data.great_id.name === "dog") data.great_id.name = "개띠";
          if (data.great_id.name === "mouse") data.great_id.name = "쥐띠";
          if (data.great_id.name === "monkey") data.great_id.name = "원숭이띠";
          if (data.great_id.name === "dragon") data.great_id.name = "용띠";
          if (data.great_id.name === "cow") data.great_id.name = "소띠";
          if (data.great_id.name === "rabbit") data.great_id.name = "토끼띠";
          console.log(data.great_id.name);
        });
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  var greatslider;

  if (mypagedata != undefined) {
    greatslider = mypagedata.map(mydata => (
      <SwiperSlide>
        <div
          className="absolute w-[20rem] h-[20rem] bg-mainorange bg-cover md:w-[27rem] md:h-[28rem]"
          style={{ background: `url(${result})`, backgroundSize: "100%" }}
        >
          <div className="flex flex-row mt-14">
            <div className="w-[8rem]"></div>
            <div className="w-[14rem]">
              <div className=" text-center grid place-items-center flex flex-column mt-[3rem]">
                <div className="flex flex-row ml-11 w-[3rem] mr-[7rem] md:w-[6rem] md:ml-0">
                  <img
                    className="w-[1.5rem] md:w-[3rem] mr-4"
                    src={mydata.picture_id.picture_url}
                  ></img>
                  <img className="w-[1.5rem] md:w-[3rem]" src={mydata.great_id.great_url}></img>
                </div>

                <div className="flex flex-row mt-[1rem]">
                  <div className="text-sm mr-[1.5rem]">{mydata.great_id.name}</div>
                  <div className="text-sm">{mydata.similarity}%</div>
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
  }

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
