import { responsiveFontSizes } from "@mui/material";
import axios from "axios";
import { url } from "inspector";
import React, { useState } from "react";
import { useNavigate } from "react-router";

// 사진 업로드 박스 -> 드래그앤 드롭, 누르면 파일 업로드 기능
const ALLOW_FILE_EXTENSION = "jpg,jpeg,png";
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB
function Photouploadbox() {
  const [file, setFileImage] = useState("");
  const [filename, setFile] = useState<File>();
  const navigate = useNavigate();

  let user_id = "00000000000000000000000000000001";
  const saveFileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setFileImage(URL.createObjectURL(e.target.files[0]));
    photoUploadValid(e);
  };
  const photoUploadValid = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }

    // 파일 확장자 체크
    if (!fileExtensionValid(files)) {
      target.value = "";
      alert(`업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`);
      return;
    }

    // 파일 용량 체크
    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = "";
      alert("업로드 가능한 최대 용량은 5MB입니다. ");
      return;
    }

    // validation을 정상적으로 통과한 File
    setFile(files);
  };

  let formdata = new FormData();
  let requestOptions = {
    method: "POST",
    body: formdata,
  };

  const photoUpload = async () => {
    if (filename !== undefined) {
      try {
        const formData = new FormData();

        formData.append("user_id", user_id);
        formData.append("filename", filename);
        await axios
          .post("http://localhost:8080/v1/api/animals/user", formData)
          .then(response => navigate("/Resultpage", { state: response.data }));
        // const res = await axios({
        //   method: "post",
        //   url: "http://localhost:8080/v1/api/animals/user",
        //   data: formData,
        // }).then(response => navigate("/Resultpage", { state: response.data }));
        // // 파일 업로드 성공
        // console.log(res);
        //navigate("/Resultpage", { state: response.data })
      } catch (e) {
        console.error(e);
        alert((e as { message: string }).message);
      }
    }
  };
  return (
    <div>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-72 h-72 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <img
            id="userImage"
            src={file || "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="}
            alt="userImage"
            className="absolute justify-center rounded-lg z-50 w-72 h-72"
          />
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            사진을 첨부하면 인공지능이 분석을 시작합니다.
          </p>
        </div>
        <form onSubmit={photoUpload}>
          <input id="dropzone-file" type="file" className="hidden" onChange={saveFileImage} />
        </form>
      </label>
      <div className="flex justify-center">
        <button
          className="mt-14 bg-green-500 p-4 pl-12 pr-12 rounded-3xl z-50"
          onClick={photoUpload}
        >
          인공지능 분석
        </button>
      </div>
    </div>
  );
}
const fileExtensionValid = ({ name }: { name: string }): boolean => {
  // 파일 확장자
  const extension = removeFileName(name);

  /**
   * 허용가능한 확장자가 있는지 확인하는 부분은 indexOf를 사용해도 괜찮고,
   * 새롭게 나온 includes를 사용해도 괜찮고, 그밖의 다른 방법을 사용해도 좋다.
   * 성능과 취향의 따라 사용하면 될것같다.
   *
   * indexOf의 경우
   * 허용가능한 확장자가 있을경우
   * ALLOW_FILE_EXTENSION 상수의 해당 확장자 첫 index 위치값을 반환
   */
  if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "") {
    // 해당 if문이 수행되는 조건은
    // 1. 허용하지 않은 확장자일경우
    // 2. 확장자가 없는경우이다.
    return false;
  }
  return true;
};
const removeFileName = (originalFileName: string): string => {
  // 마지막 .의 위치를 구한다
  // 마지막 .의 위치다음이 파일 확장자를 의미한다
  const lastIndex = originalFileName.lastIndexOf(".");

  // 파일 이름에서 .이 존재하지 않는 경우이다.
  // 이경우 파일 확장자가 존재하지 않는경우(?)를 의미한다.
  if (lastIndex < 0) {
    return "";
  }

  // substring을 함수를 이용해 확장자만 잘라준다
  // lastIndex의 값은 마지막 .의 위치이기 때문에 해당 위치 다음부터 끝까지 문자열을 잘라준다.
  // 문자열을 자른 후 소문자로 변경시켜 확장자 값을 반환 해준다.
  return originalFileName.substring(lastIndex + 1).toLowerCase();
};
export default Photouploadbox;
