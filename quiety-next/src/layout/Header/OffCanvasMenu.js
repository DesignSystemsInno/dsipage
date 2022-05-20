import React from 'react';
import Link from 'next/link';
import { navCompanyLinks, navCompanyPage, navHome } from '../../utils/data';

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
              </li>
              <li>
                {/* <Link href="/pricing"> */}
                <Link href="/#nosotros">
                  <a className="nav-link">Nosotros</a>
                </Link>
              </li>
              <li>
                {/* <Link href="/services"> */}
                <Link href="/#servicios">
                  <a className="nav-link">Servicios</a>
                </Link>
              </li>
              <li>
                {/* <Link href="/pricing"> */}
                {/* <Link href="/">
                  <a className="nav-link">Precios</a>
                </Link> */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex justify-content-between"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Proyectos
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-half">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Proyectos DSI</h6>
                      {navHome.map((navH, i) => (
                        <span key={i + 1}>
                          <Link href={navH.href}>
                            <a className="dropdown-link">
                              <span className="demo-list bg-primary rounded text-white fw-bold">
                                {i + 1}
                              </span>
                              <span className="dropdown-info mb-0">
                                <span className="drop-title">{navH.title}</span>
                                <span>{navH.info}</span>
                              </span>
                            </a>
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex justify-content-between"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                      <h6 className="drop-heading">Useful Links</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <span key={i + 1}>
                          <Link href={navLink.href}>
                            <a className="dropdown-link px-0">
                              <span className="me-2">{navLink.icon}</span>
                              <span className="drop-title mb-0">{navLink.title} </span>
                            </a>
                          </Link>
                        </span>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Utility Pages</h6>
                      {navCompanyPage.map((navPage, i) => (
                        <span key={i + 1}>
                          <Link href={navPage.href}>
                            <a className="dropdown-link">
                              <span className="me-2">{navPage.icon}</span>
                              <span className="drop-title mb-0">{navPage.title} </span>
                            </a>
                          </Link>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}
      </ul>
      {/* <div className="action-btns mt-4 ps-3">
        <Link href="/login">
          <a className="btn btn-outline-primary text-decoration-none me-2">Sign In</a>
        </Link>
        <Link href="/request-demo">
          <a className="btn btn-primary">Get Started</a>
        </Link>
      </div> */}
    </div>
  );
};

export default OffCanvasMenu;
