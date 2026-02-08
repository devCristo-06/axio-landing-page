import styles from "./page.module.scss";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";


export default function Home() {
  return (
    <main style={{ paddingTop: "80px" }} className={styles.page}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
