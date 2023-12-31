import axios from "axios";

export async function getAllpins() {
  try {
    const response = await axios.get("http://localhost:5000/pins");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
