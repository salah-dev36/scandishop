import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./routes/header/header-comp";
import { default as Category } from "./routes/category/category-container";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/:category"
            render={(props) => <Category {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
