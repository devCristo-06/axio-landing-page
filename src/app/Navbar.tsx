import styles from "./page.module.scss"

export default function Navbar() {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
            <div className="container-fluid">
                <a className="navbar-brand my-2 ms-3" href="#"><img src="../../images/axioLogo.png" width="150" alt="Axio logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-lg-5 gap-lg-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#AboutUs">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
