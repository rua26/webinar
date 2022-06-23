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
import styled from "styled-components";

import ali from "../../assets/images/ali.jpeg";
import aravin from "../../assets/images/aravin.jpeg";
import carl from "../../assets/images/carl.jpeg";
import david from "../../assets/images/david.jpeg";
import johanas from "../../assets/images/johanas.jpeg";
import leon from "../../assets/images/leon.jpeg";
import maria from "../../assets/images/maria.jpeg";
import muni from "../../assets/images/muni.jpeg";
import nam_ma from "../../assets/images/nam_ma.jpeg";
import noel from "../../assets/images/noel.jpeg";

export const Img = styled.div`
  aspect-ratio: 1;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  position: relative;
  background: url(${({ src }) => (src ? `${src}` : null)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--light);
  @media (max-width: 729px) {
    height: 450px;
};
`;

const GreateMinds = ({width}) => {
    const [activeID, setActiveID] = useState(null);

    const numMinds = minds.length;
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

    const getImageSrc = (nameImg) => {
        let srcImg;
        switch(nameImg) {
            case "ali":
                srcImg = ali;
                break;
            case "aravin":
                srcImg = aravin;
                break;
            case "carl":
                srcImg = carl;
                break;
            case "david":
                srcImg = david;
                break;
            case "johanas":
                srcImg = johanas;
                break;
            case "leon":
                srcImg = leon;
                break;
            case "maria":
                srcImg = maria;
                break;
            case "muni":
                srcImg = muni;
                break;
            case "nam_ma":
                srcImg = nam_ma;
                break;
            case "noel":
                srcImg = noel;
                break;
            default:
                srcImg = noel;
                break;
        };
        
        return srcImg;
    };

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
                            md={4}
                            lg={3}
                            key={id}
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave = {() => handleMouseLeave(index)} 
                            className = "position-relative"
            
                        >
                            <div className={index === activeID ? "img-gradient" : ""}>
                                <Img 
                                    alt={name}
                                    className="w-100"
                                    src={getImageSrc(src)}
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