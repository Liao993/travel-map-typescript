import { HiMiniMapPin } from "react-icons/hi2";
import { useRef } from "react";

import { useAppDispatch } from "../../redux/store";
import { newRegister } from "../../services/UserJsonServerClient";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const input_style = "border-2 text-center py-1 rounded-md";

  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  //handle buttom
  function handleRegister(e: any) {
    e.preventDefault();
    const newUser = {
      username: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    dispatch(newRegister(newUser));
    navigate("/maps");

    console.log("Successful Register");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleRegister}
        className="flex flex-col justify-center items-center gap-4 w-[350px] h-[350px] bg-orange-300 shadow-md rounded-lg"
      >
        <div className="flex flex-row gap-4">
          <HiMiniMapPin size={20} style={{ color: "purple" }} />
          <h1 className="text-purple-700 text-lg">Pin-U-Travel</h1>
        </div>
        <span>Design your Personalized Traveling </span>
        <input
          className={input_style}
          type="text"
          placeholder="username"
          ref={nameRef}
        />
        <input
          className={input_style}
          type="email"
          placeholder="email"
          ref={emailRef}
        />
        <input
          className={input_style}
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <button className="px-4 py-1 rounded-lg bg-purple-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
