import React from "react";
import user from "@images/user.png";
import password from "@images/password.png";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ClassNames } from "@emotion/react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signinbox() {
  const navigate = useNavigate();
  const JWT_EXPIRY_TIME = 24 * 3600 * 1000 * 7; // 만료 시간 (24시간 밀리 초로 표현)
  const data = {
    email: "",
    password: "",
  };
  const submit = async (values: any) => {
    const { username, password } = values;

    try {
      const result = await axios.post("http://localhost:8080/v1/api/users/auth", {
        username,
        password,
      });

      if (result) {
        console.log(result.data);
        console.log(result);
        alert("로그인 완료");
        navigate("/Mainpage");
        onLoginSuccess(result);
      } else {
        console.log("bbb");
      }
    } catch (e) {
      alert("아이디 혹은 비밀번호를 확인해주세요.");
      // 서버에서 받은 에러 메시지 출력
      console.log(username);
      console.log(password);
    }
  };

  const onSilentRefresh = () => {
    axios
      .post("http://localhost:8080/v1/api/users/auth", data)
      .then(onLoginSuccess)
      .catch(error => {
        // ... 로그인 실패 처리
      });
  };

  const onLoginSuccess = (response: { data: { accessToken: any } }) => {
    console.log(response.data);
    const { accessToken } = response.data;
    console.log(accessToken);

    // accessToken 설정
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
  };

  const styles = {
    root: {
      background: "black",
    },
    input: {
      color: "white",
    },
  };
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <div className="flex justify-center items-center flex-col">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="relative mb-6 flex justify-center">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
              </div>
              <input
                value={values.username}
                type="username"
                id="username"
                onChange={handleChange}
                className="h-12 w-52 md:w-96 pl-10 p-2.5 rounded-md"
                placeholder="username"
              />
            </div>
            <div className="relative mb-6 flex justify-center">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>{" "}
                </svg>
              </div>
              <input
                onChange={handleChange}
                value={values.password}
                type="password"
                id="password"
                className="h-12 w-52 md:w-96 pl-10 p-2.5 rounded-md "
                placeholder="password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="absoulte  h-guestloginh1 w-guestloginw1 mt-loginspacing2 bg-blue-400 text-xs md:text-xl z-40 rounded-md"
              >
                로그인
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 items-center ml-rt mt-loginspacing1 z-50">
              <div className="text-white">Is this your first visit?</div>
              <div className="text-blue-300 z-50">
                <button className="z-60 h-12 w-12" onClick={() => navigate("/Signuppage")}>
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Signinbox;
