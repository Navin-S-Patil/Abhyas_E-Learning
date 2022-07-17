import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ResetPassword({ match }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${match.params.resetToken}`,
        { password },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      console.log(error);
      // setError(error.response.data.error);
      // setTimeout(() => {
      //   setError("");
      // }, 5000);
    }
  };

  return (
    <div>
      <h1 className="center">Reset Password</h1>
      <br />
      <form onSubmit={resetPasswordHandler}>
        <div className="center column">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="New Password"
            value={password}
          />
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
          />
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success} <Link to="/login">Login</Link></p>}
          <button type="submit" className="submit cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
