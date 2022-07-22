import React from 'react';
import Image from 'next/image';
import {
  FaBezierCurve,
  FaCheckCircle,
  FaCog,
  FaFingerprint,
} from 'react-icons/fa';

const FeatureImgContentTwo = ({ bgWhite }) => {
  return (
    <section className={`feature-section-two ptb-120 ${
      bgWhite ? 'bg-white' : 'bg-light'
    } `}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading">
              <h4 className="h5 text-primary">Nuestros  Principios</h4>
              <h2>La Esencia Que Mantiene En Marcha Los Propósitos de DSI</h2>
              <p>
                Adoptamos tres principios del mundo del DevOps 
                para desarrollar soluciones más colaborativas.
              </p>
              <ul className="list-unstyled mt-5">
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-primary rounded me-4">
                    <span className="fas text-white">
                      <FaBezierCurve className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Acción Centrada En El Cliente.</h3>
                    <p>
                      Ideamos, conceptualizamos, desarrollamos productos 
                      que realmente resuelvan problemas de los cliente.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-danger rounded me-4">
                    <span className="fas text-white">
                      <FaFingerprint className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Mejora Continua</h3>
                    <p>
                      Aceleramos la mejora de los productos & servicios, 
                      porque entendemos el poder de la innovación constante.
                    </p>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-4">
                  <div className="icon-box bg-dark rounded me-4">
                    <span className="fas text-white">
                      <FaCog className="fa-lg" />
                    </span>
                  </div>
                  <div className="icon-content">
                    <h3 className="h5">Trabajar Como Un Sólo Equipo</h3>
                    <p>
                      Unimos nuestro conocimiento y capacidades para trabajar 
                      como una única célula que facilite la total colaboración.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
              <ul className="img-overlay-list list-unstyled position-absolute">
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Ideas Significativas</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Resultados Claves</h6>
                </li>
                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                  <FaCheckCircle className="fas fa-2x me-2 text-primary mb-1" />
                  <h6 className="mb-0">Métricas Aceptables</h6>
                </li>
              </ul>
              <Image
                width={493}
                height={662}
                src="/feature2-img3.png"
                alt="feature image"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureImgContentTwo;
