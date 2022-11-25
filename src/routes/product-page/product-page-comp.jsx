import React, { Component } from "react";
import parse from "html-react-parser";

import {
  Brand,
  Carrousel,
  CarrouselItem,
  Container,
  MainImage,
  Name,
  ProductInfo,
  Price,
  Description,
  PriceTitle,
  Title,
} from "./product-page-styles";

import Attributes from "../../components/attributes/attributes-comp";
import Button from "../../components/button/button-comp";

import { extractPrice, selectAttributesFunc } from "../../utils/product-utils";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: "",
      productAttributes: [],
    };
  }

  componentDidMount() {
    const { attributes, gallery } = this.props.product;
    this.setState({
      mainImage: gallery[0],
      productAttributes: attributes,
    });
    window.scrollTo(0, 0);
  }

  selectAttribute = (newAttributeValue, newAttributename) => {
    const { productAttributes } = this.state;

    const newAttributes = selectAttributesFunc(
      productAttributes,
      newAttributeValue,
      newAttributename
    );

    this.setState({
      productAttributes: newAttributes,
    });
  };

  renderCarrousel = () => {
    const { gallery } = this.props.product;
    if (gallery.length > 1) {
      return (
        <Carrousel>
          {gallery.map((url) => (
            <CarrouselItem
              onClick={() => this.setState({ mainImage: url })}
              url={url}
              key={url}
            />
          ))}
        </Carrousel>
      );
    }
  };

  renderPrice = () => {
    const {
      selectedCurrency,
      product: { prices },
    } = this.props;

    const { amount, currency } = extractPrice(prices, selectedCurrency);

    return (
      <>
        <PriceTitle>price:</PriceTitle>
        <Price>{`${currency.symbol} ${amount}`}</Price>
      </>
    );
  };

  renderDescription = () => {
    const { description } = this.props.product;
    const content = parse(description);

    return <Description>{content}</Description>;
  };

  render() {
    const { product, addToCart } = this.props;
    const { brand, name, inStock } = product;
    return (
      <Container>
        {this.renderCarrousel()}
        <MainImage inStock={inStock} url={this.state.mainImage}>
          {!inStock && "OUT OF STOCK"}
        </MainImage>
        <ProductInfo>
          <Title>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
          </Title>
          <Attributes
            big="true"
            attributes={this.state.productAttributes}
            selectAttribute={this.selectAttribute}
            selectable="true"
          />
          {this.renderPrice()}
          <Button
            inStock={inStock}
            addToCart={() => addToCart(product, this.state.productAttributes)}
            feature="add-to-cart"
            children="add to cart"
          />
          {this.renderDescription()}
        </ProductInfo>
      </Container>
    );
  }
}

export default ProductPage;
