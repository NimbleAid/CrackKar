import Link from "next/link";

import classes from "./page.module.css";
//import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>{/* <ImageSlideshow /> */}</div>
        <div>
          <div className={classes.hero}>
            <h1>Welcome to the CrackKar</h1>
            <p>
              Prepare for your interviews with our comprehensive collection of
              interview questions and answers.
            </p>
            <p>
              Choose a programming language from Interview Section to get
              started:
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/interview">Interview</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>Helping Buddy</h2>
          <p>
            Have a question or need help? Join our community and ask for
            assistance.
          </p>
          <p></p>
        </section>

        <section className={classes.section}>
          <h2></h2>
          <p></p>
          <p></p>
        </section>
      </main>
    </>
  );
}
