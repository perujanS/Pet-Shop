"use client";
import React, { useState, useEffect } from "react";
import EmailSubscriptionPopup from "@/components/EmailSubscriptionPopup/EmailSubscriptionPopup";
import Image from "next/image";
import styles from "./../page.module.scss";
import heroimg from "@/images/side-view-smiling-young-woman-stroking-her-dog-garden.png";
import ShopProductsComponent from "@/components/Shop-Page/ShopProducts";


const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <Image src={heroimg} className="w-100" alt="Hero Image" />
      <ShopProductsComponent image={""} title={""} price={""} />
    </main>
  );
};

export default HomePage;
