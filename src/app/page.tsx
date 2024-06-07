import Image from "next/image";
import styles from "./page.module.css";
import heroimg from '@/images/adorable-dog-park-nature-with-owner.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <img src={heroimg.src} className="w-100"></img>
      
    </main>
  );
}
