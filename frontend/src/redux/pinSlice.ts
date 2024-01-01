import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../redux/store";

import { getAllpins } from "../services/JsonServerClient";

import { Pin } from "../shared/types";

export interface PinState {
  pin: Pin[];
}
const initialState: PinState = {
  pin: [],
};

const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllpins.pending, () => {
        console.log("fetching data now");
      })
      .addCase(getAllpins.fulfilled, (state, action: PayloadAction<Pin[]>) => {
        state.pin = action.payload;
      })
      .addCase(getAllpins.rejected, (state) => {
        state.pin = [];
      });
  },
});

export const userSelector = (state: RootState) => state.pinReducer;
export default pinSlice.reducer;
