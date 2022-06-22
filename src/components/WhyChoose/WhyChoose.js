import styled from "styled-components";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const TextTitle = {
    fontSize: "var(--medium-text-3)",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textAlign: "justify"
}

export const WhyChooseComponent = styled.section`
    // padding-bottom: 10vh;
    h1 {
        margin-bottom: 6.25rem;
    }
`

const WhyChoose = () => {
  return (
    <WhyChooseComponent
      id="why-choose"
      className="section-scroll"
    >
        <h1 className="title-content text-center">Why you should join <br></br> 
            <span className="text-gradient">Worldwide AI Webinar </span> 
             2022?
        </h1>
        <Container>
            <Row className="text-left border-bottom border-light pb-4 pt-4">
                <Col lg={4} xs={12} className="text-start" style={TextTitle}>
                    Join the Global AI Community
                </Col>
                <Col lg={8} xs={12} className="text-start text-justify">
                    We gather together the world's most well-known AI professionals, 
                    developers, and scientists in one place, introducing the new age's technological marvels and making them accessible to AI aficionados worldwide.
                </Col>
            </Row>
            <Row className="text-left border-bottom border-light pb-4 pt-4">
                <Col lg={4} xs={12} className="text-start" style={TextTitle}>
                    Deepen your understanding of AI
                </Col>
                <Col lg={8} xs={12} className="text-start">
                    We gather together the world's most well-known AI professionals, 
                    developers, and scientists in one place, introducing the new age's technological marvels and making them accessible to AI aficionados worldwide.
                </Col>
            </Row>
            <Row className="text-left border-bottom border-light pb-4 pt-4">
                <Col lg={4} xs={12} className="text-start" style={TextTitle}>
                    Tackling your business challenges 
                    with AI experts
                </Col>
                <Col lg={8} xs={12} className="text-start">
                AI’s transformative possibilities can only be unlocked when business decision-makers 
                    and AI practitioners understand how it can enhance business processes. 
                    Learn best practices from top-market companies to follow when implementing artificial intelligence to solve your 
                    business’s problems.<p></p>

                    Take part in the Worldwide AI Webinar and network with some of 
                    the world's most influential decision-makers who have already seen the full potential of AI-powered businesses.
                </Col>
            </Row>
        </Container>
    </WhyChooseComponent>
  );
};

export default WhyChoose;
