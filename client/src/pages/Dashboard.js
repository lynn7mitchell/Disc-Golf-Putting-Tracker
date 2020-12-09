import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import setAuthToken from "../utils/setAuthtoken";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    howManyPutts: 5,
  });
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
        setRedirect(true);
      });
  }, []);

  // Logout
  const handleLogout = (e) => {
    localStorage.removeItem("example-app");
    setRedirect(true);
  };

  // Dialog Functions
  const handleOpenDialog = (e) => {
    setDialogOpen(true);
  };

  const handleCloseDialog = (e) => {
    setDialogOpen(false);
  };

  // for for field change
  const onChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, hasChanged: true, [name]: value });
  };

  // if user is not logged in they will be redirected to the homepage
  if (redirect) {
    return <Redirect to="/" />;
  }
  if (loading) {
    return (
      <Typography variant="h2" align="center">
        Loading...
      </Typography>
    );
  }
  return (
    <Grid container direction="column" justify="center" alignItems="center" style={{height: '90vh'}}>

      <Typography variant="h4" align="center">
        Welcome {user.firstName + " " + user.lastName}
      </Typography>

      <Grid item className="button-width">
        <Button
        fullWidth
          onClick={(e) => handleOpenDialog(e)}
          variant="contained"
          color="primary"
        >
          Start Round
        </Button>
      </Grid>

      <Grid item className="button-width">
        <Link to="/stats">
          <Button fullWidth variant="contained" color="primary">
            My Stats
          </Button>
        </Link>
      </Grid>
      <Grid item className="button-width">
        <Button
        fullWidth
          onClick={(e) => handleLogout(e)}
          variant="contained"
          color="primary"
          
        >
          Log Out
        </Button>
      </Grid>

      <Dialog
        open={dialogOpen}
        onClose={(e) => handleCloseDialog(e)}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            How many total putts do you want to attempt?
          </DialogContentText>
          <DialogContentText>Must be a multiple of 5.</DialogContentText>
          <TextField
            variant="outlined"
            label="How many?"
            margin="dense"
            id="howManyPutts"
            name="howManyPutts"
            type="number"
            onChange={(e) => onChange(e)}
            InputProps={{ inputProps: { min: 5, step: 5 } }}
          />
          <Link
            to={{
              pathname: "/practice",
              state: { howManyPutts: formData.howManyPutts },
            }}
          >
            <Button variant="contained" color="primary">
              Start
            </Button>
          </Link>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
