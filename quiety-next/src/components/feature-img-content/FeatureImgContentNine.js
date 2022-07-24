import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';

const FeatureImgContentSix = () => {
  return (
    <section className="app-two-feature-two pt-60 pb-120">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Para donde vamos</h4>
              <h2>Modelo de Dodo </h2>
              <h3> Dropshipping + Impresión bajo demanda. </h3>
              <p>
                ¿Tú eres un creativo?.
              </p>
              <p>
                Estamos construyendo una plataforma 
                donde  nos encargamos de producir, empaquetar, 
                almacenar y enviar para que los creativos como vos, 
                se centren en diseñar y vender de manera digital.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Image
                    width={1020}
                    height={626}
                    src="/dodo-modelo.png"
                    alt="feature"
                    className="img-fluid"
                  />
        </div>
      </div>
    </section>
    
  );
};

export default FeatureImgContentSix;
