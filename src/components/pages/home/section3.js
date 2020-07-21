import React from "react";
import {Row, Col} from "react-bootstrap";
import delivered from "../../../images/deliver.png";

export const Section3 = () => {
    return(
        <div className = "container-separator">
            <Row>
                <Col md = {12}>
                    <p className = "title">How Breaded Works</p>
                </Col>
            </Row>
            <Row>
                <Col md = {4}></Col>
                <Col md = {4}></Col>
                <Col md = {4}>
                    <img alt = "Delivered to You" src = {delivered}></img>                    
                </Col>
            </Row>
            <div className = "separator">&nbsp;</div>
            <Row>
                <Col md = {4} className = "text-center">
                    <p className = "font-weight-bold text-option">Select Subscription</p>
                    <p>Choose the subscription of your choice</p>
                </Col>
                <Col md = {4} className = "text-center">
                    <p className = "font-weight-bold text-option">Choose Your Breads</p>
                    <p>Choose from a ray of 10 freshly baked<br />typesof bread</p>
                </Col>
                <Col md = {4} className = "text-center">
                    <p className = "font-weight-bold text-option">Delivered To You</p>
                    <p>We box it all and deliver it straight to<br />your door as per your subscription</p>
                </Col>
            </Row>
        </div>
    )
}