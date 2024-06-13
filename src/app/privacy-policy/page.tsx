"use client";
import React, { useState, useEffect } from "react";
import EmailSubscriptionPopup from "@/components/EmailSubscriptionPopup/EmailSubscriptionPopup";
import Image from "next/image";
import styles from "./../page.module.scss";
import heroimg from "@/images/close-up-young-woman-loving-her-cute-dog.png";
import PrivacyPolicy from "@/components/Privacy-Policy/PrivacyPolicy";



const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <Image src={heroimg} className="w-100" alt="Hero Image" />
      <PrivacyPolicy/>
    </main>
  );
};

export default HomePage;