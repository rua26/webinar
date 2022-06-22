import styled from "styled-components";

export const HeaderComponent = styled.header`
  height: 100vh;
  background-color: black;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > a > img {
    width: 120px;
    margin: 20px 0;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
   user-select: none;
`;

const centerElement = `
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const HeroComponent= styled.div`
    position: relative;
    video {
        width: 100%;
        object-fit: cover;
        height: 45vh;
        @media (max-width: 429px) {
            height: 35vh;
        };
    };

    .hero-text {
        ${centerElement}
        h1 {
            font-family: 'iCiel Gotham Ultra', sans-serif;
            font-size: 4rem;
            font-weight: 500;
            whitespace: nowrap;
            @media (max-width: 429px) {
                font-size: 1.65rem;
                line-height: 3.75rem;
                letter-spacing: normal;
            }
        }
    }

    .hero-text-overlay {
        ${centerElement}
        mix-blend-mode: multiply;
        background: black;
        color: var(--primary-text);

        h1 {
            font-size: 9.375rem;
            font-weight: 900;
            letter-spacing: 0.625rem;
            line-height: 8.75rem;
            font-family: 'iCiel Gotham Ultra', sans-serif;
            @media (max-width: 769px) {
                font-size: 5rem;
                line-height: 4.5rem;
                letter-spacing: normal;
            };
        };
    };
`;

export const CountDown = styled.div`
    width: 60%;
    margin: 1rem auto 1rem auto;
    h1 {
        font-size: 5rem;
    };

    p {
        font-size: 1rem;
    };
    @media (max-width: 769px) {
        width: 100%;
        margin: 1rem auto 1rem auto;
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1rem;
        }
    };
`