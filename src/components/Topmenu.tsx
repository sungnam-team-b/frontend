import React from "react";

// 상단바 메뉴 컴포넌트

function Topmenu() {
  return (
    <nav>
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
      <div className="md:hidden flex items-center">
        <div className="absolute -right-0 mr-5 mt-12 flex flex-row-reverse text-white">
          <button>
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
      </div>
    </nav>
  );
}

export default Topmenu;
