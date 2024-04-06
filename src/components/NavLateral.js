import React from 'react';

import styles from "../BootStrap/bootstrap-5.3.2-examples/assets/dist/css/bootstrap.min.css"

function ComponenteNav() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'var(--bs-link-hover-color)' }}>
            <link rel="stylesheet" href="../../src/BootStrap/bootstrap-5.3.2-examples/assets/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" />

            <div className="lateralNav">
                <nav className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark">
                    <div className="container-fluid d-flex flex-column p-0">
                        <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor">
                                    <path d="M80 80V192c0 2.5 1.2 4.9 3.2 6.4l51.2 38.4c6.8 5.1 10.4 13.4 9.5 21.9L133.5 352H85.2l9.4-85L54.4 236.8C40.3 226.2 32 209.6 32 192V72c0-22.1 17.9-40 40-40H376c22.1 0 40 17.9 40 40V192c0 17.6-8.3 34.2-22.4 44.8L353.4 267l9.4 85H314.5l-10.4-93.3c-.9-8.4 2.7-16.8 9.5-21.9l51.2-38.4c2-1.5 3.2-3.9 3.2-6.4V80H304v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H192v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V80H80zm4.7 384H363.3l-16.6-32H101.2L84.7 464zm271.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H72.8C50.2 512 32 493.8 32 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C68.5 390.7 79.5 384 91.5 384h265zM208 288c-8.8 0-16-7.2-16-16V224c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 8.8-7.2 16-16 16H208z"></path>
                                </svg>
                            </div>
                            <div className="sidebar-brand-text mx-3">
                                <span>Korrenet</span>
                            </div>
                        </a>
                        <p></p>
                        <hr className="sidebar-divider my-0" />
                        <ul className="navbar-nav text-light" id="accordionSidebar">
                            <li className="nav-item"></li>
                            <li className="nav-item"></li>
                            <li className="nav-item dropdown">
                                <a className="btn btn-success" href="/Formulario">
                                    <i className="fas fa-user-circle"></i>RamoProducto
                                </a>
                            </li>
                            <p></p>
                            <li>
                                <a className="btn btn-success" href="/Cobertura">
                                    <i className="fas fa-user-circle"></i>Cobertura</a>
                            </li>
                        </ul>
                        <div className="text-center d-none d-md-inline">
                            <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default ComponenteNav;
