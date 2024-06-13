import React from "react";
import "./newsLetter.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div id="subscribe" className="subscribe-sec">
      <Container>
        <Row>
          <Col className="col-12 col-md-7 subscribe-text">
            <h2 className="">Get In With Some Pet News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
          </Col>

          <Col className="col-12 col-md-5 my-auto">
            <div id="subscribe" className="search mt-2">
              <div className="d-flex justify-content-between align-items-center">
                <input
                  type="email"
                  id="email"
                  className="sub-input form-control mb-0"
                  placeholder="Enter Your Email Address"
                  name="email"/>
                <Button type="submit" className="btn btn-secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
