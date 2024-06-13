"use client";
import React from "react";
import styles from "./contacttopbanner.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/34.png";
import img1 from "@/Images/14.svg";
import img2 from "@/Images/15.svg";
import img3 from "@/Images/16.svg";


function contacttopbanner() {

    
    return (

<section id="" className="hero">
    <div className="container-fluid px-0 overflow-hidden">
        <div className="row">
            <div className="col-12 col-md-12">
            <img src={img.src} className={styles.banner}></img>
                <div className="container">
                    <div className={styles.herotext}>
                        <h1 className={styles.text}>Contact Pet Haven</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        
    );
}

export default contacttopbanner;
