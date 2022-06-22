import styled from "styled-components";


export const ApplyAsSpeakerComponent = styled.section`
    height: auto;
    margin-top: 15rem;
`;

export const DescriptionPart = styled.div`
  height: 350px;
  position: relative;

  .text-part {
    background: rgba(255, 255, 255, 0.01);
    z-index: 1;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */
    padding: 1.5rem;
    border-radius: 1rem;
  }

  h1 {
    white-space: nowrap;
  }

  p {
    font-size: var(--xs);
    margin-top: 1.5rem;
  }
`;
