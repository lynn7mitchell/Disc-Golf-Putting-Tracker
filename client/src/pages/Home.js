import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, TextField} from '@material-ui/core'
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <h1>MERN TEMPLATE</h1>
        <Link to={"/login"}><button>Log In</button></Link>
        <Link to={"/signup"}><button> Sign Up</button></Link>
        <p>Demo Login:</p>
        <p>Email: test@gmail.com</p>
        <p>Password: test</p> */}

        <Typography variant="h3" align='center'>Putting Tracker</Typography>
        <form style={{width: '100%'}}>
        <Typography variant="h5" align='center'>Login</Typography>

        <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        >
        <Grid item>
        <TextField required name="email" id="standard-basic" label="Standard" label="Email" type="email" />
        </Grid>

        <Grid item>
        <TextField required name="password" id="standard-basic" label="Standard" label="Password" type="password" />
        </Grid>
        </Grid>
        </form>
      </div>
    );
  }
}

export default Home;
