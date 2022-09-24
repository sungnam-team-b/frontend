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

function Mobilemenu() {
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
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <div className="flex flex-col  items-center z-50">
      <button
        className="px-4 py-2 text-gray-700 rounded-lg rounded-lgtext-2xl hover:bg-gray-200"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
// 순위 아이콘  제작자: lutfix - Flaticon

export default Mobilemenu;
