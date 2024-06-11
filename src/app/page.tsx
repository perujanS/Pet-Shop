// src/pages/index.tsx
'use client'
import React, { useState, useEffect } from 'react';
import EmailSubscriptionPopup from '@/components/EmailSubscriptionPopup/EmailSubscriptionPopup';
import Image from 'next/image';
import styles from './page.module.scss';
import heroimg from '@/images/adorable-dog-park-nature-with-owner.png';
import FeaturedProductsComponent from '@/components/Featured-Products/FeaturedProducts';
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <Image src={heroimg} className="w-100" alt="Hero Image" />
      <FeaturedProductsComponent image={''} title={''} price={''} />
      <InstagramFeed />
      <EmailSubscriptionPopup show={showPopup} handleClose={handleClose} />
    </main>
  );
};

export default HomePage;
