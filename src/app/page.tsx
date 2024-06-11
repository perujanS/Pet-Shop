import { Image } from "react-bootstrap";
import styles from "./page.module.css";
import heroimg from '@/images/adorable-dog-park-nature-with-owner.png'
import Aboutsec from '@/components/about-sec/about-sec'

export default function Home() {
  return (
    <main className={styles.main}>

      {/* --hero-home-- */}
      <div className="hero">
      <Image src={heroimg.src} className="w-100"></Image>
      </div>
      <Aboutsec/>
    </main>

    
  );
}
