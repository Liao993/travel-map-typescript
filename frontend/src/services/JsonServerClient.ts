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
/*
export const addData = createAsyncThunk(
  "pin/createpinAsync",
  async (data: Pin) => {
    const response = await fetch("http://localhost:5000/pin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const pin = await response.json();
      console.log("pin", pin);
      return { pin };
    }
  }
);
*/

export const addData = createAsyncThunk(
  "pin/createpinAsync",
  async (data: Pin, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // If the response status is not okay, reject with the error message
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const pin = await response.json();
      console.log("pin", pin);
      return { pin };
    } catch (error) {
      // Handle other errors, such as network issues
      return rejectWithValue({ error: "Something went wrong." });
    }
  }
);
