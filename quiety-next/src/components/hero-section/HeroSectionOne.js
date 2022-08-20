/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoModal from '../common/VideoModal';
import HubspotForm from 'react-hubspot-form'


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
                Nuestro Propósito
              </h4>
              <p className="lead">
                Usar la tecnología no como un fin,  sino como un medio, para solucionar problemas y mejorar la productividad en las organizaciones.
              </p>
              <div className="action-btn my-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/reuniones">
                  <a className="btn btn-primary">Agendar Reunión</a>
                </Link>
                {/* <VideoModal className="true" /> */}
              </div>

              <div>
                <p>
                  Para más información, déjanos tu correo.
                </p>
                <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                    <HubspotForm
                      portalId='21986855'
                      formId='42486796-a95e-4347-8669-200efa4f344a'
                      onSubmit={() => console.log('Submit!')}
                      onReady={(form) => console.log('Form ready!')}
                      loading={<div>Loading...</div>}
                    />
                  </form> 
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
