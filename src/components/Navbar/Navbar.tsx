"use client";

import React from "react";
import styles from "./Navbar.module.scss";
import img from "./../../images/Orange___Green_Illustration_Pet_Shop_Logo__2_-removebg-preview@2x.png";
import { IoIosCart } from "react-icons/io";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar expand="lg" className={`${styles.navbar}`} variant="dark">
      <Container> =
        <Navbar.Brand href="#">
          <img src={img.src} height="68px" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className=" my-2 my-lg-0 mx-auto " navbarScroll>
            <Nav.Link href="#" className={`${styles.navLink} px-5`}>Home</Nav.Link>
            <Nav.Link href="#" className={`${styles.navLink} px-5`}>About Us</Nav.Link>
            <Nav.Link href="#" className={`${styles.navLink} px-5`}>Shop</Nav.Link>
            <Nav.Link href="#" className={`${styles.navLink} px-5`}>Blogs</Nav.Link>
            <Nav.Link href="#" className={`${styles.navLink} px-5`}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className={styles.navLink}>
              <IoIosCart className={styles.cartIcon}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;