import styles from "./page.module.scss";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className={styles.page}>Hello World!</h1>
    </>
  );
}
