import styled from "styled-components";

export const AttributeName = styled.span`
  display: block;

  ${({ big }) =>
    big
      ? `
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  `
      : `
  font-size: 14px;
  margin: 8px 0;
  `}
`;

export const AttributeGroupe = styled.div`
  display: flex;

  ${({ big }) =>
    big
      ? `
      gap: 12px;
      margin-bottom: 24px;
  `
      : `
      gap: 8px;
      user-select: none;
      padding: 1px;
  `}
`;

export const Attribute = styled.button`
  ${({ type }) =>
    type === "text"
      ? `
  width: 64px;
  height: 45px;
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

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MiniAttribute = styled(Attribute)`
  width: ${({ type, value }) =>
    type !== "text" ? "16px" : value.length > 2 ? "50px" : "24px"};
  height: ${({ type }) => (type !== "text" ? "16px" : "24px")};
  font-size: 14px;
  cursor: default;
`;
