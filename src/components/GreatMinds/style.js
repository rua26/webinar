import styled from "styled-components";

export const GreadMindComponent = styled.section`
    margin-bottom: 10rem;
    h1 {
        padding-bottom: 4rem;
    }
`;

export const Rectangle = styled.div`
    width: 1.125rem;
    height: 0.5rem;
    border-radius: 1rem;
    background-color: var(--light);
    margin: 0 3px;
`;

export const Lines = styled.div`
    padding-top: 2rem;
    display: flex;
    justify-content: center;

    @media (max-width: 429px) {
        display: none;
    };
`

export const Flag = styled.div`
    width: 42px;
    height: 42px;
    position: absolute;
    top: 0.1rem;
    right: 1.5rem;
    // border: 5px solid var(--light);
    // border-radius: 45px;
`;

export const ImageDescription = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    bottom: 1rem;
    margin: 0 1.5rem;
    z-index: 1;
    h5 {
        margin: 0;
        font-size: var(--medium-text-3);
        font-weight: 700;
    }
    span {
        font-size: var(--xs);
        font-weight: 500;
    }
`;