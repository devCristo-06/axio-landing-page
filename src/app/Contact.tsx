import styles from "./page.module.scss";

export default function Contact() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-12 col-lg-12 mt-5">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        Contact us
                    </p>

                    <h1 className="display-5 fw-bold">
                        Get in touch
                    </h1>

                    <p className={`lead ${styles.pAbout}`}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                    </p>


                </div>

                <h1 className="display-5 fw-bold text-center mt-5">
                    Reach us on our social platforms
                </h1>


                <div className="row d-flex align-items-center justify-content-center mt-5">

                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <div className="d-flex flex-column align-items-center">
                            <img
                                className="img-fluid rounded"
                                src="https://dummyimage.com/125x125/CECECE.png"
                                alt="Hero preview"
                            />
                            <p className={`mt-3 ${styles.pServices}`}>Instagram</p>
                        </div>
                    </div>


                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <div className="d-flex flex-column align-items-center">
                            <img
                                className="img-fluid rounded"
                                src="https://dummyimage.com/125x125/CECECE.png"
                                alt="Hero preview"
                            />
                            <p className={`mt-3 ${styles.pServices}`}>Tik Tok</p>
                        </div>
                    </div>


                    <div className={`col-12 col-lg-4 text-center mt-2 mx-4 p-5 mt-lg-0 ${styles.cardSocial}`}>
                        <div className="d-flex flex-column align-items-center">
                            <img
                                className="img-fluid rounded"
                                src="https://dummyimage.com/125x125/CECECE.png"
                                alt="Hero preview"
                            />
                            <p className={`mt-3 ${styles.pServices}`}>LinkedIn</p>
                        </div>
                    </div>

                    <div className={`col-12 col-lg-12 text-center mt-2 mx-4 p-4 mt-lg-5 ${styles.cardEmail}`}>
                        <div className="d-flex flex-column align-items-center">
                            <p className={styles.pContact}>Email: email.business@email.com</p>
                            <p className={styles.pContact_res}>Response time: within 24h</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row align-items-center">
                <button className={`btn px-4 py-2 mt-5 align-items-center ${styles.btnContact}`}>
                    Send us a message
                </button>
            </div>

        </section>
    );
}
