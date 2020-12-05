import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import authenticate from "../utils/Authenticate";
import setAuthToken from "../utils/setAuthtoken";
import { Typography, Grid, TextField, Button } from "@material-ui/core";

export default function Login() {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // gets the bearer token to validate the user that is logged in
    const token = localStorage.getItem("example-app");

    // if token is authenticated redirect page to /dashboard
    if (authenticate(token)) {
      setRedirect(true);
    }
  }, []);

  // for for field change
  const onChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, hasChanged: true, [name]: value });
  };

  // Form Submit
  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: formData.email,
      password: formData.password
    };
    axios
      .post("/api/user/login", newUser)
      .then((res) => {
        if (res.data.token) {
          const { token } = res.data;

          localStorage.setItem("example-app", token);
          setAuthToken(token);
        }
        console.log('here')
        setRedirect(true);
        setErrors(errors);
      })
      .catch((err) => {
        console.error(err.response.data,);
        setErrors(err.response.data,);
      });
  };

  // When the user is logged in redirect is set to true in state. 
  // Then the page redirects to dashboard
  if (redirect) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
    <form onSubmit={(e) => onSubmit(e)}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <Grid container direction="column" justify="center" alignItems="center">
        {errors.user ? <p>{errors.user}</p> : ''}
        {errors.password ? <p>{errors.password}</p> : ''}
          <Grid item>
            <TextField
              required
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => onChange(e)}
              InputProps={{ style: { color: "#fefefe" } }}
            />
          </Grid>

          <Grid item>
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => onChange(e)}
            />
          </Grid>

          <Grid item>
            <Button
              type="submit"
              name="action"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
