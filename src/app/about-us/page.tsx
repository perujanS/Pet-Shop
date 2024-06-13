"use client";
import React from "react";
// import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "@/Images/1.png";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AboutUs from "@/components/Aboutus/aboutus";
import AboutUsTopbanner from "@/components/AboutusBanner/abouttopbanner";

function contactpage() {
    return (
        <div >
            
                <AboutUsTopbanner/>
                <Breadcrumb/>
                <AboutUs/>
            
            <Footer/>
        </div>
    );
}

export default contactpage;
