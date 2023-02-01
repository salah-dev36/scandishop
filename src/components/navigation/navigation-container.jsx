import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";

import { GET_CATEGORIES } from "../../graphql/queries";

import Navigation from "./navigation-comp";

export class NavigationContainer extends PureComponent {
  render() {
    return (
      <Query query={GET_CATEGORIES}>
        {({ data, loading }) => !loading && <Navigation {...data} />}
      </Query>
    );
  }
}

export default NavigationContainer;
