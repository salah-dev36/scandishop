import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_PRODUCTS_ID_BY_CATEGORY = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      products {
        id
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query ($id: String!) {
    product(id: $id) {
      name
      brand
      gallery
      inStock
      prices {
        amount
        currency {
          symbol
        }
      }
    }
  }
`;
