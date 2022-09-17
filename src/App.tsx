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
import { lightTheme } from "@theme/theme";

function App() {
  return <Signinpage></Signinpage>;
}

export default App;
