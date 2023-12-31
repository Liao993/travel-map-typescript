import Maps from "./Maps";

import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { data } = useFetch();

  console.log(data);
  return <Maps />;
};

export default Home;
