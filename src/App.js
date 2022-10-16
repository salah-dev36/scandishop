import React, { Component } from "react";

import Header from "./routes/header/header-comp";
import { default as Category } from "./routes/category/category-container";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Category />
      </>
    );
  }
}

export default App;
