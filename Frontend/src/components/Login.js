import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Enter Correct Details");
    }
  };

  return (
    <div className="centerContainer">
      <div className="login">
        <h1>Login</h1>
        <input
          onChange={(e) => setemail(e.target.value)}
          value={email}
          className="inputBox"
          type="text"
          placeholder="Enter Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="inputBox"
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={handleLogin} className="appButton" type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
