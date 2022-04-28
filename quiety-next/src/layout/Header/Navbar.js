import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import { navHome, navCompanyLinks, navCompanyPage } from '../../utils/data';
import dynamic from 'next/dynamic';

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${navDark ? 'position-absolute' : ''} w-100 `}
    >
      <nav
        className={`navbar navbar-expand-xl ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                // <Image
                //   width={36}
                //   height={32}
                //   src="../../../assets/images/logoDS.png"
                //   alt="logo"
                //   className="img-fluid logo-color"
                // />
                <div>
                  <h3>Design Systems</h3>
                </div>
                ) : (
                // <Image
                //   width={113}
                //   height={36}
                //   src="/logo-white.png"
                //   alt="logo"
                //   className="img-fluid logo-white"
                // />
                <div>
                  <h3 className="nav-title">Design Systems</h3>
                </div>
              )}
            </a>
          </Link>
          <a
            className="navbar-toggler position-absolute right-0 border-0"
            href="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </a>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
              <li>
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="nav-link">Nosotros</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="nav-link">Servicios</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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

              <li>
                <Link href="/">
                  <a className="nav-link">Precios</a>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Compañía
                </a>
                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                  <div className="dropdown-grid rounded-custom width-full">
                    <div className="dropdown-grid-item">
                    <h6 className="drop-heading">Links Usados</h6>
                      {navCompanyLinks.map((navLink, i) => (
                        <div key={i + 1}>
                          <Link href={navLink.href}>
                            <a className="dropdown-link px-0">
                              <i className="me-1">{navLink.icon}</i>
                              <span className="drop-title mb-0">{navLink.title} </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-grid-item radius-right-side bg-light">
                      <h6 className="drop-heading">Páginas Utiles</h6>
                      {navCompanyPage.map((navPage, i) => (
                        <div key={i + 1}>
                          <Link href={navPage.href}>
                            <a className="dropdown-link">
                              <i className="me-1">{navPage.icon}</i>
                              <span className="drop-title mb-0">{navPage.title} </span>
                            </a>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={121}
                    height={36}
                    src="/logo-color.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {ssr : false});
