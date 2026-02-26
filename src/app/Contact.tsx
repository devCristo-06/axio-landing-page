import styles from "./page.module.scss";

export default function Contact() {
    return (
        <section className={`container py-5 ${styles.sectionReveal} ${styles.delay4}`} id="Contacts">
            <div className="row align-items-center">

                <div className="col-12 col-lg-12 mt-5">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        Contact us
                    </p>

                    <h1 className="display-5 fw-bold">
                        Get in touch
                    </h1>

                    <p className={`lead ${styles.pAbout}`}>
                        If you have an idea even in its early stages, let’s talk.

                        We’ll help you turn it into a clear, professional, and effective online presence.

                        Fill out the form or contact us directly.
                        We’ll review your project and propose the right solution.

                        No pressure. Just clarity and direction.
                    </p>


                </div>

                <h1 className="display-5 fw-bold text-center mt-5">
                    Reach us on our social platforms
                </h1>


                <div className="row d-flex align-items-center justify-content-center mt-5">

                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <a href="https://www.instagram.com/axio_team/" className={styles.contactLink}>
                            <div className="d-flex flex-column align-items-center">

                                <img
                                    className="img-fluid rounded"
                                    src="images/ig_logo.png" width="80"
                                    alt="Hero preview"
                                />
                                <p className={`mt-3 ${styles.pServices}`}>Instagram</p>
                            </div>
                        </a>
                    </div>


                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <a href="https://www.tiktok.com/@axioteam" className={styles.contactLink}>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="img-fluid rounded"
                                    src="images/tk_logo.png" width="80"
                                    alt="Hero preview"
                                />
                                <p className={`mt-3 ${styles.pServices}`}>Tik Tok</p>
                            </div>
                        </a>
                    </div>


                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <a href="https://www.linkedin.com/in/axio-team-847a283aa/" className={styles.contactLink}>
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    className="img-fluid rounded"
                                    src="images/lk_logo.png" width="80"
                                    alt="Hero preview"
                                />
                                <p className={`mt-3 ${styles.pServices}`}>LinkedIn</p>
                            </div>
                        </a>
                    </div>

                    <div className={`col-12 col-lg-12 text-center mt-2 mx-4 p-4 mt-lg-5 ${styles.cardEmail}`}>
                        <div className="d-flex flex-column align-items-center">
                            <p className={styles.pContact}>Email: axioteam2026@gmail.com</p>
                            <p className={styles.pContact_res}>Response time: within 24h</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row align-items-center">
                <a href="https://it.fiverr.com/sellers/axio_team/" className={`btn px-4 py-2 mt-5 align-items-center ${styles.btnContact} ${styles.interactiveBtn}`}>
                    Send us a message
                </a>
            </div>

        </section>
    );
}
