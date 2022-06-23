import React from "react";
import Button from "react-bootstrap/Button";
import HeroHeader from "./HeroHeader";
import {
    Wrapper,
    HeaderComponent,
} from "./style";

import logo from "../../../assets/images/logo.png";

export default function Header({openModal}) {
    return (
        <HeaderComponent>
            <div className="contain">
                <Wrapper className="section-scroll justify-content-between">
                    <Wrapper>
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </Wrapper>
                    <Wrapper>
                        <Button 
                            className="btn btn-outline-light secondary-text" 
                            onClick={openModal}
                        >
                            Register now
                        </Button>
                    </Wrapper>
                </Wrapper>
                <HeroHeader />
                <Wrapper>
                    <Button className="btn btn-gradient btn-lg" onClick={openModal}>
                        Register now
                    </Button>
                </Wrapper>
            </div>
        </HeaderComponent>
    )
}