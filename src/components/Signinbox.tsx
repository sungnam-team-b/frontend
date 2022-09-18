import React from "react";
import user from "@images/user.png";
import password from "@images/password.png";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, colors, TextField } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { withStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";
import { borders } from "@mui/system";
import axios from "axios";

function Signinbox() {
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
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <TextField
                value={values.username}
                type="username"
                id="username"
                onChange={handleChange}
                className="h-12 w-96 sm:w-96 pl-10 p-2.5 text-white"
                placeholder="username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </div>
            <div className="relative mb-6">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <TextField
                onChange={handleChange}
                value={values.password}
                type="password"
                id="password"
                className="h-12 w-96 sm:w-96 pl-10 p-2.5 "
                placeholder="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              className="absoulte h-guestloginh1 w-guestloginw1 mt-loginspacing2 bg-blue-400 text-xs md:text-xl z-40"
            >
              로그인
            </Button>
            <div className="grid grid-cols-2 gap-8 items-center ml-rt mt-loginspacing1 z-50">
              <div className="text-black">Is this your first visit?</div>
              <div className="text-blue-300">Sign up</div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Signinbox;
