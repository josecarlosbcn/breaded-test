import React from "react";
import {Row, Col} from "react-bootstrap";
import "../../../css/plans/section2.css";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';


export const Section2 = () => {
    return(
        <div className = "container-section2">
            <Row>
                <Col md = {6} className = "text-center">
                    <span className = "font-weight-bold">You're in control</span><br/>
                    We source brilliant & passionate around the UK to deliver their perfection
                </Col>
                <Col md = {6}>
                    <span className = "font-weight-bold">Won't be home for delivery?</span><br />
                    We source brilliant & passionate around the UK to deliver their perfection
                </Col>
            </Row>
            <div className = "separator" />
            <Row>
                <Col md = {12}>
                    <EmojiEmotionsIcon style = {{fontSize: 48 + "px"}} />
                </Col>
            </Row>
        </div>
    );
}