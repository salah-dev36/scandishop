import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { default as Header } from "./routes/header/header-container";
import { default as Category } from "./routes/category/category-container";
import { default as ProductPage } from "./routes/product-page/product-page-container";

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
          <Route
            exact
            path="/:category/:productId"
            render={(props) => <ProductPage {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
