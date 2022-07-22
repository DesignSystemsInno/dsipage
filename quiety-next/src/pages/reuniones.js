import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@layout/Layout';
import HubspotForm from 'react-hubspot-form'
import { InlineWidget } from "react-calendly";

const reuniones = () => {
  return (
    <Layout title="dodo-formulario-inversion" desc="This is login page">
      <section
        className="sign-up-in-section"
      >
        <div className="container">
          <Link href="/">
                <a className="btn btn-primary">Regresar</a>
          </Link>
        
          <InlineWidget url="https://calendly.com/dsinno/30min?month=2022-05" />
          
        </div>
      </section>
    </Layout>
  );
};

export default reuniones;
