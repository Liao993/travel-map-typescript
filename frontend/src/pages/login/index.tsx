import { HiMiniMapPin } from "react-icons/hi2";
//import { useRef } from "react";

//mport { useAppDispatch } from "../../redux/store";
//import { newRegister } from "../../services/UserJsonServerClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const input_style = "border-2 text-center py-1 rounded-md";

  //const dispatch = useAppDispatch();

  const navigate = useNavigate();
  //handle buttom
  function handleLogin(e: any) {
    navigate("/maps");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col justify-center items-center gap-4 w-[350px] h-[350px] bg-orange-300 shadow-md rounded-lg"
      >
        <div className="flex flex-row gap-4">
          <HiMiniMapPin size={20} style={{ color: "purple" }} />
          <h1 className="text-purple-700 text-lg">Pin-U-Travel</h1>
        </div>
        <span>Design your Personalized Traveling </span>
        <input className={input_style} type="text" placeholder="username" />

        <input className={input_style} type="password" placeholder="password" />
        <button className="px-4 py-1 rounded-lg bg-purple-100">Log In</button>
      </form>
    </div>
  );
};

export default Login;
