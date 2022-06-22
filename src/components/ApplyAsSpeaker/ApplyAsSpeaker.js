import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Ellipse } from "../Ellipse";
import {
  ApplyAsSpeakerComponent,
  DescriptionPart,
} from "./style";

const ApplyAsSpeaker = () => {
  return (
    <ApplyAsSpeakerComponent
      id="apply-as-speaker" 
      className="section-scroll"
    >
        <Row>
          <Col lg={6} md={12} className="d-flex align-items-center">
              <DescriptionPart className="d-flex flex-column justify-content-center">
                  <div className="text-part">
                    <h1 className="text-start title-content">Apply as Speaker</h1>
                    <p className="text-start">Worldwide AI Webinar aims to do an annual conference and pocket round table meetings 
                        in different countries across the world. Share your expertise and best practices with your colleagues. 
                        Be part of the AI great minds community!
                    </p>
                  </div>
                  <div>
                    <Ellipse width="100px" height="100px" degree="98.4deg" top="65%" left="75%"/>
                    <Ellipse width="150px" height="150px" degree="-21deg" top="1%" left="10%"/>
                  </div>
              </DescriptionPart>
          </Col>
          <Col lg={6} md={12}>
              <embed src="https://webforms.pipedrive.com/f/6WfGTu1ydVop966sqIESJzGXPA3g6VOlZR0jNBcyZxhUG8jZBtEzfn8MnLlY28Bpir"
                height="1000"
                width= "100%"
              />
          </Col>
        </Row>
    </ApplyAsSpeakerComponent>
  );
};

export default ApplyAsSpeaker;
