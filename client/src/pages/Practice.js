import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";
export default function Practice(state) {
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('')
  const [distanceFromBasket, setDistanceFromBasket] = useState("10");
  const [totalMadeForTheRound, setTotalMadeForTheRound] = useState(0);
  const [numberOfThrows, setNumberOfThrows] = useState(
    state.history.location.state.howManyPutts
  );
  const [howDidYouMiss, setHowDidYouMiss] = useState({
    "10ft": {
      totalMade: 0,
      totalMissed: state.history.location.state.howManyPutts / 5,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "15ft": {
      totalMade: 0,
      totalMissed: state.history.location.state.howManyPutts / 5,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "20ft": {
      totalMade: 0,
      totalMissed: state.history.location.state.howManyPutts / 5,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "25ft": {
      totalMade: 0,
      totalMissed: state.history.location.state.howManyPutts / 5,
      airBall: 0,
      hitTheCage: 0,
      hitTheBand: 0,
    },
    "30ft": {
      totalMade: 0,
      totalMissed: state.history.location.state.howManyPutts / 5,
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
    if(document.getElementById("howManyMade").value > state.history.location.state.howManyPutts / 5){
      setError("The amount you typed in needs to be less than the number of throws")
      return(console.log(error))
    }else if(document.getElementById("howManyMade").value < 0){
      setError("The amount you typed in needs to be more than 0")
      return(console.log(error))
    }
   setError('')
    if (parseInt(distanceFromBasket) !== 30) {
      setDistanceFromBasket(parseInt(distanceFromBasket) + 5);
      document.getElementById("howManyMade").value = 0;
    } else {
      setRedirect(true);
    }
  };
  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/results",
          state: { numberOfThrows, howDidYouMiss, totalMadeForTheRound },
        }}
      />
    );
  } else {
    return (
      <div>
        <Link to={"/dashboard"}>
          <i className="material-icons">keyboard_backspace</i>
        </Link>
        <Grid container direction="column" justify="center" alignItems="center" style={{ height: "90vh" }}>
          <Grid item>
            <Typography variant="h2">{distanceFromBasket}ft</Typography>
          </Grid>
          <Grid item>
            <Typography>{error}</Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            className="form-field-container"
          >
            <input
              variant = 'standard'
              size = 'large'
              margin="dense"
              id="howManyMade"
              placeholder = '0'
              name={distanceFromBasket}
              type="number"
              onChange={(e) => onChange(e)}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: parseInt(numberOfThrows) / 5,
                  step: 1,
                },
              }}
            />
            <Typography variant="h3" >
              / 
            </Typography>
            <Typography variant="h3" style={{ marginLeft: "20px" }}>
               {parseInt(numberOfThrows) / 5}
            </Typography>
          </Grid>
          <Grid item className="form-field-container form-field">
            <Button
              fullWidth
              onClick={(e) => onClick(e)}
              variant="contained"
              color="primary"
            >
              {distanceFromBasket == 30 ? "Finished" : "Next"}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
