"use client";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import styles from "./Homeshop.module.scss";
import img from "../../images/8.png";
import imge from "../../images/9.png";
import imgee from "../../images/10.png";
import imgeee from "../../images/11.png";
import svg from "../../images/2.svg";

function Homeshop() {
    return (
        <div>
            <div className='container px-5 mt-5 mb-5'>
                <div className="row mb-5">
                    <h5 className= {styles.Homeshopsubheading}>Shop</h5>
                    <h1 className={styles.Homeshopheading}>Furry Friends Emporium</h1>
                    <div className="col-12 col-md-3">
                        <img src={img.src} className={styles.product}></img>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5 className='product-name'>Dogs Food</h5>
                                <h5 className={styles.cuurency}>$200</h5>
                            </div>
                            <div>
                                <img src={svg.src} className={styles.svg}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={imgeee.src} className={styles.product}></img>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h5  className={styles.productname}>Dogs Food</h5>
                                <h5 className={styles.cuurency}>$150</h5>
                            </div>
                            <div>
                                <img src={svg.src} className={styles.svg}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={imge.src} className={styles.product}></img>
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <h5 className='product-name'>Shampoo</h5>
                                <h5 className={styles.cuurency}>$300</h5>
                            </div>
                            <div>
                                <img src={svg.src} className={styles.svg}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <img src={imgee.src} className={styles.product}></img>
                        <div className='d-flex justify-content-between'>
                            <div className=''>
                                <h5 className='product-name'>Vitamins</h5>
                                <h5 className={styles.cuurency}>$200</h5>
                            </div>
                            <div>
                                <img src={svg.src} className={styles.svg}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.homeshopbtn}>
                <button className={styles.btnshop}>Shop More</button>
            </div>
        </div>
    )
}

export default Homeshop;
