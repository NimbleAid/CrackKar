import Link from "next/link";
import styles from "./main-header.module.css";
import Image from "next/image";
//import MainHeaderBackground from "./main-header-background";
import Navbar from "../navbar/navbar";

export default function MainHeader() {
  return (
    <>
      {/* <MainHeaderBackground /> */}
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          {/* <Image src={logoImg} alt="A plate with food on it" priority /> */}
          CrackIt
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Navbar href="/interview">Interview Q&A</Navbar>
              <Navbar href="/about">About</Navbar>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}