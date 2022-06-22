import React from 'react';

import { DefinitionSection } from './style';

import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

const Definition = () => {
    return (
        <DefinitionSection
            id="definition"
            className="section-scroll"
        >
            <Row>
                <Col xs={12} lg={6}>
                    <video autoPlay loop muted>
                        <source src="/videos/AI_worldwide.mp4" type="video/mp4" width="16" height="9"/>
                        Your browser does not support the video tag.
                    </video>
                </Col>

                <Col xs={12} lg={6}>
                    <h5 className="title-content left">What's Worldwide <br></br> AI Webinar?</h5>
                    <div style={{ textAlign: "justify" }}>
                        <div className="title-description">
                            Driven by the goal to make the future better using the power of Artificial Intelligence, 
                            Worldwide AI Webinar is an annual global summit that gathers world-class speakers 
                            from the global AI ecosystem of Enterprise, Tech Giants, and all the brightest minds i
                            n AI from 5 continents to share the best AI findings and practices! The webinar is 
                            brought to you by Wow AI - a global AI data training solution provider.
                        <p></p>
                            Our attendees have the opportunity to engage in a worldwide conversation 
                            on Artificial Intelligence with some of the world's most well-known figures 
                            in the AI industry from organizations such as IBM, Oracle, Microsoft, Google, and others. 
                            Attendees at the summit will have the opportunity to learn, share their experiences, 
                            and discuss how AI has impacted our way of doing business in our history, present, and future.
                        <p></p>
                            Prepare yourself for mind-blowing discoveries, intelligent conversations, practical business 
                            solutions, knowledge exchange, and amazing networking opportunities!
                        </div>
                    </div>
                </Col>
            </Row>
        </DefinitionSection>
    )
}

export default Definition;