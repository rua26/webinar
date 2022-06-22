import styled from "styled-components";

export const WebinarComponent = styled.section`
    overflow: hidden;
    h1 {
        margin-bottom: 4rem;
        white-space: nowrap;
    }

    @media (max-width: 429px) {
        height: 32.1rem;
        margin: 2rem 0;

        .webinar-title {
            flex-direction: column;
        }
    };
`;

export const Card = styled.div`
    background-color: var(--grey);
    padding: 10px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 1rem;
    img {
        height: 200px;
        border-radius: 10px;
    }
`;

export const CardDescription = styled.div`
    margin: 2rem 0;  
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    h4 {
        font-size: var(--normal-text);
        font-weight: 700;
    }
    p {
        font-size: var(--xs);
        padding: 0;
        margin: 0;
    }

    .description-title {

    }
`;

export const Speakers = styled.div`
    position: absolute;
    bottom: 7.5rem;
    left: 1rem;
    img {
        width: 45px;
        height: 45px;
        border: 5px solid var(--grey);
        border-radius: 45px;
    }
`;

export const Timer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.45rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.01);
    box-shadow: 0px 6.87363px 6.87363px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(22.9121px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 8px;

    p {
        font-size: var(--xs);
        margin-bottom: 0;
    }
`

export const Pagination = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 2rem;
    width: 4rem;

    span {
        cursor: pointer;
    }

    span:hover {
        color: var(--secondary-bg);
    }


    @media (max-width: 429px) {
        width: 100%;
    };
`;
