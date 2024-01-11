import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../shared/types";

export const newRegister = createAsyncThunk(
  "pin/createpinAsync",
  async (data: User, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
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

      const newUser = await response.json();
      console.log("new User", newUser);
      return { msg: "suceesfully register" };
    } catch (error) {
      // Handle other errors, such as network issues
      return rejectWithValue({ error: "Something went wrong." });
    }
  }
);
