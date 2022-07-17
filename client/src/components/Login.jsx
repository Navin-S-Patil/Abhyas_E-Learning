import React, { useState, useEffect } from "react";
import "./login.css";

import Google from "./img/google.png";
import Facebook from "./img/facebook.png";
import Github from "./img/github.png";
// import jwt from "jsonwebtoken";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ history }) {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async () => {
    const { email, password } = user;
    // axios.post("http://localhost:9002/login", user).then((res) => {
    //   alert(res.data.message);
    //   props.user(res.data.user);
    //   navigate("/");
    // });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };


    try {
      const { data } = await axios.post("/api/auth/login", { email, password }, config);
      // console.log(data)

      localStorage.setItem("authToken", data.token);
      navigate("/");
      window.location.reload();
    } catch (error) {
      // console.log(error.response.data.error);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);

    }

  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Username"
            value={user.email}
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={user.password}
          />
          {error && <span>{error}</span>}
          <button onClick={loginHandler} type="submit" className="submit cursor">
            Login
          </button>
          <Link to="/login/forgetpassword">Forget Password</Link>
          <Link to="/login/register" className="cursor">
            If not Register, Click Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
