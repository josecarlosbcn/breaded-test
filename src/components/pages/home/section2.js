import React from "react";
import {Row, Col} from "react-bootstrap";
import "../../../css/home/section2.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FiberNewIcon from '@material-ui/icons/FiberNew';


export const Section2 = () => {
    return(
        <div className = "blue-background container-separator">
            <Row style = {{paddingBottom: 100 + "px"}}>
                <Col md = {12}>
                    <p className = "title">Reasons To Choose Breaded</p>
                    <p className = "message">Let your taste buds explore</p>
                </Col>
            </Row>
            <Row>
                <Col md = {4} className = "text-center">
                    <p><NewReleasesIcon style = {{fontSize: 48  + "pt"}} /></p>
                    <p className = "font-weight-bold text-option">Excellent Bakers</p>
                    <p>We source brilliat % passionate bakers<br />around the UK to deliver their perfection.</p>
                </Col>
                <Col md = {4} className = "text-center">
                    <p><FiberNewIcon style = {{fontSize: 48 + "pt"}} /></p>
                    <p className = "font-weight-bold text-option">Freshly Baked</p>
                    <p>All our breads are freshly prepared and<br />baked before delivered to your door to<br />keep it fresh and tasty.</p>
                </Col>
                <Col md = {4} className = "text-center">
                    <p><ShoppingBasketIcon style = {{fontSize: 48 + "pt"}} /></p>
                    <p className = "font-weight-bold text-option">Amazing Selections</p>
                    <p>Choose from up to 10 different types of<br />bread or let us surprise you with some<br />amazing selection.</p>
                </Col>
            </Row>
        </div>
    )
}