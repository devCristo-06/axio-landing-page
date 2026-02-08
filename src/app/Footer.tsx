export default function Footer() {
    return (
        <footer className="py-5 bg-light">
            <div className="container-fluid px-4">

                {/* ROW 1 */}
                <div className="row align-items-center">
                    <div className="col-6">
                        <a href="#">
                            <img src="../../images/axioLogo.png" width="150" alt="Axio logo" />
                        </a>
                    </div>

                    <div className="col-6 text-end">
                        <p className="text-muted m-0">
                            Transform your ideas in reality
                        </p>
                    </div>
                </div>

                <hr className="my-4" />

                {/* ROW 2 */}
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex gap-3 mb-4">
                            <div className="p-4 bg-secondary rounded shadow-sm"></div>
                            <div className="p-4 bg-secondary rounded shadow-sm"></div>
                            <div className="p-4 bg-secondary rounded shadow-sm"></div>
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
