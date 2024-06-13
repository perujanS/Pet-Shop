"use client";
import React from "react";
// import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/1.png";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ContactUs from "@/components/Contactus/Contactform";
import ContactTopbanner from "@/components/Contacttopbanner/contacttopbanner";


function TopBanner() {
    return (
        <div >
            <ContactTopbanner/>
            <Breadcrumb/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default TopBanner;
