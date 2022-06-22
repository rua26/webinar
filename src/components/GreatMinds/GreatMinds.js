import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { 
    GreadMindComponent,
    Flag,
    ImageDescription,
    Lines,
    Rectangle,  
} from "./style";
import { Pagination } from "../Webinar/style";
import minds from "../../__mock__/minds";
import ReactCountryFlag from "react-country-flag";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GreateMinds = ({width}) => {
    const [activeID, setActiveID] = useState(null);

    const numMinds = minds.length;
    const [range, setRange] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);


    useEffect(() => {
        const newRange = width >= 429 ? 4 : 1;
        setRange(newRange);
        setStartIndex(0);
        setEndIndex(newRange);
    }, [width]);

    const handleBackButtonClick = () => {
        if (startIndex === 0) return;
        const start = startIndex - range;
        const end = start + range >= numMinds ? numMinds : (start + range);
        setStartIndex(start);
        setEndIndex(end);
    };

    const handleNextButtonClick = () => {
        if (endIndex >= numMinds) return;
        const start = startIndex + range;
        const end = start + range >= numMinds ? numMinds : (start + range);
        setStartIndex(start);
        setEndIndex(end);
    };

    const handleMouseEnter = (index) => {
        setActiveID(index);
    };

    const handleMouseLeave = () => {
        setActiveID(null);
    };

    return (
        <GreadMindComponent

            id="greate_minds"
            className="section-scroll"
        >
            <div className="minds-title d-flex flex-column justify-content-end">
                <h1 className="title-content text-center">
                    <span className="text-gradient">Great Minds</span> Of Worldwide <br></br> AI Webinar 2022
                </h1>
                <Pagination className="d-flex justify-content-between w-100">
                    <span onClick={handleBackButtonClick}>
                        <FiChevronLeft size="2rem"></FiChevronLeft>
                    </span>
                    <span onClick={handleNextButtonClick}>
                        <FiChevronRight size="2rem"></FiChevronRight>
                    </span>
                </Pagination> 
            </div>
            <Container>
                <Row>
                    {minds.slice(startIndex, endIndex).map(({id, src, name, country, position, company}, index) => (
                        <Col 
                            xs={12}
                            md={3}
                            key={id}
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave = {() => handleMouseLeave(index)} 
                            className = "position-relative"
            
                        >
                            <div className={index === activeID ? "img-gradient" : ""}>
                                <img 
                                    alt={name}
                                    className="w-100"
                                    src={src}
                                    style={{borderRadius: "16px"}}
                                />
                            </div>
                            {index === activeID && (
                                <>
                                    <Flag>
                                        <ReactCountryFlag 
                                            countryCode={country}
                                            style={{
                                                fontSize: '2em',
                                                lineHeight: '2em',
                                            }}
                                        />
                                    </Flag>
                                    <ImageDescription>
                                        <h5>{name}</h5>
                                        <span className="text-start">{position} - {company}</span>
                                    </ImageDescription> 
                                </>
                            )}
                        </Col>
                    ))}
                </Row>
                <Lines>
                    {minds.slice(startIndex, endIndex).map((mind, index) => (
                        <Rectangle 
                            key={index} 
                            style={{ 
                                width: index === activeID ? "2rem" : "1.25rem",
                                backgroundColor: index === activeID ? "var(--secondary-bg)" : "var(--light)"
                        }}></Rectangle>
                    ))}
                </Lines>
            </Container>
        </GreadMindComponent>
    )
};

export default GreateMinds;