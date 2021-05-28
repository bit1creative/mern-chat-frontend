import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "./features/userNameSlice";
import showContactsReducer from "./features/showContactsSlice";

export default configureStore({
  reducer: {
    username: userNameReducer,
    showContacts: showContactsReducer,
  },
});
