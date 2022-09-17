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

function Signinbox() {
  const styles = {
    root: {
      background: "black",
    },
    input: {
      color: "white",
    },
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative mb-6">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
        <TextField
          type="eamil"
          id="email"
          className="h-12 w-96 sm:w-96 pl-10 p-2.5 text-white"
          placeholder="email"
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
        variant="contained"
        className="absoulte h-guestloginh1 w-guestloginw1 mt-loginspacing2 bg-blue-400 text-xs md:text-xl z-40"
      >
        로그인
      </Button>
      <div className="grid grid-cols-2 gap-8 items-center ml-rt mt-loginspacing1 z-50">
        <div className="text-black">Is this your first visit?</div>
        <div className="text-blue-300">Sign up</div>
      </div>
    </div>
  );
}

export default Signinbox;
