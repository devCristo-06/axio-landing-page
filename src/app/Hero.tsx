import styles from "./page.module.scss";

export default function Hero() {
    return (
        <section className="container mt-5 py-5">
            <div className="row align-items-center">

                <div className="col-12 col-lg-6">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        Welcome user
                    </p>

                    <h1 className="display-5 fw-bold">
                        Launch your landing page
                    </h1>

                    <p className={`lead ${styles.pHero}`}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lectus consectetur lorem sit cursus adipiscing odio adipiscing eget pretium.
                        Velit arcu purus eu magna orci mauris suspendisse quis.
                    </p>

                    <button className={`btn px-4 py-2 ${styles.btnHero}`}>
                        Learn more
                    </button>
                </div>

                <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/500x350/CECECE.png"
                        alt="Hero preview"
                    />
                </div>

            </div>
        </section>
    );
}
