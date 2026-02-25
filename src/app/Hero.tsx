import styles from "./page.module.scss";

export default function Hero() {
    return (
        <section className={`container mt-5 py-5 ${styles.sectionReveal} ${styles.delay1}`} id="Home">
            <div className="row align-items-center">

                <div className="col-12 col-lg-6">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        Welcome user
                    </p>

                    <h1 className="display-5 fw-bold">
                        Launch your landing page
                    </h1>

                    <p className={`lead ${styles.pHero}`}>
                        Most people know they need an online presence, but they don’t know where to start.
                        Strategy, structure, design, messaging it can feel overwhelming.

                        We take your idea and turn it into a focused, high-converting landing page.

                        You tell us what you do.
                        We handle the structure, the design, and the development.

                        From concept to launch, every detail is built to communicate credibility and drive results.
                    </p>
                </div>

                <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
                    <img
                        className={`img-fluid rounded ${styles.floatImage}`}
                        src="https://dummyimage.com/500x350/CECECE.png"
                        alt="Hero preview"
                    />
                </div>

            </div>
        </section>
    );
}
