"use client";
import React from "react";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/1.png";
import {Carousel} from "react-bootstrap";
import Homeshop from "@/components/Homeshop/Homeshop";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

function TopBanner() {
    return (
        <div className={styles.background}>
            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <img src={img.src} className={styles.background}></img>
                    <div className={styles.content}>
                        <h1 className={styles.Title}>Furry Friends Haven</h1>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className={styles.btn_shop}>Shop Now</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img.src} className={styles.background}></img>
                    <div className={styles.content}>
                        <h1 className={styles.Title}>Furry Friends Haven</h1>
                        <p className={styles.paragraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className={styles.btn_shop}>Shop Now</button>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Homeshop/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default TopBanner;
