import "./login.css";
import React, { useState } from "react";

const LoginArea = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result?.data?.email || "email not present");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="loginarea">
        <div className="loginDiv">
          <input
            type="radio"
            id="loginForm"
            name="formToggle"
            defaultChecked
          ></input>

          <input
            type="radio"
            id="registerForm"
            name="formToggle"
            defaultValue=""
          ></input>

          <input
            type="radio"
            id="forgotForm"
            name="formToggle"
            defaultValue=""
          ></input>

          <div className="wrapper" id="loginFormContent">
            <form action="" onSubmit={handleSubmit}>
              <h1>Login</h1>

              <div className="input-box">
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="checkbox1">
                <label>
                  <input id="rememberme" type="checkbox"></input>Remember Me
                </label>

                <label htmlFor="forgotForm">Forgot Password</label>
              </div>

              <button type="submit" className="btn">
                Login
              </button>

              <div className="link">
                <p>
                  Don't have an account?{" "}
                  <label htmlFor="registerForm">Register</label>
                </p>
              </div>
            </form>
          </div>

          <div className="wrapper" id="registerFormContent">
            <form action="" onSubmit={handleSubmit}>
              <h1>Register</h1>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="checkbox1">
                <input type="checkbox" required></input>
                <label>I agree to terms & conditions</label>
              </div>

              <button type="submit" className="btn">
                Register
              </button>

              <div className="link">
                <p>
                  Already have an account?{" "}
                  <label htmlFor="loginForm">Login</label>
                </p>
              </div>
            </form>
          </div>

          <div className="wrapper" id="forgotFormContent">
            <form action="" onSubmit={handleSubmit}>
              <h1>Reset your password</h1>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                ></input>
              </div>

              <div className="input-box">
                <button type="submit" className="btn">
                  Send Request
                </button>

                <div className="link">
                  <p>
                    Don't have an account?{" "}
                    <label htmlFor="registerForm">Register</label>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginArea };
