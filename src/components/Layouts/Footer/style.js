import styled from "styled-components";

export const FooterComponent = styled.footer`   
    // position: sticky;
    // top; 0;
    scroll-snap-align: end;
    border-top: 2px solid gray;
    padding: 2rem;
    margin-top: 5rem;
    span {
        font-size: var(--small-text);
    }
    
`;

export const SocialMedia = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 429px) {
      width: 100%;
      padding: 0 2rem;
      margin-bottom: 1rem;
    };
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const LogoCol = styled(Col)`
  // justify-content: flex-start;
  align-items: flex-start;
  padding-right: 10px;

  p {
    text-align: start;
  }

  img {
    width: 130px;
    margin-bottom: 20px;
  }

  @media (max-width: 429px) {
    align-items: center;
    p {
      text-align: center;
    }
  };
`;