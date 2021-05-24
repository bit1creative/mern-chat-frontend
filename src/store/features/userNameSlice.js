import { createSlice } from "@reduxjs/toolkit";

export const userNameHandler = createSlice({
  name: "username",
  initialState: {
    username: null,
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUserName } = userNameHandler.actions;

export default userNameHandler.reducer;
