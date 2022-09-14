/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import brightness from "@images/brightness.png";
import logout from "@images/logout.png";
import description from "@images/approved.png";
import ranking from "@images/ranking.png";
import dark from "@images/dark.png";

// 상단바 메뉴 컴포넌트

function Topmenu() {
  return (
    <nav>
      {/* MODE: WEB */}
      <div className="absolute md:-right-0 md:flex flex-row-reverse text-white">
        <div className="mr-12 mt-menubuttonspacingt3">
          <img className="h-4 w-4" src={dark} alt="dark" />
        </div>
        <div className="mr-menuspacing mt-menubuttonspacingt3">
          <img className="h-4 w-4" src={logout} alt="logout" />
        </div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">게스트</div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">비회원</div>
        <button className="mr-menuspacing mt-menubuttonspacingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          설명
        </button>
        <button className="mr-menuspacing mt-menubuttonspacingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          순위
        </button>
      </div>
    </nav>
  );
}
// 순위 아이콘  제작자: lutfix - Flaticon

export default Topmenu;
