import styled from 'styled-components';

export const DefinitionSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    video {
        height: 40vh;
        width: 24vw;
        transform: scale(1.5);
        z-index: -1;
        object-fit: cover;
    }

    @media (max-width: 1300px) {
        video {
            height: 40vh;
            width: 100%;
            transform: scale(1);
        }
    };
`;