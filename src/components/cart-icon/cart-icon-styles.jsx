import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;
  z-index:4;
`;
export const Count = styled.span`
  width: 20px;
  height: 20px;
  background-color: black;
  color: white;
  border-radius: 50%;
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  top: -5px;
  right: -12px;
`;
