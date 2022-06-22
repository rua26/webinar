import styled from "styled-components";


export const Column = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding-left: 50px;
@media (max-width: 1301px) {
  width: 70%;
}

@media (max-width: 1100px) {
  width: 70%;
}
@media (max-width: 1024px) {
  width: 50%;
}
@media (max-width: 769px) {
  width: 100%;
  padding-left: 0;
}
`;

export const ApplyAsSpeakerComponent = styled.section`
    height: auto;
    margin-top: 15rem;
`;

export const FormPart = styled.form`
  background: #1A1A1A;
  padding: 28px;
  border-radius: 1rem;
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

export const FormCol = styled(Column)`
padding-left: 0;
width: 100%;
text-align: start;
p {
  font-size: var(--xs);
}
`;

export const FormRow = styled.div`
gap: 20px;
margin: 10px 0;
`;

export const InputForm = styled.input`
border: 1px solid white;
background-color: var(--primary-bg);
border-radius: 10px;
width: 100%;
height: 56px;
padding: 10px 20px;
color: white;
`;

export const SubscribeButton = styled.button`
background-color: var(--primary-bg);
border-radius: 40px;
border: 2px solid var(--secondary-bg);
color: var(--secondary-bg);
width: fit-content;
padding: 5px 50px;
margin: 20px 0;

&:hover {
  background-color: var(--secondary-bg);
  color: white;
}
`;

export const SubmitButton = styled(SubscribeButton)`
margin: 20px auto;
margin-bottom: 0;

h3 {
  margin: 0;
}
`;