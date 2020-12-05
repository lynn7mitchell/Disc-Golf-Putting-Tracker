import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Home() {
  const [loginOrSignup, setLoginOrSignup] = useState("Login");

  const loginOrSignupQuestion =
    loginOrSignup === "Login"
      ? "Don't have an account? Click here to Sign Up!"
      : "Already have an account? Click here to Log In!";

  const changeForm = (e) => {
    loginOrSignup === "Login"
      ? setLoginOrSignup("SignUp")
      : setLoginOrSignup("Login");
  };
  return (
    <div>
      <Typography variant="h3" align="center">
        Putting Tracker
      </Typography>

      {loginOrSignup === "Login" ? <Login /> : <SignUp />}

      <Typography
        align="center"
        onClick={(e) => {
          changeForm(e);
        }}
      >
        {loginOrSignupQuestion}
      </Typography>
    </div>
  );
}
