import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Ellipse } from "../../Ellipse";
import {
    CountDown,
    HeroComponent,
} from "./style";


import heroVideo from "../../../assets/videos/hero_header_video.mp4";

const HeroHeader = () => {
    const initialTime = {
        "d": 10,
        "h": 10,
        "m": 10,
        "s": 10, 
    };
    const countDownDate = new Date("September 29, 2022 09:00:00").getTime();
    const [time, setTime] = useState(initialTime); 
    
    useEffect(() => {
        const countDown = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const objectTime = {
                "d": days,
                "h": hours,
                "m": minutes,
                "s": seconds, 
            };

            setTime(objectTime);

            if (distance < 0) {
                clearInterval(countDown);
            };
        }, 1000);
    }, [countDownDate]);

    
    return (
        <div className="section-scroll mx-auto">
            <HeroComponent>
                    <video autoPlay loop muted>
                        <source src={heroVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="hero-text-overlay">
                        <h1>WORLD<br></br>WIDE</h1>
                    </div>
                    <div className="hero-text">
                        <h1>AI WEBINAR 2022</h1>
                    </div>
                    <div className="d-none d-sm-block">
                        <Ellipse width="70px" height="70px" degree="-151deg" top="20%" left="15%"/>
                        <Ellipse width="120px" height="120px" degree="-21deg" top="70%" left="80%"/>
                        <Ellipse width="60px" height="60px" degree="-21deg" top="80%" left="10%" filter="4px"/>
                        <Ellipse width="40px" height="40px" degree="-21deg" top="25%" left="85%" filter="6px"/>
                    </div>
            </HeroComponent>
            <h6 className="">An Annual Global Meeting Of AI Experts from Tech Giants To Share Best Practices</h6>
            <CountDown>
                <Row>
                    <Col>
                        <h1>{time.d}</h1>
                        <p>Days</p>
                    </Col>
                    <Col>
                        <h1>{time.h}</h1>
                        <p>Hours</p>
                    </Col>
                    <Col>
                        <h1>{time.m}</h1>
                        <p>Minutes</p>
                    </Col>
                    <Col>
                        <h1>{time.s}</h1>
                        <p>Seconds</p>
                    </Col>
                </Row>
            </CountDown>
        </div>
    );
};

export default HeroHeader;