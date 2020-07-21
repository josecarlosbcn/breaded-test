import React from "react";
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FaceboookIcon from '@material-ui/icons/Facebook';
import {NavLink} from "react-router-dom";


export const Footer = () => {
    return(
        <footer style = {{width: 100 + "%", fontSize: 12 + "pt"}}>
            <Row style = {{margin: 0, textAlign: "center", marginTop: 75 + "px"}}>
                <Col md = {12}>
                    <InstagramIcon style = {{fontSize: 28 + "px"}} /> <FaceboookIcon style = {{fontSize: 28 + "px"}} />
                </Col>
            </Row>
            <Row style = {{margin: 0, textAlign: "center", marginTop: 15 + "px", fontWeight: "bold"}}>
                <Col md = {2}><NavLink to="/login" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>Login</NavLink></Col>
                <Col md = {2}><NavLink to="/contactus" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>Contact us</NavLink></Col>
                <Col md = {4}><NavLink to="/about" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>About us</NavLink></Col>
                <Col md = {2}><NavLink to="/faqs" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>FAQ</NavLink></Col>
                <Col md = {2}><NavLink to="/privacy" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>Privacy Policy</NavLink></Col>
            </Row>
            <Row style = {{marginTop: 50 + "px", marginBottom: 50 + "px"}}>
                <Col md = {12} style = {{fontSize: 10 + "pt"}}>@Copyright 2020 Breaded</Col>
            </Row>
        </footer>
    )
};