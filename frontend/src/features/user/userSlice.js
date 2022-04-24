import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  // photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      console.log("setUserLoginDetails: "+action.payload.name)
      state.name = action.payload.name;
      state.email = action.payload.email;
      // state.photo = action.payload.photo;
      state.reservations = action.payload.reservations;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectUserReservations = (state) => state.user.reservations;

export default userSlice.reducer;
