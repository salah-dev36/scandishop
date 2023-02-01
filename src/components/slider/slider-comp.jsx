import React, { PureComponent } from "react";
import {
  Container,
  LeftArrowBox,
  ProductImage,
  RightArrowBox,
} from "./slider-styles";

import { ReactComponent as RightArrow } from "../../assets/arrow-head-right.svg";
import { ReactComponent as LeftArrow } from "../../assets/arrow-head-left.svg";

export class Slider extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }

  goToPrevious = () => {
    const { currentIndex } = this.state;
    const { imagesUrl } = this.props;
    currentIndex === 0
      ? this.setState({ currentIndex: imagesUrl.length - 1 })
      : this.setState({ currentIndex: currentIndex - 1 });
  };

  goToNext = () => {
    const { currentIndex } = this.state;
    const { imagesUrl } = this.props;
    currentIndex === imagesUrl.length - 1
      ? this.setState({ currentIndex: 0 })
      : this.setState({ currentIndex: currentIndex + 1 });
  };

  renderArrows = () => {
    const { imagesUrl } = this.props;
    if (imagesUrl.length > 1) {
      return (
        <>
          <RightArrowBox onClick={this.goToNext}>
            <RightArrow />{" "}
          </RightArrowBox>
          <LeftArrowBox onClick={this.goToPrevious}>
            <LeftArrow />{" "}
          </LeftArrowBox>
        </>
      );
    }
  };

  render() {
    const { imagesUrl } = this.props;
    return (
      <Container>
        <ProductImage src={imagesUrl[this.state.currentIndex]} />
        {this.renderArrows()}
      </Container>
    );
  }
}

export default Slider;
