import React from 'react'
import styles from "./Footer.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./../../images/Orange___Green_Illustration_Pet_Shop_Logo__2_-removebg-preview@2x.png";
import imge from "./../../images/4.svg";
import imgee from "./../../images/5.svg";
import imgeee from "./../../images/6.svg";
import svg from "./../../images/7.svg";
import svgg from "./../../images/8.svg";
import svggg from "./../../images/9.svg";

function Footer() {
  return (
<section>
  <div className={styles.backgroundcolor}>
    <div className='container'>
      <div className={styles.content}>
      <img src={img.src} className={styles.backgrounddd}></img>
        <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
      </div>

      <div className='d-flex justify-content-center gap-4 mb-5'>
      <img src={imge.src} className={styles.background}></img>
      <img src={imgee.src} className={styles.background}></img>
      <img src={imgeee.src} className={styles.background}></img>
      <img src={svg.src} className={styles.background}></img>
      </div>

      <div className={styles.coloumn}>
        <div className='d-flex justify-content-center gap-3'>
        <img src={svgg.src} className={styles.logoo}></img>
          <a href='' className={styles.link}>Lorem ipsum dolor sit amet, consectetur</a>
        </div>
        <div className='d-flex justify-content-center gap-3'>
        <img src={svggg.src} className={styles.logoo}></img>
          <a href='' className={styles.link}>+123 456 7890</a>
        </div>
      </div>

      <div className={styles.coloumnn}>
        <a href='' className={styles.link}>Home</a>
        <a href='' className={styles.link}>About Us</a>
        <a href='' className={styles.link}>Shop</a>
        <a href='' className={styles.link}>Blogs</a>
        <a href='' className={styles.link}>FAQs</a>
        <a href='' className={styles.link}>Contact Us</a>
        <a href='' className={styles.link}>Privacy Policy</a>
        <a href='' className={styles.link}>Terms & Conditions</a>
      </div>


  </div>
  <div className={styles.backgroundd}>
    <div className='container'>
      <div className={styles.reserved}>
            <div>
              <p className={styles.copyright}>Copyright © 2023 Pet Shop (Pvt) Ltd. All Rights Reserved.</p>
            </div>
            <div>
              <p className={styles.copyright}>Designed & Developed By <span className={styles.archmage}>Archmage Solutions</span></p>
            </div>
      </div>
    </div>
  </div>
  </div>
</section>
  )
}

export default Footer;
