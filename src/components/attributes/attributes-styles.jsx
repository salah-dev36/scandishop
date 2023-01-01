import styled from "styled-components";

export const Container = styled.div``;

export const AttributeName = styled.span`
  display: block;
  ${({ big }) =>
    big
      ? `
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  `
      : `
  font-size: 14px;
  `}
`;

export const AttributeGroupe = styled.div`
  display: flex;
  padding: 1px;
  margin-top: 7px;

  ${({ big }) =>
    big
      ? `
      gap: 12px;
  `
      : `
      gap: 8px;
      user-select: none;
      
  `}
`;

export const Attribute = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ type }) =>
    type === "text"
      ? `
      width: 64px;
      height: 45px;
      @media screen and (max-width: 829px) {
        width: 50px;
        height: 35px;
      }
  `
      : `
      width: 32px;
      height: 32px;
  `}

  border ${({ type, value, selected }) =>
    type === "text"
      ? "1px solid black"
      : selected
      ? "1px solid white"
      : value === "#FFFFFF"
      ? "1px solid gray"
      : "none"};

  color: ${({ type, selected }) =>
    type === "text" && selected ? "white" : "black"};

  outline: ${({ type, selected }) =>
    type === "swatch" && selected && "1px solid #5ece7b"};

  background-color: ${({ type, value, selected }) =>
    type === "swatch" ? value : selected ? "black" : "white"};

  cursor: ${({ selectable }) => (selectable ? "pointer" : "default")};
`;

export const MiniAttribute = styled(Attribute)`
  font-size: 14px;
  cursor: default;

  width: ${({ type, value }) =>
    type !== "text" ? "16px" : value.length > 2 ? "50px" : "24px"};

  height: ${({ type }) => (type !== "text" ? "16px" : "24px")};
`;
