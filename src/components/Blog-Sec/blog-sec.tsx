import React from "react";
import "./blog-sec.scss";
import blogCardImg1 from "@/images/14.png";
import blogCardImg2 from "@/images/15.png";
import blogCardImg3 from "@/images/16.png";
import { Button, Card, Col, Container, Row , Image } from "react-bootstrap";

export default function Blogsec() {
  return (
    <div className="blog-section">
      <Container>
        <div className="blog-section-head text-center">
          <p>Blogs</p>
          <h2>Furry Friends Forum</h2>
        </div>
        <Row xs={1} md={3}  className="g-4 blog-section-main">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx} className="mt-md-0 mt-5">
              <Card className="border-0 rounded-0">
                <Image
                  src={blogCardImg1.src}
                  className="blog-card-img"
                  alt="..."
                />
                <Card.Body>
                  <Card.Title>Blog 01</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </Card.Text>
                  <Card.Link href="#">Read More {">>"}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="blog-section-btn justify-content-center align-items-center d-flex">
          <Button className="text-center btn-primary">More Blogs</Button>
        </div>
      </Container>
    </div>
  );
}
