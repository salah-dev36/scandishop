import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 100px;
  min-width:950px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 3;
`;

export const Features = styled.div`
  height: 80px;
  width: 245px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 22px;
`;

export const Overlay= styled.div`
width: 100%;
height:100%;
position:fixed;
background:background: rgb(0,0,0);
background: ${({feature}) => feature === "cart" ? "linear-gradient(180deg, rgba(0,0,0,0) 78px, rgba(57,55,72,0.22) 78px);" : "transparent"};
right: 0;
top: 0;
`

export const Logo = styled.img`
align-self: center;
`