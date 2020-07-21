import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import "../../../css/plans/section1.css"

export const Section1 = () => {
    return(
        <div className = "container-separator background-color">
            <Row>
                <Col md = {12} className = "text-white title">Box Plans</Col>
            </Row>
            <div style = {{height: 100 + "px"}}></div>
            <Row>
                <Col md = {1}></Col>
                <Col md = {10}>
                    <Row>
                        <Col md = {4}>
                            <div className = "card" style = {{marginTop: 25 + "px"}}>
                                <span style = {{fontSize: 10 + "pt"}}>WEEKLY</span><br />
                                <div style = {{marginTop: 25 + "px", fontWeight: "bold"}}>
                                    <span style = {{fontSize: 24 + "pt"}}>&pound;</span><span style = {{fontSize: 36 + "pt"}}>29.99</span><span style = {{fontWeight: "normal", fontSize: 16 + "pt"}}>/Weekly</span>
                                </div>
                                <div style = {{marginTop: 25 + "px"}}>
                                    <p>10 different types of bread</p>
                                    <p>delivered to you once per week</p>
                                    <p>cancel at any time</p>
                                </div>
                                <div className = "text-center" style = {{marginTop: 25 + "px"}}>
                                    <Button className = "white-button">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md = {4}>
                            <div className = "card">
                                <div class="ribbon ribbon-top-right" style = {{fontSize: 10 + "pt"}}><span>Recommended</span></div>
                                <span style = {{fontSize: 10 + "pt"}}>BIWEEKLY</span>
                                <div style = {{marginTop: 25 + "px", fontWeight: "bold"}}>
                                    <span style = {{fontSize: 24 + "pt"}}>&pound;</span><span style = {{fontSize: 36 + "pt"}}>61.99</span><span style = {{fontWeight: "normal", fontSize: 16 + "pt"}}>/Biweekly</span>
                                </div>
                                <div style = {{marginTop: 25 + "px"}}>
                                    <p>10 different types of bread</p>
                                    <p>delivered to you once per week</p>
                                    <p>cancel at any time</p>
                                </div>
                                <div className = "text-center" style = {{marginTop: 25 + "px", marginBottom: 50 + "px"}}>
                                    <Button className = "btn-primary blue-button">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md = {4}>
                            <div className = "card" style = {{marginTop: 25 + "px"}}>
                                <span style = {{fontSize: 10 + "pt"}}>MONTHLY</span>
                                <div style = {{marginTop: 25 + "px", fontWeight: "bold"}}>
                                    <span style = {{fontSize: 24 + "pt"}}>&pound;</span><span style = {{fontSize: 36 + "pt"}}>114.99</span><span style = {{fontWeight: "normal", fontSize: 16 + "pt"}}>/month</span>
                                </div>
                                <div style = {{marginTop: 25 + "px"}}>
                                    <p>10 different types of bread</p>
                                    <p>delivered to you once per week</p>
                                    <p>cancel at any time</p>
                                </div>
                                <div className = "text-center" style = {{marginTop: 25 + "px"}}>
                                    <Button className = "white-button">
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md = {1}></Col>
            </Row>
        </div>
    )
}