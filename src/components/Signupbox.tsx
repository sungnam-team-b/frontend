import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";

// 회원가입 박스

function Signupbox() {
  // 형식 확인
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("올바른 이메일 형식이 아닙니다!").required("이메일을 입력하세요."),
    username: Yup.string()
      .min(2, "닉네임은 2글자 이상입니다.")
      .max(10, "닉네임은 최대 10글자입니다.")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다.",
      )
      .required("닉네임을 입력하세요."),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다.")
      .max(16, "비밀번호는 최대 16자리입니다.")
      .required("패스워드를 입력하세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "대문자, 소문자, 숫자, 특수문자 중 3개 이상 포함해야합니다.",
      ),
    alias: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("필수 입력 값입니다."),
  });
  // const submit = () => {};
  const submit = async (values: any) => {
    const { email, username, password } = values;
    try {
      await axios.post("http://localhost:8080/v1/api/users/", {
        email,
        username,
        password,
      });
      setTimeout(() => {
        // 회원가입 후 이동
      }, 2000);
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        alias: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <div className="box-border rounded-3xl h-72 w-72 p-4">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center mb-2">회원가입</div>
              <div className="grid grid-rows-4">
                <div className="mb-2 mt-2">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">이메일</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.email}
                    </div>
                  </div>
                  <TextField
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    className=" w-52 sm:w-80 p-2.5"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="mb-2 mt-2">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">비밀번호</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.password}
                    </div>
                  </div>
                  <TextField
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    className=" w-52 sm:w-80 p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-2 mt-2">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">비밀번호 확인</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.alias}
                    </div>
                  </div>
                  <TextField
                    value={values.alias}
                    onChange={handleChange}
                    type="password"
                    id="alias"
                    className=" w-52 sm:w-80 p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-2 mt-2">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">닉네임</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.username}
                    </div>
                  </div>
                  <TextField
                    value={values.username}
                    onChange={handleChange}
                    type="string"
                    id="username"
                    className=" w-52 sm:w-80 p-2.5"
                    placeholder="user name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-buttonspacingt bg-green-500 p-4 pl-12 pr-12 rounded-3xl z-50"
                type="submit"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Signupbox;
