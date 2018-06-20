/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { MysteryGamePage } from "./Pages/MysteryGamePage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={MysteryGamePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
