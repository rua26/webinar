import React from 'react';

import { OrganizerSection } from './style';

import { Col, Row } from 'react-bootstrap';

import organizerVideo from "../../assets/videos/orgnanizer_video.mp4";


const Organizer = () => {
    return (
        <OrganizerSection
            id="definition"
            className="section-scroll"
        >
            <Row>
                <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
                    <h5 className="title-content left">Wow AI <br></br>The Organizer</h5>
                    <div style={{ textAlign: "justify" }}>
                        <div className="title-description">
                        Wow AI is a trusted partner that provides high-quality data for AI training in different languages at a large scale. We are experienced professionals with a track record of success in numerous types of data collecting. 
                        <p></p>
                        With a crowd of over 100,000 project contributors all over the world, we can provide massive, scalable high-quality data across data types. Either off-the-shelf data or tailor-made data, we have it all for the success of our clients’ AI/ML projects. 

                        <p></p>
                            Our motivation to start and promote this Worldwide AI Webinar is sharing knowledge, innovations about Artificial Intelligence and helping companies, entrepreneurs find the best solutions for their business problems with the power of AI and Machine Learning.

                        </div>
                    </div>
                </Col>

                <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
                    <video autoPlay loop muted>
                        <source src={organizerVideo} type="video/mp4" width="988" height="904"/>
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
        </OrganizerSection>
    )
}

export default Organizer;