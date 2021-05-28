import { createSlice } from "@reduxjs/toolkit";

export const showContactsSlice = createSlice({
  name: "showContacts",
  initialState: {
    showContacts: false,
  },
  reducers: {
    triggerContacts: (state) => {
      state.showContacts = !state.showContacts;
    },
  },
});

export const { triggerContacts } = showContactsSlice.actions;

export default showContactsSlice.reducer;
