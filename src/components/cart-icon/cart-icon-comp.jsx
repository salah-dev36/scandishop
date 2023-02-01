import React, { PureComponent } from "react";

import { Container, Count } from "./cart-icon-styles";
import { ReactComponent as CartSvg } from "../../assets/cartsvg.svg";

export class CartIcon extends PureComponent {
  render() {
    const { toggleCart, itemsCount } = this.props;
    return (
      <Container onClick={toggleCart}>
        <CartSvg />
        {itemsCount > 0 && <Count>{itemsCount}</Count>}
      </Container>
    );
  }
}

export default CartIcon;
