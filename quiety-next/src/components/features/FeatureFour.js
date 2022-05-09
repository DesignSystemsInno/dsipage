/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaHands, FaShieldAlt, FaRegClock } from 'react-icons/fa';

import SectionTitle from '../common/SectionTitle';

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <SectionTitle
                subtitle="Aplicación móvil"
                title="App de movilidad para el transporte público"
                description="HiWay, es una aplicación móvil que brinda un panorama conceptual de los vehículos de transporte público en tiempo real;
                es decir, los usuarios podrán experimentar los movimientos en vivo de cada vehículo (bus, colectivo o metro). De esta manera, se busca
                ahorrar el tiempo de cada persona & brindar más seguridad a la población en términos de espera."
                centerAlign
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad text-primary fa-2x">
                      <FaShieldAlt />
                    </i>
                  </div>
                  <h3 className="h5">Seguridad</h3>
                  <p className="mb-0">
                    La aplicación se identifica con las 
                    personas que en determinadas horas del día, especialmente en la madruga y en altas horas de la noche, se establecen a la espera
                    de tomar su ruta de transporte.
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad text-danger fa-2x">
                      <FaRegClock />
                    </i>
                  </div>
                  <h3 className="h5">Tranquilidad</h3>
                  <p className="mb-0">
                    El tiempo de espera ya no será una limitación, para aquellos usuarios que en sus actividades diarias,
                    toman el transporte público.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0">
                  <div className="feature-icon d-inline-block bg-success-soft rounded-circle mb-32">
                    <i className="fad text-success fa-2x">
                      <FaHands />
                    </i>
                  </div>
                  <h3 className="h5">Facilidad</h3>
                  <p className="mb-0">
                    La aplicación tiene un diseño amigable, por lo tanto, podrá ser usada desde jovenes hasta adultos mayores. 
                  </p>
                </div>

                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="/shape/dot-big-square.svg" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
