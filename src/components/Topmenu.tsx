/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import brightness from "@images/brightness.png";
import logout from "@images/logout.png";
import description from "@images/approved.png";
import ranking from "@images/ranking.png";

// 상단바 메뉴 컴포넌트

function Topmenu() {
  return (
    <nav>
      {/* MODE: WEB */}
      <div className="hidden absolute md:-right-0 sm:right-full md:flex flex-row-reverse text-white">
        <div className="mr-12 mt-menubuttonspacingt2">다크모드</div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">로그아웃</div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">게스트</div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">비회원</div>
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          설명
        </button>
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          순위
        </button>
      </div>

      {/* MODE: Mobile */}
      <div className="md:hidden absolute flex -right-0 justify-center flex-row-reverse text-white text-xs z-50">
        {/* Dark Mode - 다크모드 */}
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          <img className="h-4 w-4" src={brightness} alt="brightness" />
        </button>
        {/* Logout - 로그아웃 */}
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          <img className="h-4 w-4" src={logout} alt="logouts" />
        </button>
        {/* Guest
        <div className="mr-menuspacing mt-menubuttonspacingt2">게스트</div>
        <div className="mr-menuspacing mt-menubuttonspacingt2">비회원</div> */}

        {/* Description - 위인 설명 */}
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          <img className="h-4 w-4" src={description} alt="descriptions" />
        </button>
        {/* Ranking - 순위 보기 */}
        <button className="mr-menuspacing mt-menubuttonspcaingt bg-indigo-500 p-2 pr-4 pl-4 rounded-2xl">
          <img className="h-4 w-4" src={ranking} alt="rankings" />
        </button>
      </div>
    </nav>
  );
}
// 순위 아이콘  제작자: lutfix - Flaticon

export default Topmenu;
