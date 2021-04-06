import React, { Component } from "react";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
class App extends Component {
  render() {

    return (
      <div className="App">

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
