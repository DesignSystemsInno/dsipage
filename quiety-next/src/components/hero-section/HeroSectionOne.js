/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoModal from '../common/VideoModal';

const HeroSectionOne = () => {
  return (
    <section
      className="hero-section ptb-120 text-white bg-gradient"
      style={{ background: "url('/hero-dot-bg.png')no-repeat center right" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h4 className="fw-bold display-5">
              Diseño & Desarrollo de Software
              </h4>
              <p className="lead">
              A tu medida, para todo tipo de empresas: negocios locales, pequeñas, medianas (PYMES) y grandes.
              </p>
              <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/reuniones">
                  <a className="btn btn-primary">Agendar reunión</a>
                </Link>
                {/* <VideoModal className="true" /> */}
              </div>
              <div className="row justify-content-lg-start mt-60">
                <h6 className="text-white-70 mb-2">Proyectos:</h6>
                <div className="col-4 col-sm-3 my-2">
                  <h4>IoT Pandas</h4>
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <h4>HiWay</h4>
                </div>
                <div className="col-4 col-sm-3 my-2">
                  <h4>Dodo</h4>
                </div>
              </div>
            </div>
          </div>
                  
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative circle-shape-images">
            <div>
                  <img
                    src="/shape/landing1.png"
                    alt="shape"
                    className="w-100"
                  />
              </div>
              <ul className="position-absolute animate-element parallax-element circle-shape-list">
                <li className="layer" data-depth="0.04">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-2 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.04">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-3 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-4 hero-1"
                  />
                </li>
                <li className="layer" data-depth="0.03">
                  <img
                    src="/shape/circle-1.svg"
                    alt="shape"
                    className="circle-shape-item type-5 hero-1"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOne;
