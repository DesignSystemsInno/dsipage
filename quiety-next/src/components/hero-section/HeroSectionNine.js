/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import VideoModal from '../common/VideoModal';
import HeroTitle from '../common/HeroTitle';
import { FaRegCheckCircle } from 'react-icons/fa';

const HeroSectionNine = () => {
  return (
    <>
      <section
      className="hero-section ptb-100 text-white bg-dark"
    >
      <div className="container">
        <div className="row justify-content-center text-center text-lg-center align-items-center">
          <div className="col-lg-4 col-md-10">
            <div className="hero-content-wrap mt-0 mt-lg-0 mt-xl-0">
              <div className="mb-4">
                <img
                  src="/screen/kidwayicon2.png"
                  alt="awards"
                  className="w-25"
                  />
              </div>
              <div className="m-3">
                <HeroTitle
                  title="KidWay"
                  desc="¡Un camino seguro!"
                />
                <p>Aplicación para visualizar el transporte escolar.</p>
              </div>
              <div
                className="action-btns mt-5"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                {/* <Link href="https://play.google.com/store/apps/details?id=com.camilogalvis.coway">
                  <a className="btn btn-primary me-3 mb-3">Descargar</a>
                </Link> */}
                <Link href="/politics-kidway">
                  <a className="btn btn-outline-light mb-3">Políticas & Condiciones</a>
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
                    Proximamente en la PlayStore
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
          <div className="col-lg-8 col-md-8">
            <div
              className="position-relative mt-5 me-5"
              style={{
                backgroundImage: 'url(/shape/shape-bg-3.svg)',
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <ul className="position-absolute animate-element parallax-element shape-service">
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
              </ul>
              <img
                src="/screen/kidway-hand.png"
                alt="hero"
                className="img-fluid position-relative z-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSectionNine;
