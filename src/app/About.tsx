import styles from "./page.module.scss";

export default function About() {
    return (
        <section className={`container py-5 ${styles.sectionReveal} ${styles.delay2}`} id="AboutUs">
            <div className="row align-items-center">

                <div className="col-12 col-lg-12 mt-5">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        About us
                    </p>

                    <h1 className="display-5 fw-bold">
                        AXIO TEAM
                    </h1>

                    <p className={`lead ${styles.pAbout}`}>
                        We are a two-person team combining development and design expertise.

                        One developer focused on building fast, responsive, technically solid landing pages.

                        One graphic designer specialized in branding, visual identity, and impactful design.

                        By combining strategy, design, and development, we deliver complete and professional digital solutions.

                        No unnecessary layers.
                        No agency overhead.
                        Just direct collaboration and attention to detail.
                    </p>


                </div>


                <div className="col-12 col-lg-12 text-center mt-4 mt-lg-5">
                    <img
                        className={`img-fluid rounded ${styles.floatImage}`}
                        src="https://dummyimage.com/900x350/CECECE.png"
                        alt="Hero preview"
                    />
                </div>

            </div>
        </section>
    );
}
