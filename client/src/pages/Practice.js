import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
export default function Practice(state) {
  const [distanceFromBasket, setDistanceFromBasket] = useState("10");
  const [numberOfThrows, setNumberOfThrows] = useState(
    state.history.location.state.howManyPutts
  );
  const [howDidYouMiss, setHowDidYouMiss] = useState({
    "10ft": {
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "15ft": {
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "20ft": {
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "25ft": {
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "30ft": {
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
  });

  console.log();

  return (
    <div>
      <p>How many puts do you want to make this round?</p>
      <TextField
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary">
        This Many
      </Button>
    </div>
  );
}
