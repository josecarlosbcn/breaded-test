import React from "react";
import {Row, Col} from "react-bootstrap";
import ForumIcon from '@material-ui/icons/Forum';
import "../../../css/faq/section2.css";


export const Section2 = () => {
    return(
        <div className = "white-background container-separator">
            <Row>
                <Col md = {1}></Col>
                <Col md = {5} className = "text-left">
                    <ForumIcon />
                    <div className = "font-weight-bold">Do you have healthier options of bread eg. spelt, rye or barley?</div>
                    <div>Yes, we do have different variety of breads including gluten free, spelt, rye etc.</div>
                </Col>
                <Col md = {5} className = "text-left">
                    <ForumIcon />
                    <div className = "font-weight-bold text-left">Do you have pastries/brioche offer?</div>
                    <div>At the moment, we have different bread options (including Brioche), but in the future we will have pastries as well</div>
                </Col>
                <Col md = {1}></Col>
            </Row>
            <Row className = "space">
                <Col md = {1}></Col>
                <Col md = {5} className = "text-left">
                    <ForumIcon />
                    <div className = "font-weight-bold text-left">Can I purchase just one-off box instead of subscribing?</div>
                    <div>No, but you can subscribe to the once per month subscription and cancel it anytime.</div>
                </Col>
                <Col md = {5} className = "text-left">
                    <ForumIcon />
                    <div className = "font-weight-bold text-left">I want to invite my friend to subscribe to your boxes, will I get a discount?</div>
                    <div>Yes, you will get 50% off your next delivery and each time you refer a friend to our subscription boxes</div>
                </Col>
                <Col md = {1}></Col>
            </Row>
            <Row className = "space">
                <Col md = {1}></Col>
                <Col md = {5} className = "text-left">
                    <ForumIcon />
                    <div className = "font-weight-bold text-left">Can I use Breaded as a gift?</div>
                    <div>Yes, on your dashboard go to Accounts, then to the Gift tab and follow the subsequent instructions to enable the gift option</div>
                </Col>
                <Col md = {5}></Col>
                <Col md = {1}></Col>
            </Row>
        </div>
    );
}