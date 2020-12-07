import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import PrivateRoute from "./utils/PrivateRoute";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Practice from "./pages/Practice";
import Stats from "./pages/Stats";
import Results from './pages/Results'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/practice" component={Practice} />
          <PrivateRoute exact path="/results" component={Results} />
          <PrivateRoute exact path="/stats" component={Stats} />
          {/* 404 page */}
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
