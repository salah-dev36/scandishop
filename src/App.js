import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner-comp";

import Header from "./routes/header/header-comp";
const Category = React.lazy(() =>
  import("./routes/category/category-container")
);
const ProductPage = React.lazy(() =>
  import("./routes/product-page/product-page-container")
);
const Cart = React.lazy(() => import("./routes/cart/cart-container"));

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/cart" component={Cart} />
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
        </Suspense>
      </>
    );
  }
}

export default App;
