import { createSlice } from "@reduxjs/toolkit";

import { newRegister } from "../services/UserJsonServerClient";

import { User } from "../shared/types";

export interface UserState {
  users: User[];
}
const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newRegister.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
  },
});

export default userSlice.reducer;

/*
    .addCase(getAllpins.pending, () => {
        console.log("fetching data now");
      })
      .addCase(getAllpins.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getAllpins.rejected, (state) => {
        state.users = [];
      })
 */
