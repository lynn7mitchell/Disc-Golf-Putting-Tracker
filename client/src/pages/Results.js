import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Typography, Grid, Button } from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
export default function Results(state) {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [howManyPutts, setHowManyPutts] = useState(
    state.history.location.state.numberOfThrows
  );
  const [howDidYouMiss, sethowDidYouMiss] = useState(
    state.history.location.state.howDidYouMiss
  );

  const [totalMade, setTotalMade] = useState(
    state.history.location.state.howDidYouMiss["10ft"].totalMade +
      state.history.location.state.howDidYouMiss["15ft"].totalMade +
      state.history.location.state.howDidYouMiss["20ft"].totalMade +
      state.history.location.state.howDidYouMiss["25ft"].totalMade +
      state.history.location.state.howDidYouMiss["30ft"].totalMade
  );

  useEffect(() => {
    // gets the bearer token to validate the user that is logged in
    const token = localStorage.getItem("example-app");

    if (token) {
      setAuthToken(token);
    }

    axios
      .get("/api/user")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.res.data);
      });
  }, []);

  const onClick = (e) => {
    const updatedUser = {
      totalMade,
      totalMissed: howManyPutts - totalMade,
      tenFt: {
        totalMade: state.history.location.state.howDidYouMiss["10ft"].totalMade,
        totalMissed:
          state.history.location.state.howDidYouMiss["10ft"].totalMissed,
      },
      fifteenFt: {
        totalMade: state.history.location.state.howDidYouMiss["15ft"].totalMade,
        totalMissed:
          state.history.location.state.howDidYouMiss["15ft"].totalMissed,
      },
      twentyFt: {
        totalMade: state.history.location.state.howDidYouMiss["20ft"].totalMade,
        totalMissed:
          state.history.location.state.howDidYouMiss["20ft"].totalMissed,
      },
      twentyFiveFt: {
        totalMade: state.history.location.state.howDidYouMiss["25ft"].totalMade,
        totalMissed:
          state.history.location.state.howDidYouMiss["25ft"].totalMissed,
      },
      thirtyFt: {
        totalMade: state.history.location.state.howDidYouMiss["30ft"].totalMade,
        totalMissed:
          state.history.location.state.howDidYouMiss["30ft"].totalMissed,
      },
    };

    axios
      .put("/api/user/practiceRounds", updatedUser)
      .then(setRedirect(true))
      .catch((err) => {
        console.error(err.response.data);
      });
  };
  if (redirect) {
    return <Redirect to="/dashboard" />;
  }  
  if (loading) {
    return (
      <Typography variant="h2" align="center">
        Loading...
      </Typography>
    );
  }
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "90vh" }}
    >
      <Typography variant="h4">Number of putts {howManyPutts}</Typography>
      <Grid item>
        <Typography variant="h6">
          10ft : {howDidYouMiss["10ft"].totalMade} / {howManyPutts / 5}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          15ft : {howDidYouMiss["15ft"].totalMade} / {howManyPutts / 5}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          20ft : {howDidYouMiss["20ft"].totalMade} / {howManyPutts / 5}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          25ft : {howDidYouMiss["25ft"].totalMade} / {howManyPutts / 5}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          30ft : {howDidYouMiss["30ft"].totalMade} / {howManyPutts / 5}
        </Typography>
      </Grid>
      <Grid item>
        <Button
        style={{marginTop: '10px'}}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          onClick={(e) => {
            onClick(e);
          }}
        >
          Save Round
        </Button>

        <Button
        style={{marginTop: '10px'}}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          onClick={(e)=>setRedirect(true)}
        >
          Don't Save
        </Button>
      </Grid>
    </Grid>
  );
}
