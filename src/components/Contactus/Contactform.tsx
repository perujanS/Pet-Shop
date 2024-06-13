"use client";
import React from "react";
import styles from "./contactform.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/35.png";
import img1 from "@/Images/14.svg";
import img2 from "@/Images/15.svg";
import img3 from "@/Images/16.svg";
import Card from "react-bootstrap/Card";

function contactus() {
  return (
    <section className={styles.formsection}>
    <div className= 'container mb-5'>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={styles.imagecontainerr}>
            <img src={img.src} className={styles.dogimage}></img>
            <div className={styles.overlay}>
            <div className={styles.contactdetails}>
                  <div className="col-md-3">
                  <img src={img1.src} className={styles.profilestar}></img>
                  </div>
                  <div className="col-md-9">
                    <h6 className={styles.detail}>Phone</h6>
                    <p className={styles.detail}><a href="tel:+94123456789" className="redirect-link"> +123 456 789</a></p>
                  </div>
              </div>
              <div className={styles.contactdetails}>
                  <div className="col-md-3">
                  <img src={img2.src} className={styles.profilestar}></img>
                  </div>
                  <div className="col-md-9">
                    <h6 className={styles.detail}>Address</h6>
                    <p className={styles.detail}>No. 17, 5th Street, Colombo 07</p>
                  </div>
              </div>
              <div className={styles.contactdetails}>
                  <div className="col-md-3">
                  <img src={img3.src} className={styles.profilestar}></img>
                  </div>
                  <div className="col-md-9">
                    <h6 className={styles.detail}>Email</h6>
                    <p className={styles.detail}><a href="mailto:leisuretravelhub@gmail.com" className="redirect-link">petshop@gmail.com</a></p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className={styles.contactForm}>
            <form className={styles.form}>
              <div className="mb-4">
                <label htmlFor="name" className={styles.label}>
                  Name*
                </label>
                <input
                  className={styles.textarea}
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className={styles.label}>
                  Email*
                </label>
                <input
                  className={styles.textarea}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className={styles.label}>
                  Phone*
                </label>
                <input
                  className={styles.textarea}
                  type="number"
                  id="number"
                  name="number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className={styles.label}>
                  Message*
                </label>
                <textarea
                  className={styles.textareaa}
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className={styles.buttoncontainer}>
              <button className={styles.button} type="submit">
                Send
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default contactus;
