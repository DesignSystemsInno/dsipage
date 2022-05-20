import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InlineWidget } from "react-calendly";


const HeroSectionEight = () => {
  return (
    <section
    
      className="hero-section ptb-120 bg-purple text-white"
      style={{
        background:
          "url('/morado.jpg')no-repeat center center / cover",
      }}
    >
      <div className="container">
          
        <div className="row justify-content-xl-between align-items-center">
          <div className="col-lg-5 col-xl-5 col-xl-5 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h5 className="text-warning"></h5>
              <Image
                width={465}
                height={80}
                src="/dodologo.png"
                alt="app screen"
              />
              <p className="lead">
                Personalizar tu propia playera nunca fue tan fácil. 
                <br></br>
                Elige, Diseña, Ordena y Disfruta.<br></br>
                Muy pronto!.
              </p>
              <div className="action-btns mt-5">
                <Link href="#">
                  <a className="btn btn-outline-light">Empezar</a>
                </Link>
                {"   "}
                <Link href="/dodo-formulario-inversion">
                  <a className="btn btn-outline-light">Invertir en el proyecto</a>
                </Link>
              </div>

            </div>
          </div>
          <Image
                width={408}
                height={612}
                src="/mandodo2.png"
                alt="app screen"
              />
        </div>
        
      </div>
    </section>
  );
};

export default HeroSectionEight;
