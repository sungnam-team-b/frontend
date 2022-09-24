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
        const response = await axios.get("http://localhost:8080/api/v1/animals/animallist");
        greats = response.data;
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
        className="absolute w-[30rem] h-[30rem] bg-cover grid place-items-center"
        style={{ background: `url(${result})`, backgroundSize: "100%" }}
        onClick={() => navigate("/Detailpage", { state: great })}
      >
        <div className="absolute w-[15rem] h-[15rem] z-40">
          <img src={great.great_url} alt="" />
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
