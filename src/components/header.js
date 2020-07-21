import React from "react";
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";


export const Header = () => {
    return(
        <header style = {{width: 100 + "%"}}>
            <Row style = {{margin: 0}}>
                    <Col md = {6} style = {{textAlign: "left", paddingLeft: 10  + "px", paddingTop: 10 + "px", paddingBottom: 10 + "px"}}>
                        <NavLink to="/" style = {{fontSize: 32 + "pt", fontWeight: "bold", color: "#000000", textDecoration: "none"}}>Breaded</NavLink>
                    </Col>
                    <Col md = {6} style = {{textAlign: "right", paddingTop: 15 + "px", paddingRight: 10 + "px"}}>
                        <NavLink to="/faqs" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>FAQS</NavLink>&nbsp;|&nbsp;
                        <NavLink to="/about" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>About us</NavLink>&nbsp;|&nbsp;
                        <NavLink to="/login" style = {{fontSize: 12 + "pt", color: "#000000", textDecoration: "none"}}>Login</NavLink>
                    </Col>
            </Row>              
        </header>
    )
};