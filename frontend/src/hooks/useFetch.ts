import { useState, useEffect } from "react";
import { getAllpins } from "../services/JsonServerClient";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const received_data = await getAllpins(); // Call the imported function to get json data
        setData(received_data);
      } catch (error: any) {
        alert(error.message);
      }
    }

    fetchData();
  }, []);

  return { data };
};

export default useFetch;
