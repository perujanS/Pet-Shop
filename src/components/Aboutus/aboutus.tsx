"use client";
import React from "react";
import styles from "./aboutus.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/37.png";
import img1 from "@/Images/14.svg";
import img2 from "@/Images/15.svg";
import img3 from "@/Images/16.svg";
import Card from "react-bootstrap/Card";

function aboutus() {
  return (
    <section className="contact-form">
    <div className= 'container mb-5'>
      <div className="row"> 
        <h1 className={styles.heading}>Why Choose Our Pet Shop?</h1>
        <div className="col-12 col-md-4 pe-5 pt-5">
          <div className={styles.para}>
            <div className="mb-5">
            <h3 className={styles.topic}>Expertise</h3>
            <p className={styles.detail}>Our knowledgeable and friendly staff are here to assist you. From nutrition to grooming, we have the expertise to help you make informed decisions for your pet’s care.</p>
            </div>
            <div className="mb-5">
            <h3 className={styles.topic}>Community Involvement</h3>
            <p className={styles.detail}>We believe in giving back to the community. Our Pet Shop actively supports local animal shelters and initiatives aimed at improving the lives of pets in need.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
        <img src={img.src} className={styles.dog}></img>
        </div>
        <div className="col-12 col-md-4 ps-5 pt-5">
        <div className={styles.para1}>
            <div className="mb-5">
            <h3 className={styles.topic}>Quality Products</h3>
            <p className={styles.detail}>We carefully curate our selection of products, focusing on quality, durability, and pet safety. Whether it’s premium pet food, stylish accessories, or innovative toys.</p>
            </div>
            <div className="mb-5">
            <h3 className={styles.topic}>Community Involvement</h3>
            <p className={styles.detail}>Your satisfaction is our top priority. We are committed to providing excellent customer service, ensuring that you and your pet have a positive experience every time you visit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default aboutus;
