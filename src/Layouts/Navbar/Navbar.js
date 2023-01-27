import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return (
        <div>

            <nav className="navbar mt-2 navbar-expand-lg">
                <div className="container">
                    <a className=" nav-link" href="/#">Blog-Project</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-lg-0"></ul>

                        <ul className="navbar-nav  mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#">Əsas Səhifə</a>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link">Haqqımızda</a>
                            </li>

                            <div className="dropdown ">
                                <a style={{ 'cursor': 'pointer' }} className="nav-link dropdown-toggle" href='/#' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {localStorage.getItem("userData")}
                                </a>

                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                                    <li className="nav-item dropdown-item">
                                        <a href="/#" className="nav-link" onClick={handleLogout}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                </div >
            </nav >
        </div >
    )
}

export default Navbar