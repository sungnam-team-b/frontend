import { combineReducers } from "@reduxjs/toolkit";
import theme from "@slices/theme";
import token from "@slices/token";

// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  theme,
  token,
});

// React에서 사용할 수 있도록 타입을 만들어 export 해준다.
export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
