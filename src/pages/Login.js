import React, { useState } from "react";
import { fetchData } from "../services/clients.js";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const data = await fetchData("POST", "/login-user", {
      username,
      password,
    });

    if (!data) {
      console.log("error login");
    }

    console.log(data);
    localStorage.setItem("accessToken", data.data.accessToken);

    if (data.statusCode === 200) {
      navigate("/");
    }
  };

  return (
    <div className=" flex w-full h-screen text-center justify-center bg-[#0F172A]">
      <div className="w-[50%] my-auto p-16 rounded-xl">
        <div>
          <h1 className="text-2xl text-white font-bold mb-5">Login</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md mb-2"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full py-2 px-3 rounded-md mb-5"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
          <button
            className="bg-sky-700 w-full py-2 px-3 rounded-md text-white texl-2xl"
            onClick={loginUser}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
