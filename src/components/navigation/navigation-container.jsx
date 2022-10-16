import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CATEGORIES } from "../../graphql/queries";

import Navigation from "./navigation-comp";



export class NavigationContainer extends Component {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {({ data, loading }) =>
          !loading && <Navigation categories={data.categories} />
        }
      </Query>
    );
  }
}

export default NavigationContainer;
