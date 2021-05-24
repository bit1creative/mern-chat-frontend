import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./features/userNameSlice";

export default configureStore({
  reducer: {
    username: userNameReducer,
  },
});
