import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
export default function Practice(state) {
  const [redirect, setRedirect] = useState(false);
  const [distanceFromBasket, setDistanceFromBasket] = useState("10");
  const [numberOfThrows, setNumberOfThrows] = useState(
    state.history.location.state.howManyPutts
  );
  const [howDidYouMiss, setHowDidYouMiss] = useState({
    "10ft": {
      totalMade: 0,
      totalMissed: 0,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "15ft": {
      totalMade: 0,
      totalMissed: 0,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "20ft": {
      totalMade: 0,
      totalMissed: 0,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "25ft": {
      totalMade: 0,
      totalMissed: 0,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "30ft": {
      totalMade: 0,
      totalMissed: 0,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
  });
  // for for field change
  const onChange = ({ target: { name, value } }) => {
    const currentDistanceFromBasket = name.toString() + "ft";
    setHowDidYouMiss({
      ...howDidYouMiss,
      hasChanged: true,
      [currentDistanceFromBasket]: {
        ...howDidYouMiss[currentDistanceFromBasket],
        totalMissed: numberOfThrows / 5 - value,
        totalMade: parseInt(value),
      },
    });
  };

  const onClick = (e) => {
    if (parseInt(distanceFromBasket) !== 30) {
      setDistanceFromBasket(parseInt(distanceFromBasket) + 5);
      document.getElementById("howManyMade").value = 0;
    } else {
      setRedirect(true)
    }
  };
  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/results",
          state: { numberOfThrows, howDidYouMiss },
        }}
      />
    );
  } else {
    return (
      <div>
        <Typography variant="h2">{distanceFromBasket}ft</Typography>
        <TextField
          variant="outlined"
          label="How many?"
          margin="dense"
          id="howManyMade"
          name={distanceFromBasket}
          type="number"
          onChange={(e) => onChange(e)}
          InputProps={{
            inputProps: { min: 0, max: parseInt(numberOfThrows) / 5, step: 1 },
          }}
        />
        <Typography variant="h3"> / {parseInt(numberOfThrows) / 5}</Typography>

        <Button onClick={(e) => onClick(e)} variant="contained" color="primary">
          {distanceFromBasket == 30 ? "Finished" : "Next"}
        </Button>
      </div>
    );
  }
}
