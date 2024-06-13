import React from "react";
import "./about-sec.scss";
import mainImg1 from "@/images/2.png";
import mainImg2 from "@/images/3.png";
import aboutCardImg1 from "@/images/4.png";
import aboutCardImg2 from "@/images/5.png";
import aboutCardImg3 from "@/images/6.png";
import aboutCardImg4 from "@/images/7.png";
import { Row, Col, Image, Button, Card, Stack, Container } from "react-bootstrap";

export default function Aboutsec() {
  return (
    <div className="about-us">
      <Container>
        <div className="about-home-head text-center">
          <p>About Us</p>
          <h2>Furry Friends Family</h2>
        </div>
        <div className="about-home-main">
          <Row className="align-items-center gap-md-5 justify-content-between">
            <Col md={6} className="img-fluid mb-5 mb-md-0">
              <Image
                src={mainImg1.src}
                className="pe-1 pe-md-2 w-md-0 w-50 "
                alt=""
              />
              <Image
                src={mainImg2.src}
                className="ps-1 ps-md-2 w-md-0 w-50"
                alt=""
              />
            </Col>
            <Col md={5}>
              <h2 className="about-home-main-head">Welcome to Our Pet Shop</h2>
              <p className="mt-4 mb-5 about-home-main-para">
                At Our Pet Shop, we believe that pets are not just animals; they
                are beloved members of our families. Our passion for animals and
                commitment to their well-being drive everything we do.
              </p>
              <a className="about-home-btn" href="#">
                Read More
              </a>
            </Col>
          </Row>
        </div>
        <div className="about-home-card">
          <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-lg-4 g-4  align-items-center justify-content-between">
            <Col>
              <div className="card h-100 text-center justify-content-center gap-4 align-items-center">
                <Image src={aboutCardImg1.src} className="card-img" alt="..." />
                <h4 className="card-title">Dogs Foods</h4>
              </div>
            </Col>
            <Col>
              <div className="card h-100 text-center justify-content-center gap-4 align-items-center">
                <Image src={aboutCardImg2.src} className="card-img" alt="..." />
                <h4 className="card-title">Cats Foods</h4>
              </div>
            </Col>
            <Col>
              <div className="card h-100 text-center justify-content-center gap-4 align-items-center">
                <Image src={aboutCardImg3.src} className="card-img" alt="..." />
                <h4 className="card-title">Birds Foods</h4>
              </div>
            </Col>
            <Col>
              <div className="card h-100 text-center justify-content-center gap-4 align-items-center">
                <Image src={aboutCardImg4.src} className="card-img" alt="..." />
                <h4 className="card-title">Fish Foods</h4>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
