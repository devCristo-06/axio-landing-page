export default function Footer() {
    return (
        <footer className="py-5 bg-light" id="Footer">
            <div className="container-fluid px-4">

                {/* ROW 1 */}
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <a href="#">
                            <img src="../../images/axioLogo.png" width="150" alt="Axio logo" />
                        </a>
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
                        <p className="text-muted m-0">
                            Transform your ideas in reality
                        </p>
                    </div>
                </div>

                <hr className="my-4" />

                {/* ROW 2 */}
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <div className="d-flex mb-4 justify-content-center justify-content-lg-start flex-wrap">
                            <div className="p-4 bg-transparent rounded"><a href="https://it.fiverr.com/sellers/axio_team/"><img src="images/fi_logo.png" width="40" alt="Fiverr logo" /></a></div>
                            <div className="p-4 bg-transparent rounded"><a href="https://www.linkedin.com/in/axio-team-847a283aa/"><img src="images/lk_logo.png" width="40" alt="LinkedIn logo" /></a></div>
                            <div className="p-4 bg-transparent rounded"><a href="https://www.tiktok.com/@axioteam"><img src="images/tk_logo.png" width="40" alt="TikTok logo" /></a></div>
                        </div>

                        <p className="text-muted m-0">
                            All Rights Reserved.
                        </p>
                    </div>

                    <div className="col-12 col-lg-6 text-lg-end mt-4 mt-lg-0">
                        <h2 className="fw-bold text-secondary">
                            What are you waiting?
                        </h2>

                        <p className="text-muted mt-3 m-0">
                            Copyright © 2026 | AXIO Team
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
