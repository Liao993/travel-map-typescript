import { useState, useEffect } from "react";
import { getAllpins } from "../services/JsonServerClient";
import { Pin } from "../shared/types";

const useFetch = () => {
  const [data, setData] = useState<Pin[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const received_data = await getAllpins(); // Call the imported function to get json data
        setData(received_data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        alert(error.message);
        throw error;
      }
    }

    fetchData();
  }, []);

  return { data };
};

export default useFetch;
