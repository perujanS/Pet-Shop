// src/pages/index.tsx
"use client";
import "./page.scss";
import styles from './page.module.css'
import React,{ useState, useEffect } from "react";
import EmailSubscriptionPopup from "@/components/EmailSubscriptionPopup/EmailSubscriptionPopup";
import Image from "next/image"
import heroimg from "@/images/adorable-dog-park-nature-with-owner.png";
import FeaturedProductsComponent from "@/components/Featured-Products/FeaturedProducts";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";
import Aboutsec from "@/components/About-Sec/about-sec";
import Blogsec from "@/components/Blog-Sec/blog-sec";
import Newsletter from "@/components/NewsLetter/newsLetter";


const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <Image src={heroimg} className="w-100" alt="Hero Image" />
      <Aboutsec />
      <FeaturedProductsComponent image={""} title={""} price={""} />
      <section className="promotion-banner">
        <div className="bg-img" style={{ backgroundImage: `url(${'/images/12.png'})`, backgroundSize: 'cover' }}>
          <div className="container">
            <div className="promotion-banner-main text-center">
              <p>Buy 1 Get 1</p>
              <h2 className="my-3">Save 50% Off</h2>
              <p>Safe and effective products</p>
              <h6 className="mt-4 mb-5">Shop for your pet</h6>
              <a href="#" className="promotion-banner-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </section>
      <Blogsec />
      <InstagramFeed />
      <EmailSubscriptionPopup show={showPopup} handleClose={handleClose} />
      <Newsletter/>
    </main>
  );
};

export default HomePage;
