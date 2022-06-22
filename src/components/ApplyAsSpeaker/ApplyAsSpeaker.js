import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Ellipse } from "../Ellipse";
import {
  ApplyAsSpeakerComponent,
  DescriptionPart,
  FormPart,
  FormCol,
  FormRow,
  SubmitButton,
  InputForm,
} from "./style";

// const script_form = (
//   <Script
//     id={Date.now()}
//     src="https://webforms.pipedrive.com/f/loader"
//   ></Script>
// );

export  const form_div = (
  <div
    key={Date.now()}
    className="pipedriveWebForms"
    data-pd-webforms="https://webforms.pipedrive.com/f/6WfGTu1ydVop966sqIESJzGXPA3g6VOlZR0jNBcyZxhUG8jZBtEzfn8MnLlY28Bpir"
  ></div>
);

const ApplyAsSpeaker = () => {
  return (
    <ApplyAsSpeakerComponent
      id="apply-as-speaker" 
      className="section-scroll"
    >

      <div
        className="pipedriveWebForms"
        data-pd-webforms="https://webforms.pipedrive.com/f/6WfGTu1ydVop966sqIESJzGXPA3g6VOlZR0jNBcyZxhUG8jZBtEzfn8MnLlY28Bpir"
        key={Date.now()}
      >
          <script
            src="https://webforms.pipedrive.com/f/loader"
            defer
          ></script>
      </div>
        {/* <Row>
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
              <FormPart>
                  <FormRow>
                      <FormCol>
                          <p>First Name *</p>
                          <InputForm></InputForm>
                      </FormCol>
                      <FormCol>
                          <p>Last Name *</p>
                          <InputForm></InputForm>
                      </FormCol>
                  </FormRow>
                  <FormRow>
                      <FormCol>
                          <p>Your company email address *</p>
                          <InputForm type="email"></InputForm>
                      </FormCol>
                  </FormRow>
                  <FormRow>
                  <FormCol>
                      <p>Your company *</p>
                      <InputForm type="text"></InputForm>
                  </FormCol>
                  <FormCol>
                      <p>Your job title *</p>
                      <InputForm type="text"></InputForm>
                  </FormCol>
                  </FormRow>
                  <FormRow>
                      <FormCol>
                          <p>What do you want to share with our AI community?</p>
                          <InputForm style={{ height: "200px" }}></InputForm>
                      </FormCol>
                  </FormRow>
                  <SubmitButton>
                    <h3>Submit</h3>
                  </SubmitButton>
              </FormPart>
          </Col>
        </Row> */}
    </ApplyAsSpeakerComponent>
  );
};

export default ApplyAsSpeaker;
