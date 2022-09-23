/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
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

  return (
    <nav>
      {/* MODE: WEB */}
      <div className="absolute md:top-0 -right-0 md:flex grid-cols-2 text-white">
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
          <div className="mt-menubuttonspacingt5 md:mt-menubuttonspacingt2">비회원</div>
          <div className="mt-menubuttonspacingt5 md:mt-menubuttonspacingt2">게스트</div>
          <div className="mt-menubuttonspacingt6 md:mt-menubuttonspacingt3">
            <button
              onClick={() => {
                navigate("/");
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
    </nav>
  );
}
// 순위 아이콘  제작자: lutfix - Flaticon

export default Topmenu;
