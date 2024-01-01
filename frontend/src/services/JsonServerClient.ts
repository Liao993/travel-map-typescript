import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllpins = createAsyncThunk("pin/getallAsync", async () => {
  try {
    const response = await fetch("http://localhost:5000/pin");
    const pin = await response.json();

    return pin;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
