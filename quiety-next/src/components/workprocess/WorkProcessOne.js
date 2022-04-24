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
              <h2>Seguimos nuestros procesos de trabajo </h2>
              <p>
              La clave para desarrollar una aplicación exitosa es combinar la funcionalidad que exigen los usuarios, con un diseño y
              una experiencia intuitivos que hagan que su uso sea lo más simple posible.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 col-md-12 order-1 order-lg-0">
            <div className="img-wrap">
              <Image
                width={526}
                height={621}
                src="/office-img-1.jpg"
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
                  <h3 className="h5 mb-2">Levantamiento de Requerimientos</h3>
                  <p>
                    Realizamos una investigación profunda en conjunto con el
                    cliente para obtener una comprensión completa del proyecto
                    y mediante la creación de un documento de definición de
                    requisitos describimos cada requisito del proyecto que nos
                    ayuda a mantener el proyecto en marcha
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
                  <h3 className="h5 mb-2">Arquitectura de la información y Wireframes</h3>
                  <p>
                    Organizamos el contenido y el flujo de una aplicación o sitio
                    web, y creamos estructuras de contenido utilizables a partir de
                    conjuntos complejos de información, desarrollando un
                    esquema para la organización del contenido, las relaciones de
                    información y la navegación.
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
                  <h3 className="h5 mb-2">Proceso de Descubrimiento</h3>
                  <p>
                    Durante el proceso de descubrimiento, investigamos a
                    fondo la información del usuario, las restricciones técnicas y
                    los objetivos y requisitos comerciales a través de entrevistas
                    con los usuarios y las partes interesadas, auditorías de
                    contenido y del sitio, análisis de tareas y mapeo del
                    ecosistema.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <GrImage />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 4</span>
                  <h3 className="h5 mb-2">Creación de Prototipos</h3>
                  <p>
                    El proceso de creación de prototipos es donde creamos,
                    revisamos y refinamos una simulación interactiva o un boceto
                    del producto final. Esto nos permite visualizar completamente
                    el resultado final del producto y medir su usabilidad antes de
                    su implementación final.

                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-4 mb-lg-0">
                <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                  <i className="far fa-2x">
                    {' '}
                    <FiAirplay />
                  </i>
                </div>
                <div className="icon-content">
                  <span className="text-primary h6">Paso 5</span>
                  <h3 className="h5 mb-2">Proceso de Diseño Visual</h3>
                  <p>
                  Centradas en el usuario para crear una experiencia de
                  usuario que vaya más allá de la estética. Nos enfocamos en la
                  funcionalidad y la usabilidad para diseñar una experiencia de
                  usuario basada en una comprensión explícita de los usuarios,
                  las tareas y los entornos.
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
