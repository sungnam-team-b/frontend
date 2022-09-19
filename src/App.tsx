import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Mypage from "@pages/Mypage";
import Resultpage from "@pages/Resultpage";
import Rankpage from "@pages/Rankpage";
import Signinpage from "@pages/Signinpage";
import Signuppage from "@pages/Signuppage";
import Detailpage from "@pages/Detailpage";
import Mainpage from "@pages/Mainpage";
import Intropage from "@pages/Intropage";
import Loginpage from "@pages/Loginpage";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/Signinpage" element={<Signinpage />} />
        <Route path="/Signuppage" element={<Signuppage />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Rankpage" element={<Rankpage />} />
        <Route path="/Intropage" element={<Intropage />} />
        <Route path="/Detailpage" element={<Detailpage />} />
      </Routes>
    </Router>
  );
}

export default App;
