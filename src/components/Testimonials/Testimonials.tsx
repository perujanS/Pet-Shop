"use client";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import styles from "./Testimonials.module.scss";
import img from "../../images/24.png";
import svg from "../../images/2.svg";
import {Carousel} from "react-bootstrap";


function Testimonials() {
    return (
        <div className="container mb-5">
            <div className="row">
                <h5 className= {styles.Homeshopsubheading}>Shop</h5>
                <h1 className={styles.Homeshopheading}>Furry Friends’ Raves</h1>
            <Carousel indicators={false} controls={true}>
                <Carousel.Item>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className={styles.reviews}>
                                    <h5 className= {styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h5>
                                    <h5 className={styles.reviewname}>- John Treve -</h5>
                                    <div className="Testimonialscontent d-flex gap-2 mt-2 mb-2 justify-content-start">
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={img.src} className={styles.profile}></img>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className={styles.reviews}>
                                    <h5 className= {styles.review}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h5>
                                    <h5 className={styles.reviewname}>- John Treve -</h5>
                                    <div className="Testimonialscontent d-flex gap-2 mt-2 mb-2 justify-content-start">
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                        <div>
                                            <img src={svg.src} className={styles.profilestar}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={img.src} className={styles.profile}></img>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}

export default Testimonials;
