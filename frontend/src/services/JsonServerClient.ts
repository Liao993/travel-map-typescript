import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pin } from "../shared/types";

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

export const addData = createAsyncThunk(
  "pin/createpinAsync",
  async (data: Pin) => {
    console.log("data", data);
    const response = await fetch("http://localhost:5000/pin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const pin = await response.json();

      return { pin };
    }
  }
);
