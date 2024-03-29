import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { RiSettings4Fill, RiChatCheckLine } from 'react-icons/ri';
import { BsCodeSlash, BsTvFill,  } from 'react-icons/bs';

const FeatureOne = () => {
  return (
    <>
      <section className="feature-promo ptb-120 bg-light" id="servicios">
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                title="Servicios Para La Nueva Era Digital."
                description="Estamos a la vanguardia del desarrollo de software."
                centerAlign
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-primary">
                  <RiSettings4Fill className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Consultoría</h3>
                  <p>
                    Ofrecemos asesoramiento estratégico sobre el uso, implementación y mejora  de la tecnología para alcanzar objetivos.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-danger">
                  <RiChatCheckLine className="fa-2x text-white" />
                </div>
                <div className="feature-info-wrap">
                  <h3 className="h5">Conceptualización</h3>
                  <p>
                    Ofrecemos la conceptualización de diferentes productos 
                    digitales para flexibilizar la ejecución y el desarrollo de los mismos.
                    {' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-promo p-lg-5 p-3 text-center mt-4">
                <div className="feature-icon icon-center pb-5 rounded-custom bg-dark">
                  <BsCodeSlash className="text-white fa-2x" />
                </div>
                <div className="feature-info-wrap">
                    <h3 className="h5">Desarrollo</h3>
                    <p>
                    Ofrecemos desarrollos de software, desde una página web hasta
                    una aplicación móvil para dar soluciones a problemáticas planteadas.
                      {' '}
                    </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row pt-60">
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-danger-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Utilize your software data</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      {' '}
                      Start For Free
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    src="/cta-img-1.png"
                    alt="cta"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4">
              <div className="position-relative d-flex flex-column h-100 flex-wrap bg-primary-soft p-5 rounded-custom">
                <div className="cta-left-info mb-2">
                  <h5>Get real time updated anytime</h5>
                  <p>
                    Progressively reinvent models and niche revolutionary
                    benefits for integrated niches.{' '}
                  </p>
                </div>
                <div className="action-btns mt-auto">
                  <Link href="/request-for-demo">
                    <a className="btn btn-outline-primary btn-sm">
                      Start For Free
                    </a>
                  </Link>
                </div>
                <div className="cta-img position-absolute right-0 bottom-0">
                  <Image
                    width={223}
                    height={223}
                    layout="responsive"
                    src="/cta-img-2.png"
                    alt="cta img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default FeatureOne;
