import styles from "./page.module.scss";
import Navbar from "./Navbar";
import Hero from "./Hero";


export default function Home() {
  return (
    <main style={{ paddingTop: "80px" }} className={styles.page}>
      <Navbar />
      <Hero />
    </main>
  );
}
