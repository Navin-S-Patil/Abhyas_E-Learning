import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  async function registerHandler() {
    const { username, email, password, reEnterPassword } = user;
    // if (name && email && password && (password === reEnterPassword)) {
    //   axios.post("http://localhost:9002/register", user).then((res) => {
    //     alert(res.data.message);
    //     navigate("/login");
    //   });
    // } else {
    //   alert("Invalid input");
    // }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== reEnterPassword) {
      setUser({ ...user, password: "", reEnterPassword: "" });
      setTimeout(()=>{
        setError("")
      },5000);
      return setError("Passwords do not match");
    }

    try {
      const {data} = await axios.post("/api/auth/register", {username,email,password},config);

      // localStorage.setItem("authToken",data.token);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(()=>{
        setError("");
      },5000);
      
    }

  }

  return (
    <div className="right">
    <h2>Register</h2>
    <br />
    
      <input
        name="username"
        type="text"
        onChange={handleChange}
        placeholder="Name"
        value={user.username}
      />
      <input
        name="email"
        type="email"
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
      <input
        name="reEnterPassword"
        type="password"
        onChange={handleChange}
        placeholder="Confirm Password"
        value={user.reEnterPassword}
      />
      {error && <span>{error}</span>} 
      <button onClick={registerHandler} type="submit" className="submit cursor">
        Register
      </button>

      <Link to="/login/register" className="cursor">
            Already Registered, Click Here
          </Link>
    </div>
  );
}

export default Register;
