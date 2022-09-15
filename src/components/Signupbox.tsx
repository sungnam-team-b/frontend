import React from "react";

// 랭킹 박스

function Photouploadbox() {
  return (
    <div className="box-border rounded-3xl h-72 w-72 p-4">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center mb-2">회원가입</div>
        <div className="grid grid-rows-4">
          <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              이메일{" "}
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 sm:w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium">
              비밀번호 확인{" "}
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium">
              닉네임{" "}
            </label>
            <input
              type="password"
              id="confirm_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="user name"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photouploadbox;
