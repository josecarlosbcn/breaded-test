import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import bread from "../../../images/bread.png";
import "../../../css/home/section1.css"

export const Section1 = () => {
    return(
        <div className = "container-separator background">
            <Row>
                <Col md = {6} style = {{paddingLeft: 10 + "%", textAlign: "justify"}}>
                    <div>
                        <p className = "title">Freshly baked, boxed</p>
                        <p className = "title">& delivered</p>
                        <p className = "message">Get upto 10 different types of bread boxed and carefully delivered to your door</p>
                        <Button className = "white-button">
                            Learn More
                        </Button>
                    </div>
                </Col>
                <Col md = {6} style = {{textAlign: "left"}}>
                    <img alt = "bread" src = {bread} id = "bread" />
                </Col>
            </Row>
        </div>
    )
}