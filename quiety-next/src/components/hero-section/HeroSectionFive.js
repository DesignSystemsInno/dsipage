/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { FaRegCheckCircle } from 'react-icons/fa';
import HeroTitle from '../common/HeroTitle';

const HeroSectionFive = () => {
  return (
    <section
      className="hero-section ptb-100 text-white bg-dark"
    >
      <div className="container">
        <div className="row justify-content-center text-center text-lg-center align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <HeroTitle
                title="HiWay"
                desc="¡El tiempo es tuyo!"
              />

              <div
                className="action-btns mt-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Link href="/request-for-demo">
                  <a className="btn btn-primary me-3">Descargar</a>
                </Link>
                <Link href="/contact-us">
                  <a className="btn btn-outline-light">Politicas & Condiciones</a>
                </Link>
              </div>
              <ul
                className="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-center w-100 mt-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li className="nav-item">
                  <span>
                    <FaRegCheckCircle className="far me-2 text-primary" />
                    Gratis desde la PlayStore
                  </span>
                </li>
              </ul>

              {/* <div
                className="d-flex justify-content-center justify-content-lg-start mt-5"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <img
                  src="/awards-01.svg"
                  alt="awards"
                  className="me-4 img-fluid"
                />
                <img src="/awards-02.svg" alt="awards" className="img-fluid" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <img
                src="https://res.cloudinary.com/jairo/image/upload/v1650787179/DSIimages/hi_1_drd9pj.png"
                alt="shape"
                className="img-fluid position-absolute color-shape-1"
              />
            <div
              className="position-relative  mt-5"
              style={{
                backgroundImage: 'url(/shape/shape-bg-3.svg)',
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* <ul className="position-absolute animate-element parallax-element shape-service">
                <li className="layer" data-depth="0.03">
                  <img
                    src="/color-shape/image-4.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-1"
                  />
                </li>
                <li className="layer" data-depth="0.02">
                  <img
                    src="/color-shape/feature-2.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-2 z-5"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <img
                    src="/color-shape/feature-3.svg"
                    alt="shape"
                    className="img-fluid position-absolute color-shape-3"
                  />
                </li>
              </ul> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFive;
