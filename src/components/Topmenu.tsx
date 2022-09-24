/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import brightness from "@images/brightness.png";
import logout from "@images/logout.png";
import description from "@images/approved.png";
import ranking from "@images/ranking.png";
import dark from "@images/dark.png";
import styled from "styled-components";
import { Provider, useDispatch, useSelector } from "react-redux";
import { changeTheme } from "@slices/theme";
import { useNavigate } from "react-router-dom";
import { ReducerType } from "../rootReducer";
import { getUser } from "@slices/user";

// 상단바 메뉴 컴포넌트

function Topmenu() {
  const theme = useSelector<ReducerType, any>(state => state.theme.value);

  const dispatch = useDispatch();

  const handleTheme = (e: any) => {
    e.preventDefault();
    if (theme === "#F99872") dispatch(changeTheme("#2C3342"));
    else {
      dispatch(changeTheme("#F99872"));
    }
  };
  const navigate = useNavigate();
  let username = useSelector<any>(state => state.user.value);
  let userID = "";
  let userState = "로그인";
  let isUser = 0;
  console.log(username);

  if (username === "비회원") {
    //  비회원
    userID = "게스트";
    userState = "로그인";
    isUser = 0;
  } else {
    // 회원
    userID = String(username);
    userState = "회원";
    isUser = 1;
  }

  const log = () => {
    if (isUser === 0) {
      //  비회원
      navigate("/Signinpage");
    } else {
      console.log("asas");
    }
  };
  return (
    <nav>
      {/* MODE: WEB */}
      <div className="hidden md:absolute md:top-0 md:-right-0 md:flex md:grid-cols-2 text-white">
        <div>
          <button
            className="mr-menuspacing mt-menubuttonspacingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
            onClick={() => navigate("/Mypage")}
          >
            마이페이지
          </button>
          <button
            className="mr-menuspacing mt-menubuttonspacingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
            onClick={() => navigate("/Rankpage")}
          >
            순위
          </button>
          <button
            className="mr-menuspacing mt-menubuttonspacingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
            onClick={() => navigate("/Intropage")}
          >
            운세
          </button>
        </div>
        <div className="grid grid-cols-4 text-center">
          <div className="mt-menubuttonspacingt5 md:mt-menubuttonspacingt2">
            <button onClick={log}>{userState}</button>
          </div>
          <div className="mt-menubuttonspacingt5 md:mt-menubuttonspacingt2">{userID}</div>
          <div className="mt-menubuttonspacingt6 md:mt-menubuttonspacingt3">
            <button
              onClick={() => {
                window.location.replace("/");
                dispatch(getUser("비회원"));
                alert("로그아웃 되었습니다!");
              }}
            >
              <img className="h-4 w-4" src={logout} alt="logout" />
            </button>
          </div>
          <div className="mr-10 mt-menubuttonspacingt6 md:mt-menubuttonspacingt3">
            <button onClick={handleTheme}>
              <img className="h-4 w-4" src={dark} alt="dark" />
            </button>
          </div>
        </div>
      </div>

      {/* MODE: MOBILE */}
      <div className="md:hidden mt-menuspacing absolute flex -right-0 justify-center text-white text-xs z-50">
        {/* 마이페이지 */}
        <button
          className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
          onClick={() => navigate("/Mypage")}
        >
          마이페이지{" "}
        </button>

        {/* 순위 */}
        <button
          className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
          onClick={() => navigate("/Rankpage")}
        >
          순위
        </button>

        {/* 운세 */}
        <button
          className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl"
          onClick={() => navigate("/Intropage")}
        >
          운세
        </button>
        {/* 로그아웃 */}
        <div className="mt-menubuttonspacingt6 md:mt-menubuttonspacingt3">
          <button
            onClick={() => {
              navigate("/");
              dispatch(getUser("비회원"));
              alert("로그아웃 되었습니다!");
            }}
          >
            <img className="h-4 w-4" src={logout} alt="logout" />
          </button>
        </div>
        {/* 다크모드 */}
        <div className="ml-3 mr-5 mt-menubuttonspacingt6 md:mt-menubuttonspacingt3">
          <button onClick={handleTheme}>
            <img className="h-4 w-4" src={dark} alt="dark" />
          </button>
        </div>
      </div>
    </nav>
  );
}
// 순위 아이콘  제작자: lutfix - Flaticon

export default Topmenu;
