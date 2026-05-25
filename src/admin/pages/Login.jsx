import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email === "admin@gmail.com" && password === "12345") {

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials");

    }
  };

  return (

    <div className="h-screen flex items-center justify-center bg-blue-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-5"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>

  );
};

export default Login;