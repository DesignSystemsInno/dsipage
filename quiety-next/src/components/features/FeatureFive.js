import React from 'react';
import Link from 'next/link';
import { ImMobile } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { BiExpand } from 'react-icons/bi';

import { BsArrowRight, BsCloudArrowDown } from 'react-icons/bs';

const FeatureFive = () => {
  return (
    <>
      <section className="app-two-feature ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading text-center">
                <h2>Diseña tu propio estilo.</h2>
                <p>
                 ¿Que esperas para empezar?.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-one me-3 mb-4 mb-md-0">
                      {/* <i className="far">
                        <FiEdit />
                      </i> */}
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">1. Elige</h3>
                      <p>
                      En el marketplace de templates de proveedores puedes elegir la prenda que más te guste. 
                      </p>
                      {/* <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          {' '}
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-two me-3 mb-4 mb-md-0">
                      {/* <i className="far">
                        <ImMobile />
                      </i> */}
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">2. Diseña</h3>
                      <p>
                      Deja salir esa imaginación que tienes dentro y crea tu propia prenda. You can Dodo it. 
                      </p>
                      {/* <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          {' '}
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      {/* <i className="far">
                        <BiExpand />
                      </i> */}
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">3. Ordena</h3>
                      <p>
                      Haz que las cosas pasen, convierte lo digital a lo real, genere la orden de tu diseño y espere que te llegue a la puerta de tu casa. Dodo can do it for you.
                      </p>
                      {/* <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-four me-3 mb-4 mb-md-0">
                      {/* <i className="far">
                        <BsCloudArrowDown />
                      </i> */}
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">4. Disfruta</h3>
                      <p>
                      Luce tu estilo siendo diferente a lo tradicional.
                      </p>
                      {/* <Link href="/single-service">
                        <a className="link-with-icon text-decoration-none">
                          View Details{' '}
                          <i className="far mb-1">
                            <BsArrowRight />
                          </i>
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFive;
