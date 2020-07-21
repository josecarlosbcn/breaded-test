import React from "react";
import {Row, Col} from "react-bootstrap";
import "../../../css/plans/section4.css";
import AddIcon from '@material-ui/icons/Add';


export const Section4 = () => {
    return(
        <div className = "blue-background container-separator">
            <Row className = "space">
                <Col md = {12} className = "title text-center">FAQ</Col>
            </Row>
            <Row className = "space">
                <Col md = {2}></Col>
                <Col md = {4} className = "text-left font-weight-bold">
                    <AddIcon /> How do we order?
                </Col>
                <Col md = {4} className = "text-left font-weight-bold">
                    <AddIcon /> When will I receive my orders?
                </Col>
                <Col md = {2}></Col>
            </Row>
            <Row className = "separator-faq">
                <Col md = {2}></Col>
                <Col md = {4} className = "text-left font-weight-bold">
                    <AddIcon /> Can I cancel my subscription?
                </Col>
                <Col md = {4} className = "text-left font-weight-bold">
                    <AddIcon /> When will I be charged for my box?
                </Col>
                <Col md = {2}></Col>
            </Row>            
        </div>
    );
}