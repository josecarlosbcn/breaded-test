import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import "../../../css/home/section4.css";
import {NavLink} from "react-router-dom";

export const Section4 = () => {
    return(
        <div className = "container-section4">
            <Row>
                <Col md = {12}>
                    <p className = "title text-white">Ready to get your perfect box</p>
                </Col>
            </Row>
            <Row>
                <Col md = {12}>
                    <Button className = "white-button">
                        <NavLink to = "/plans" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>Get start</NavLink>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}