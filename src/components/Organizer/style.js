import styled from 'styled-components';

export const OrganizerSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    video {
        height: 62vh;
        width: 29vw;
        transform: scale(1.5);
        z-index: -1;
        object-fit: cover;
    }

    @media (max-width: 1100px) {
        height: 58rem;
        video {
            height: 360px;
            width: 100%;
            transform: scale(1);
        }
    };
`;