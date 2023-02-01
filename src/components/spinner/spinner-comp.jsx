import React, { PureComponent } from "react";

import { SpinnerContainer, SpinnerOverlay } from "./spinner-styles";

export class Spinner extends PureComponent {
  render() {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  }
}

export default Spinner;
