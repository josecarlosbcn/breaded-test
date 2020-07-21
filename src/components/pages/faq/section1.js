import React from "react";
import {Row, Col} from "react-bootstrap";
import "../../../css/faq/section1.css";


export const Section1 = () => {
    return(
        <div className = "blue-background">
            <Row>
                <Col md = {4}></Col>
                <Col md = {4} className = "space title text-center">
                    FAQ
                    <hr />
                </Col>
                <Col md = {4}></Col>
            </Row>
            <Row className = "space text-center font-weight-bold title-option">
                <Col md = {3}>About Breaded</Col>
                <Col md = {3}>About Boxes</Col>
                <Col md = {3}>My Account</Col>
                <Col md = {3}>My Delivery</Col>
            </Row>
            <div className = "space">&nbsp;</div>
        </div>
    );
}