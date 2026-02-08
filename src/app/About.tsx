import styles from "./page.module.scss";

export default function About() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-12 col-lg-12 mt-5">
                    <p className={`text-secondary ${styles.txtGray}`}>
                        About us
                    </p>

                    <h1 className="display-5 fw-bold">
                        AXIO TEAM
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


                <div className="col-12 col-lg-12 text-center mt-4 mt-lg-5">
                    <img
                        className="img-fluid rounded"
                        src="https://dummyimage.com/900x350/CECECE.png"
                        alt="Hero preview"
                    />
                </div>

            </div>
        </section>
    );
}
