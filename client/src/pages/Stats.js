import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, Card, CardContent } from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
var dayjs = require("dayjs");

export default function Stats() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
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
  let now = dayjs();

  console.log(user.practiceRounds);
  if (loading) {
    return (
      <Typography variant="h2" align="center">
        Loading...
      </Typography>
    );
  }
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <Link to={"/dashboard"}>
        <i className="material-icons">keyboard_backspace</i>
      </Link>
      <Grid container direction="column" justify="center" alignItems="center" style={{margin: '10vh 0'}}>
        <Grid item>
          <Typography variant="h4">Your Stats</Typography>
        </Grid>

        {user.practiceRounds.map((practiceRound) => {
          let date = dayjs(practiceRound.date, "YYYY-MM-DD+h:mm").format(
            "MMM DD YYYY"
          );
          console.log(date);
          return (
            <Grid item>
              <Card className="stats-card">
                <CardContent>
                  <Typography variant="h5" color="primary">
                    {date}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    10ft: {practiceRound.tenFt.totalMade} /{" "}
                    {parseInt(practiceRound.tenFt.totalMade) +
                      parseInt(practiceRound.tenFt.totalMissed)}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    25ft: {practiceRound.fifteenFt.totalMade} /{" "}
                    {parseInt(practiceRound.fifteenFt.totalMade) +
                      parseInt(practiceRound.fifteenFt.totalMissed)}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    15ft: {practiceRound.twentyFt.totalMade} /{" "}
                    {parseInt(practiceRound.twentyFt.totalMade) +
                      parseInt(practiceRound.twentyFt.totalMissed)}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    20ft: {practiceRound.twentyFiveFt.totalMade} /{" "}
                    {parseInt(practiceRound.twentyFiveFt.totalMade) +
                      parseInt(practiceRound.twentyFiveFt.totalMissed)}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    30ft: {practiceRound.thirtyFt.totalMade} /{" "}
                    {parseInt(practiceRound.thirtyFt.totalMade) +
                      parseInt(practiceRound.thirtyFt.totalMissed)}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Total: {practiceRound.totalMade} /{" "}
                    {parseInt(practiceRound.totalMade) +
                      parseInt(practiceRound.totalMissed)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
