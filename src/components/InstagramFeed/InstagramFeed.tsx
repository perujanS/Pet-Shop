"use client";

// src/components/InstagramFeed/InstagramFeed.tsx

import React from "react";
import Slider from "react-slick";
import styles from "./InstagramFeed.module.scss";
import insta1 from "@/images/4b83109b7de7d88f01b7f6980e1be66b.png";
import insta2 from "@/images/15255a87874f663c4c4c842fae75fe1a.png";
import insta3 from "@/images/32646dca81789320b5e82df777c61bb8.png";
import insta4 from "@/images/adorable-dog-with-owner-pet-shop.png";
import insta5 from "@/images/c579456d583643e1394bb02ab1b9f30b.png";
import insta6 from "@/images/ba4263e932c8fe556ee5283c3ef8dd7d.png";
import insta7 from "@/images/child-mother-pet-shop-with-their-dog.png";
import insta8 from "@/images/eda723c427d3c31f5fe4cbf00f4d81d3.png";
import { Container } from "react-bootstrap";

interface InstagramPost {
  image: string;
}

const instagramPosts: InstagramPost[] = [
  { image: insta1.src },
  { image: insta2.src },
  { image: insta3.src },
  { image: insta4.src },
  { image: insta5.src },
  { image: insta6.src },
  { image: insta7.src },
  { image: insta8.src },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const InstagramFeed: React.FC = () => {
  return (
    <section className={styles.instagramFeed}>
      <Container className="mb-5">
        <h2 className={`${styles.title} mt-5 `}>@pet_shop</h2>
        <h5 className={`${styles.caption} mb-5 `}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </h5>
        <Slider {...settings}>
          {instagramPosts.map((post, index) => (
            <div key={index} className={styles.slide}>
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default InstagramFeed;
