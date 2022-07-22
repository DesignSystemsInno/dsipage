import React from 'react';
import Image from 'next/image';
import { FaBezierCurve } from 'react-icons/fa';
import { FiTruck, FiAirplay } from 'react-icons/fi';
import { RiNodeTree } from 'react-icons/ri';
import { GrGroup, GrImage } from 'react-icons/gr';

const WorkProcessOne = () => {
  return (
    <section className="work-process ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Procesos</h4>
              <h2>Nuestro algoritmo de transformación digital está basado en la 
                filosofía de: idear, crear, medir, aprender e iterar. </h2>
              <p>
              (Nos centramos en las necesidades de nuestros clientes y no en el producto como tal, 
              porque entendemos y está en nuestro ADN, que la tecnología es un medio y no un fin).
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={900}
                height={900}
                src="/build.png"
                alt="work process"
                className="img-fluid rounded-custom"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 order-0 order-lg-1">
            <ul className="work-process-list list-unstyled">
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <RiNodeTree />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 1</span>
                  <h3 className="h5 mb-2">Ideación</h3>
                  <p>
                    Utilizamos los mejores procesos de ideación para que
                    cualquier idea de software o tecnología sea creado, 
                    desarrollado o ejecutado de la mejor manera.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-3x">
                    {' '}
                    <FaBezierCurve />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 2</span>
                  <h3 className="h5 mb-2">Creación</h3>
                  <p>
                    Nos enfocamos en el desarrollo de productos mínimos viables (MVP's), 
                    que validen alternativas de solución a muy bajo costo y en tiempo cortos
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    <GrGroup />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 3</span>
                  <h3 className="h5 mb-2">Medición:</h3>
                  <p>
                    Usamos las mejores métricas cuantitativas y 
                    cualitativas para analizar e identificar los resultados claves de los MVP's
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
