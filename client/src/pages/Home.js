import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
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
    <Grid container direction="column" justify="center" alignItems="center" wrap='nowrap'  style={{height: '90vh', overflow: 'hidden'}} >
      <Grid item>
        <Typography variant="h3" align="center">
          Putting Tracker
        </Typography>
      </Grid>
      <Grid item>{loginOrSignup === "Login" ? <Login /> : <SignUp />}</Grid>
      <Grid item>
        <Typography
          style={{ marginTop: "20px" }}
          align="center"
          onClick={(e) => {
            changeForm(e);
          }}
        >
          {loginOrSignupQuestion}
        </Typography>

        <Typography  style={{ marginTop: "20px" }}
          align="left">
          Email: demotest@gmail.com <br/>
          Password: DemoTest#1
          </Typography>
      </Grid>
    </Grid>
  );
}
