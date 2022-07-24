import React from 'react';
import Link from 'next/link';

const HeroSectionTwo = () => {
  return (
    <section
      className="about-header-section ptb-120 position-relative overflow-hidden bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat center right",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading-wrap d-flex justify-content-between z-5 position-relative">
              <div className="about-content-left">
                <div className="about-info mb-5">
                  <h1 className="fw-bold display-5">
                    Un Equipo Que Encuentra La Mejor Solución
                  </h1>
                  <p className="lead">
                    Un trabajo colaborativo entre definir el problema y encontrar la mejor solución.{' '}
                  </p>
                  <Link href="/reuniones">
                    <a className="btn btn-soft-primary mt-4">Agendar Reunión</a>
                  </Link>
                </div> 
                <img src="/about1-img-2.png" alt="about" className="img-fluid about-img-first mt-5 rounded-custom shadow"/>
              </div>
              <div className="about-content-right">
              <img src="/about1-img-1.png" alt="about" className="img-fluid mb-5 rounded-custom shadow"/>
              <img src="/about1-img-3.png" alt="about" className="rounded-custom about-img-last shadow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>
  );
};

export default HeroSectionTwo;
