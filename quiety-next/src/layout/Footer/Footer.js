import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaFacebook, FaGithub, FaDribbble, FaTwitter, FaInstagram} from 'react-icons/fa';
import HubspotForm from 'react-hubspot-form'
import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from '../../utils/data';
import Rating from '../../components/common/Rating';

const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>
          <div
          className={`footer-top ptb-120 ${footerLight ? 'footer-light' : 'bg-dark'} ${
            footerGradient ? 'bg-gradient' : ''
          }  text-white`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  {/* <div className="footer-single-col mb-5 d-flex justify-content-center">
                    {footerLight ? (
                      <Image
                      width={100}
                      height={100}
                      src="/logoDS2.png"
                      alt="logo"
                      className="img-fluid logo-white"
                    />
                    ) : (
                      <Image
                        width={100}
                        height={100}
                        src="/logoDS2.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      />
                    )}
                  </div> */}
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
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  {/* <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Primary Pages</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                  <div className="col-md-8 col-lg-6 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Contenido: </h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    {/* <div className="footer-single-col">
                      <h3>Template</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                    {/* <Image
                        width={150}
                        height={150}
                        src="/logoDS2.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          

          <div
            className={`footer-bottom ${
              footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
          >
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-7 col-lg-7">
                  <div className="copyright-text">
                    <p className="mb-lg-0 mb-md-0">
                      &copy; 2022 Todos los derechos reservados. Designed By{' '}           
                        Design Systems Inno
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="footer-single-col text-start text-lg-end text-md-end">
                    <ul className="list-unstyled list-inline footer-social-list mb-0">
                      {/* <li className="list-inline-item">
                        <Link href="#">
                          <a>
                            <FaFacebook />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="#">
                          <a>
                            <FaTwitter />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="#">
                          <a>
                            <FaDribbble />
                          </a>
                        </Link>
                      </li> */}
                      <li className="list-inline-item">
                        <Link href="https://github.com/DesignSystemsInno">
                          <a>
                            <FaGithub />
                          </a>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link href="https://instagram.com/designsystemsinno?igshid=YmMyMTA2M2Y=">
                          <a>
                            <FaInstagram />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
