import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/home");
    } else {
      alert("Enter Email and Password");
    }
  };

  return (
    <div className="login-container">
      <div className="box">
        <h1>Credit Score Tracker</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;