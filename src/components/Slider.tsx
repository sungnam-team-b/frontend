/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import result from "@images/result.png";
import great1 from "@images/great1.png";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

//type greatType = { id: number; name: string; description: string; great_url: string };

let greats = [{ name: "", description: "", great_url: "" }];

function Slider() {
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
          "http://ec2-3-38-109-64.ap-northeast-2.compute.amazonaws.com:8080/api/v1/animals/animallist",
        );

        greats = response.data;

        greats.map(data => {
          if (data.name === "tiger") data.name = "호랑이띠";
          if (data.name === "horse") data.name = "말띠";
          if (data.name === "snake") data.name = "뱀띠";
          if (data.name === "chicken") data.name = "닭띠";
          if (data.name === "pig") data.name = "돼지띠";
          if (data.name === "lamb") data.name = "양띠";
          if (data.name === "dog") data.name = "개띠";
          if (data.name === "mouse") data.name = "쥐띠";
          if (data.name === "monkey") data.name = "원숭이띠";
          if (data.name === "dragon") data.name = "용띠";
          if (data.name === "cow") data.name = "소띠";
          if (data.name === "rabbit") data.name = "토끼띠";
        });

        console.log(greats);
      } catch (e: any) {
        setError(e);
      }
      setLoading(false);
    };
    fetchAnimals();
  }, []);

  const greatslider = greats.map(great => (
    <SwiperSlide>
      <div
        className="absolute w-[32rem] h-[32rem] -bottom-0 md:-bottom-4 bg-cover grid place-items-center"
        style={{ background: `url(${result})`, backgroundSize: "100%" }}
        onClick={() => navigate("/Detailpage", { state: great })}
      >
        <div className="absolute w-[13rem] h-[17rem] z-40 bg-cover">
          <img src={great.great_url} alt="" />
        </div>

        <div className="z-40 mt-[22rem] text-[0.8rem]">{great.name}</div>
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
        className="mySwiper z-50"
      >
        {greatslider}
      </Swiper>
    </>
  );
}

export default Slider;
