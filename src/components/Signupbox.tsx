import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// 회원가입 박스

function Signupbox() {
  const navigate = useNavigate();

  // 형식 확인
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("올바른 이메일 형식이 아닙니다.")
      .test(
        "사용가능합니다.",
        "이미 등록된 이메일 입니다.",
        async email => (await checkID("email", email)) === 1,
      )
      .required("이메일을 입력하세요."),
    username: Yup.string()
      .min(2, "아이디는 2글자 이상입니다.")
      .max(10, "아이디는 최대 10글자입니다.")
      .matches(
        /^[a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "다시 입력해주세요. (영어, 숫자 조합)",
      )
      .test(
        "사용가능합니다.",
        "이미 등록된 아이디 입니다.",
        async username => (await checkID("username", username)) === 1,
      )
      .required("아이디를 입력하세요. (로그인 시 필요합니다.)"),
    password: Yup.string()
      .min(8, "비밀번호는 최소 8자리 이상입니다.")
      .max(16, "비밀번호는 최대 16자리입니다.")
      .required("비밀번호를 입력하세요.")
      .defined()
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
        "대,소문자, 숫자, 특수문자 중 3개 이상 포함해야합니다.",
      ),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("필수 입력 값입니다."),
    alias: Yup.string()
      .min(2, "닉네임은 2글자 이상입니다.")
      .max(10, "닉네임은 최대 10글자입니다.")
      .matches(
        /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
        "특수문자가 포함되면 안되고 숫자로 시작하면 안됩니다.",
      )
      .test(
        "사용가능합니다.",
        "이미 등록된 닉네임 입니다.",
        async alias => (await checkID("alias", alias)) === 1,
      )
      .required("닉네임을 입력하세요."),
  });

  // 양식 제출
  const submit = async (values: any) => {
    const { email, username, password, alias } = values;
    try {
      await axios
        .post("http://localhost:8080/v1/api/users/", {
          email,
          username,
          password,
          alias,
        })
        .then(res => console.log("성공"));
      alert("회원가입 성공");
      setTimeout(() => {
        // 회원가입 후 이동
        navigate("/");
      }, 2000);
    } catch (e) {
      console.log("error");
      // 서버에서 받은 에러 메시지 출력
    }
  };

  const checkID = async (type: string | undefined, value: any | undefined) => {
    const data = await axios.get(`http://localhost:8080/v1/api/users/?case=${type}&value=${value}`);
    if (data.data.result === false) {
      return 0;
    } else {
      return 1;
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        alias: "",
        passwordConfirm: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submit}
      validateOnMount={true}
    >
      {({ values, handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="top-0 flex justify-center items-center flex-col">
            <div className="absolute inset-4 h-12 flex justify-center text-white">회원가입</div>
            <div className="top-5">
              <div className="grid grid-rows-5">
                <div className="mb-1.5 mt-1.5">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">이메일</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.email}
                    </div>
                  </div>
                  <input
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                    id="email"
                    className=" w-80 p-2.5 rounded-md"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="mb-1.5 mt-1">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">아이디</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.username}
                    </div>
                  </div>
                  <input
                    value={values.username}
                    onChange={handleChange}
                    type="username"
                    id="username"
                    className="w-80 p-2.5 rounded-md"
                    placeholder="user name"
                    required
                  />
                </div>
                <div className="mb-1.5 mt-1">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">비밀번호</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.password}
                    </div>
                  </div>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                    id="password"
                    className="w-80 p-2.5 rounded-md"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-1.5 mt-1">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">비밀번호 확인</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.passwordConfirm}
                    </div>
                  </div>
                  <input
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    type="password"
                    id="passwordConfirm"
                    className="w-80 p-2.5 rounded-md"
                    placeholder="•••••••••"
                    required
                  />
                </div>
                <div className="mb-1.5 mt-1">
                  <div className="grid grid-cols-4">
                    <div className="text-sm font-medium text-black">닉네임</div>
                    <div className="col-span-3 mt-1 text-xxs font-medium text-red-600">
                      {errors.alias}
                    </div>
                  </div>
                  <input
                    value={values.alias}
                    onChange={handleChange}
                    type="string"
                    id="alias"
                    className="w-80 p-2.5 rounded-md"
                    placeholder="user name"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="mt-buttonspacingtop bg-green-500 p-4 pl-12 pr-12 rounded-3xl z-50"
              type="submit"
            >
              회원가입
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Signupbox;
