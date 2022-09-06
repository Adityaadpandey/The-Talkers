/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./Login.css";
import Typewriter from "typewriter-effect";

const Login = () => {
  const Id = "admin";
  const Password = "admin";
  const submit = () => {
    let id = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (id === Id && password === Password) {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <>
      <section class="login" id="login">
        <div class="head">
          <h1 class="company">
            <Typewriter
              onInit={(Typewriter) => {
                Typewriter.typeString("The Talkers").pauseFor(1000).start();
              }}
            />
          </h1>
        </div>
        <p class="msg">Welcome back</p>
        <div class="form">
          <form>
            <input
              type="text"
              placeholder="Username"
              class="text"
              id="username"
              required
            />
            <input
              type="password"
              placeholder="••••••••••••••"
              class="password"
              id="password"
            />
            <button onClick={submit} type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
