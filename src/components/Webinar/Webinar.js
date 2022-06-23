import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
    Pagination,
    WebinarComponent,
    Card,
    CardDescription,
    Timer,
    Speakers,
} from './style';

import webinar from "../../assets/images/webinar_1.jpg";
import speaker from "../../assets/images/speaker_1.png";

const agendas = ["", "", "", "", "", ""]

const Webinar = ({width}) => {
    const numAgendas = agendas.length;
    const [range, setRange] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);
    
    useEffect(() => {
        let newRange;
        if (width <= 429) {
            newRange = 1; 
        } else if (width > 429 && width < 1024) {
            newRange = 3;
        } else {
            newRange = 4;
        };
        setRange(newRange);
        setStartIndex(0);
        setEndIndex(newRange);
    }, [width]);

    const handleBackButtonClick = () => {
        if (startIndex === 0) return;
        const start = startIndex - range;
        const end = start + range >= numAgendas ? numAgendas : (start + range);
        setStartIndex(start);
        setEndIndex(end);
    };

    const handleNextButtonClick = () => {
        if (endIndex >= numAgendas) return;
        const start = startIndex + range;
        const end = start + range >= numAgendas ? numAgendas : (start + range);
        setStartIndex(start);
        setEndIndex(end);
    };

    return (
        <WebinarComponent
            id = "webinar"
            className = "section-scroll"
        >
            <div className="webinar-title d-flex justify-content-between">
                <h1 className="title-content">
                    Webinar Agenda
                </h1>
                <Pagination className="d-flex align-items-end">
                    <span onClick={handleBackButtonClick}>
                        <FiChevronLeft size="2rem"></FiChevronLeft>
                    </span>
                    <span onClick={handleNextButtonClick}>
                        <FiChevronRight size="2rem"></FiChevronRight>
                    </span>
                </Pagination>
            </div>
            <Row>
                {agendas.slice(startIndex, endIndex).map((agenda, index) => (
                     <Col lg={3} md={4} xs={12} key={index}>
                        <Card>
                            <img  
                                src={webinar}
                                alt="first webinar"
                                style={{width: "100%"}}
                            />
                            <Timer>
                                <p>09:30 - 10:00</p>
                            </Timer>
                            <Speakers>
                                <img src={speaker} alt="first speaaker" width="46" height="46"></img>
                                <img src={speaker} alt="first speaaker" width="46" height="46"></img>
                            </Speakers>
                            <CardDescription>
                                <div className="description-title">
                                    <h4>AI in Finance</h4>
                                    <p>Company</p>
                                </div>
                                <div className="description-options text-start d-flex flex-column">
                                    <p>Technical/Business</p>
                                    <p style={{ color: "var(--secondary-bg)"}}>Random name, Random name</p>
                                </div>
                            </CardDescription>
                        </Card>
                    </Col>
                ))}
            </Row>
        </WebinarComponent>
    );
};

export default Webinar;