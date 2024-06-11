'use client'


import React from 'react';
import { Card, Row } from 'react-bootstrap';
import styles from './ProductCard.module.scss';
import { IoIosCart } from "react-icons/io";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title,price }) => {
  return (
    <Card className={`${styles.productCard} mt-5`}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        
        <Card.Title className='justify-content-between' >{title}  <IoIosCart/></Card.Title>
       
       
        <Card.Text className={styles.price}>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
