import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import Header from './Pages/Common/Header'
import Footer from './Pages/Common/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import theme from "./Theme";
import { Grid } from "@material-ui/core";

function App() {
  return (
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container spacing={1}>
          <Grid zIndex={1}item xs={12} sm={12}>
          <Header />
          </Grid>
          <Grid item xs={12} sm={12}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home data-grid={{x: 1, y: 0, w: 6, h: 2}}/>
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
          </Switch>
          </Grid>
          <Grid item xs={12} sm={12}>
          <Footer />
          </Grid>
          </Grid>
        </ThemeProvider>
      </Router>
  );
}

export default App;
