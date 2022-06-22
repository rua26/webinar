import React from 'react';
import { 
    LogoCol,
    FooterComponent,
    SocialMedia,
} from './style.js';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbWorld, TbMail } from "react-icons/tb";

const Footer = () => {
    return (
        <FooterComponent>
            <Row>
                <Col lg={5} xs={12} className="d-flex align-items-start flex-column">
                    <LogoCol>
                        <a href="/">
                            <img src="Frame.png" alt="logo" />
                        </a>
                        <p>
                        A global provider of high-quality AI training data 
                        </p>
                    </LogoCol>
                    <SocialMedia>
                        <a href="https://facebook.com/WowAI.LLC/" target="_blank" rel="noreferrer">
                            <BsFacebook color="white" size="2em"></BsFacebook>
                        </a>
                        <a href="https://instagram.com/wowai_global?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <BsInstagram color="white" size="2em"></BsInstagram>
                        </a>
                        <a href="https://www.linkedin.com/company/wow-ai-llc/" target="_blank" rel="noreferrer">
                            <BsLinkedin color="white" size="2em"></BsLinkedin>
                        </a>
                        <a href="https://twitter.com/wowai_llc" target="_blank" rel="noreferrer">
                            <BsTwitter color="white" size="2em"></BsTwitter>
                        </a>
                    </SocialMedia>
                </Col>
                <Col lg={4}/>

                <Col lg={3} xs={12} className="d-flex flex-column justify-content-end align-items-start">
                    <div>
                        <HiOutlineLocationMarker color='white' size="2rem" />
                        <span style={{ marginLeft: "0.5rem" }}>34th ST STE 1018, NY, USA</span>
                    </div>
                    <div>
                        <TbWorld color='white' size="2rem" />
                        <span style={{ marginLeft: "0.5rem" }}>Wow-ai.com</span>
                    </div>
                    <div>
                        <TbMail color='white' size="2rem" />
                        <span style={{ marginLeft: "0.5rem" }}>contact@wow-ai.com</span>
                    </div>
                </Col>
    
            </Row>
        </FooterComponent>
    )
}

export default Footer;