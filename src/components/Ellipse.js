import styled from "styled-components";

export const Ellipse = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? `${top}` : "10px")};
  left: ${({ left }) => (left ? `${left}` : "10px")};
  width: ${({ width }) => (width ? `${width}` : "112px")};
  height: ${({ height }) => (height ? `${height}` : "112px")};
  background: linear-gradient(180deg, #D30D60 0%, #2C2660 100%);
  transform: rotate(${({ degree }) => (degree ? `${degree}` : "90deg")});
  border-radius: ${({ width }) => (width ? `${width}` : "112px")};
  filter: ${({ filter }) => (filter ? `blur(${filter})` : "none")};
`;