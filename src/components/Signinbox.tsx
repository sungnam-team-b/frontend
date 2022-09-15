import React from "react";
import user from "@images/user.png";
import password from "@images/password.png";
import { Label } from "recharts";

function Signinbox() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <img className="h-4 w-4" src={user} alt="user" />
        </div>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-96 sm:w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="email"
        />
      </div>
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <img className="h-4 w-4" src={password} alt="password" />
        </div>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-12 w-96 sm:w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="password"
        />
      </div>

      <button className="absoulte h-guestloginh1 w-guestloginw1 mt-loginspacing2 bg-blue-400  text-xs md:text-xl z-40">
        로그인
      </button>
      <div className="grid grid-cols-2 gap-8 items-center ml-rt mt-loginspacing1 z-50">
        <div className="text-white">Is this your first visit?</div>
        <div className="text-blue-300">Sign up</div>
      </div>
    </div>
  );
}

export default Signinbox;
