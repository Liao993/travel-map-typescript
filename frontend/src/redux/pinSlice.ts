import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getAllpins, addData } from "../services/JsonServerClient";

import { Pin } from "../shared/types";

export interface PinState {
  pins: Pin[];
}
const initialState: PinState = {
  pins: [],
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
      .addCase(getAllpins.fulfilled, (state, action) => {
        state.pins = action.payload;
      })
      .addCase(getAllpins.rejected, (state) => {
        state.pins = [];
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.pins.push(action.payload);
      });
  },
});

export default pinSlice.reducer;

/*
  addPerson: (state, action: PayloadAction<Pin>) => {
      state.pins.push({
        username: action.payload.username,
        title: action.payload.title,
        desc: action.payload.desc,
        rating: action.payload.rating,
        lat: action.payload.lat,
        long: action.payload.long,
      });
    },
*/
