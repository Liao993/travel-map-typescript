//import axios from "axios";
import { Pin } from "../shared/types";

export async function getAllpins(): Promise<Pin[]> {
  try {
    const response = await fetch("http://localhost:5000/pin");
    const json: Pin[] = await response.json();

    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
