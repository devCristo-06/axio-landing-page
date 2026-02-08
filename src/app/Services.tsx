import styles from "./page.module.scss";

export default function Services() {
    return (

        // ---------------------------------------------------------------------------------
        // INIZIO PRIMA PARTE
        // ---------------------------------------------------------------------------------

        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-12 col-lg-12 mt-5">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        Services
                    </p>

                    <h1 className="display-5 fw-bold">
                        What we offer
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


                <div className="row justify-content-center mt-4 mt-lg-5">

                    <div className="col-12 text-center col-lg-6 mt-3">
                        <hr className={styles.hr} />
                        <h2 className={`mb-4 ${styles.h2Services}`}>GRAPHIC DESIGN</h2>

                        <ul className="list-unstyled d-flex flex-column align-items-center">
                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>Illustrator</span>
                            </li>

                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>Photoshop</span>
                            </li>

                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>InDesign</span>
                            </li>
                        </ul>


                        <hr className={styles.hr} />
                    </div>

                    <div className="col-12 text-center col-lg-6 my-3 justify-content-center">
                        <hr className={styles.hr} />
                        <h2 className={`mb-4 ${styles.h2Services}`}>DEVELOPMENT</h2>

                        <ul className="list-unstyled d-flex flex-column align-items-center">
                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>Angular</span>
                            </li>

                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>Laravel</span>
                            </li>

                            <li className={`d-flex align-items-center gap-4 mb-4 w-50 ${styles.spacing}`}>
                                <img src="https://dummyimage.com/40x40/CECECE.png" />
                                <span className={styles.span}>Bootstrap</span>
                            </li>
                        </ul>

                        <hr className={styles.hr} />
                    </div>

                </div>

            </div>


            {/* FINE PRIMA PARTE */}


            {/* INIZIO SECONDA PARTE */}

            <div className="row align-items-center mt-5">

                <div className="col-12 col-lg-6 text-center mt-2 mt-lg-0">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/400x250/CECECE.png"
                        alt="Hero preview"
                    />
                    <p className={`mt-3 ${styles.pServices}`}>BEFORE</p>
                </div>

                <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/400x250/CECECE.png"
                        alt="Hero preview"
                    />
                    <p className={`mt-3 ${styles.pServices}`}>AFTER</p>
                </div>

                <div className="col-12 col-lg-12 mt-5">

                    <h1 className="display-5 mt-5 mb-4 fw-bold">
                        Title mockup-1
                    </h1>

                    <p className={`lead my-4 ${styles.pAbout}`}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                    </p>


                </div>
            </div>

            <hr className={styles.hr} />


            <div className="row align-items-center mt-5">

                <div className="col-12 col-lg-6 text-center mt-2 mt-lg-0">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/400x250/CECECE.png"
                        alt="Hero preview"
                    />
                    <p className={`mt-3 ${styles.pServices}`}>BEFORE</p>
                </div>

                <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/400x250/CECECE.png"
                        alt="Hero preview"
                    />
                    <p className={`mt-3 ${styles.pServices}`}>AFTER</p>
                </div>

                <div className="col-12 col-lg-12 mt-5">

                    <h1 className="display-5 mt-5 mb-4 fw-bold">
                        Title mockup-2
                    </h1>

                    <p className={`lead my-4 ${styles.pAbout}`}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                    </p>


                </div>
            </div>

            <hr className={styles.hr} />

        </section>



    );
}
