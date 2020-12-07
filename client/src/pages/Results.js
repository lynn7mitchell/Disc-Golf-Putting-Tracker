import React, { useState, useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";

export default function Results(state) {
    const [howManyPutts, setHowManyPutts] = useState(state.history.location.state.numberOfThrows)
    const [howDidYouMiss, sethowDidYouMiss] = useState(state.history.location.state.howDidYouMiss)
    return (
        <div>
        <Typography variant="h2">Number of putts {howManyPutts}</Typography>
        <Grid container>
            <Grid item>
                10ft : {howDidYouMiss['10ft'].totalMade} / {howManyPutts / 5}
            </Grid>
            <Grid item>
                15ft :{howDidYouMiss['15ft'].totalMade} / {howManyPutts / 5}
            </Grid>
            <Grid item>
                20ft :{howDidYouMiss['20ft'].totalMade} / {howManyPutts / 5}
            </Grid>
            <Grid item>
                25ft :{howDidYouMiss['25ft'].totalMade} / {howManyPutts / 5}
            </Grid>
            <Grid item>
                30ft :{howDidYouMiss['30ft'].totalMade} / {howManyPutts / 5}
            </Grid>
        </Grid>
        </div>
    )
}
