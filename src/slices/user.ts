import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Theme {
  color: string;
}

// slice 안에 들어갈 내용들은 매우 심플하고 직관적이다.
// name, initialState, reducers.
export const user = createSlice({
  name: "user",
  initialState: { value: "비회원" }, // 필수로 타입 지정 안해도 되지만, 확실히 하기로 한다.
  reducers: {
    getUser(state, action) {
      state.value = action.payload;
    },
  },
});

// 액션과 리듀서를 export 해준다. 이건 그냥 따라하면 된다.
export const { getUser } = user.actions;
export default user.reducer;
