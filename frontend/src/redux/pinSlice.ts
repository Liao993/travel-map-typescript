import { createSlice } from "@reduxjs/toolkit";

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

//export const { addNewPin } = pinSlice.actions;
//export const userSelector = (state: RootState) => state.pinReducer;
export default pinSlice.reducer;

/*
  addNewPin: (state, action: PayloadAction<Pin>) => {
      state.pins.push({
        title: action.payload.title,
        lat: action.payload.lat,
        long: action.payload.long,
      });
    },

const test: Pin = {
  username: "Sindy",
  title: "good",
  rating: Number("5"),
  description: "good job",
  lat: 46,
  long: 23,
};


*/
