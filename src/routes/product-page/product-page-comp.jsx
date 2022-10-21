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
  AttributeGroupe,
  AttributeName,
  Attribute,
} from "./product-page-styles";

import Button from "../../components/button/button-comp";

import { extractPrice, selectAttributesFunc } from "../../utils/product-utils";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: this.props.product.gallery[0],
      productAttributes: [],
    };
  }

  componentDidMount() {
    const { attributes } = this.props.product;
    this.setState({
      productAttributes: attributes,
    });
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

  renderAttributes = () => {
    const { productAttributes } = this.state;

    return productAttributes.map(({ name, id, items, type }) => (
      <div key={id}>
        <AttributeName>{name}:</AttributeName>
        {this.renderAttributeGroupe(items, type, name)}
      </div>
    ));
  };

  renderAttributeGroupe = (attribute, attributeType, attributeName) => {
    return (
      <AttributeGroupe>
        {attribute.map(({ id, value, displayValue, selected }) => {
          return (
            <Attribute
              type={attributeType}
              selected={selected}
              title={displayValue}
              key={id}
              color={value}
              onClick={() => this.selectAttribute(value, attributeName)}
            >
              {attributeType === "text" ? value : ""}
            </Attribute>
          );
        })}
      </AttributeGroupe>
    );
  };

  renderPrice = () => {
    const {
      selectedCurrency,
      product: { prices },
    } = this.props;

    const { amount, currency } = extractPrice(prices, selectedCurrency);

    return (
      <div>
        <AttributeName>price:</AttributeName>
        <Price>
          {currency.symbol} {amount}
        </Price>
      </div>
    );
  };

  renderDescription = () => {
    const { description } = this.props.product;
    const content = parse(description);

    return <Description>{content}</Description>;
  };

  render() {
    const { brand, name } = this.props.product;

    return (
      <Container>
        {this.renderCarrousel()}
        <MainImage url={this.state.mainImage} />
        <ProductInfo>
          <Brand>{brand}</Brand>
          <Name>{name}</Name>
          {this.renderAttributes()}
          {this.renderPrice()}
          <Button children="ADD TO CART" />
          {this.renderDescription()}
        </ProductInfo>
      </Container>
    );
  }
}

export default ProductPage;
