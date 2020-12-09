import React, { useState, useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function Results(state) {
  const [howManyPutts, setHowManyPutts] = useState(
    state.history.location.state.numberOfThrows
  );
  const [howDidYouMiss, sethowDidYouMiss] = useState(
    state.history.location.state.howDidYouMiss
  );
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "90vh" }}
    >
      {" "}
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
    </Grid>
  );
}
