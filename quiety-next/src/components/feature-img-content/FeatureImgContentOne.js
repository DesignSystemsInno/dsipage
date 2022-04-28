import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const FeatureImgContentOne = () => {
  return (
    <>
      <section className="why-choose-us ptb-120">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <span className="fas text-white">
                    <BsShieldCheck />
                  </span>
                </div>
                <h2>Los productos digitales como siempre los soñaste.</h2>
                <p>
                  Desde una pagina web informativa o un portal web que le permita
                  mejorar la visibilidad de su organización, hasta una aplicación web
                  con diferentes funcionalidades para automatizar los procesos
                  dentro de su empresa, Design Systems tiene la solución.
                </p>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Desarrollo bajo metodologías ágiles.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Interacción y colaboración personalizada con el cliente.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Desarrolladores dedicados tiempo completo.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Equipo interdisciplinario con enfoques innovadores en temas de desarollo de software. 
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Precios accesibles sin costos ocultos.
                  </li>
                </ul>
                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none"
                >
                  Saber Más Sobre Nosotros{' '}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={743}
                  height={743}
                  layout="responsive"
                  src="/shape/landing2.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <span className="fal text-white">
                    <FaHome />
                  </span>
                </div>
                <h2>Creamos la mejor experiencia para que sus usuarios
                    se sientan como en casa.
                </h2>
                <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Diseño de arquitectura de software para sus aplicaciones.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Programación Front-End.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Creación de prototipos.
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    UX/UI. 
                  </li>
                  <li className="py-1">
                    <FaCheckCircle className="fas me-2 text-primary mb-1" />
                    Desarrolladores Full-Stack.
                  </li>
                </ul>

                <a
                  href="about-us.html"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Saber Más Sobre Nosotros{' '}
                  <span className="far ms-2 mb-1">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <Image
                  width={743}
                  height={743}
                  layout="responsive"
                  src="/shape/landing33.png"
                  className="img-fluid"
                  alt="feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentOne;
