"use client";

import React from "react";
import styles from "./FeaturedProducts.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "@/components/Product-Card/ProductCard";
import Product1 from "@/images/product-17-1-650x650.png";
import Product2 from "@/images/product-15-1-650x650.png";
import Product3 from "@/images/product-9-1-650x650.png";
import Product4 from "@/images/product-8-1-650x650.png";

interface CardProps {
  image: string;
  title: string;
  price: string;
}
const products = [
  {
    image: Product1.src,
    title: "Dogs Foods",
    price: "$10.00",
  },
  {
    image: Product2.src,
    title: "Dogs Foods",

    price: "$20.00",
  },
  {
    image: Product3.src,
    title: "Shampoo",
    price: "$30.00",
  },
  {
    image: Product4.src,
    title: "Vitamins",
    price: "$40.00",
  },
];

const FeaturedProductsComponent: React.FC<CardProps> = ({
  image,
  title,
  price,
}) => {
  return (
    <Container>
      <h6 className={`${styles.SubHeading} text-center mt-5`}>Shop</h6>
      <h1 className={`${styles.Heading} text-center`}>
        Furry Friends Emporium
      </h1>

      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={3}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
      <div className="text-center mb-5">
        <Button className={`${styles.shopMore} text-center`}> Shop More</Button>
      </div>
    </Container>
  );
};

export default FeaturedProductsComponent;
