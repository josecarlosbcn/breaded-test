import React from "react";
import {Row, Col} from "react-bootstrap";


export const Section3 = () => {
    return(
        <div className = "container-separator">
            <Row>
                <Col md = {3}></Col>
                <Col md = {6} className = "text-center">
                    <p>I loved the bread that has been delivered to me. It was delicious, fresh, and I<br />
                    really love the variety of it. I went for a surprise option and I must say Breaded<br />
                    didn't disappoint. I can't wait for the next box and another surprise!</p>
                    <span className = "font-weight-bold">Laura</span><br/>
                </Col>
                <Col md = {3}></Col>
            </Row>
            <Row className = "space">
            <Col md = {3}></Col>
                <Col md = {6} className = "text-center">
                    <p>The customer service was fantastic. My box came on time, nicely and carefully<br />
                    packed, and what I loved the most was the fact that the delivery driver was<br />
                    waiting for me to open the oor and receive it personally. Well done Breaded<br />
                    team!</p>
                    <span className = "font-weight-bold">Julia</span><br/>
                </Col>
                <Col md = {3}></Col>
            </Row>
        </div>
    );
}