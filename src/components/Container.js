import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1330px;
  width: 100%;
  padding: 50px 15px;
  padding-bottom: 0;
  margin: auto;
  margin-top: 64px;
  margin-bottom: 150px;
  display: flex;
  position: relative;
  justify-content: center;
  scroll-snap-align: center;

  @media only screen and (max-width: 1441px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1301px) {
    max-width: 1100px;
  }
  @media only screen and (max-width: 1201px) {
    max-width: 1100px;
  }
  @media only screen and (max-width: 1112px) {
    max-width: 1024px;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 980px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 900px;
  }
  @media only screen and (max-width: 769px) {
    max-width: 650px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 600px;
  }
  button {
    outline: none;
  }
`;
