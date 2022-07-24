import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import PrivacyPoliticsCoWay from '@components/politics-projects/PrivacyPoliticsCoWay';
import TermsOfUseCoWay from '@components/politics-projects/TermsOfUseCoWay';

const PoliticsCoWay = () => {
  return (
    <Layout title="CoWay" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Políticas y Condiciones - CoWay"
        desc="A continuación encontrarás las Politicas de Seguridad y los Términos & Condiciones. También Términos y Condiciones."
      />
      <PrivacyPoliticsCoWay />
      <TermsOfUseCoWay />
      <Footer />
    </Layout>
  );
};

export default PoliticsCoWay;
