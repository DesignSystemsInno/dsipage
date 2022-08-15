import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import PrivacyPoliticsKidWay from '@components/politics-projects/PrivacyPoliticsKidWay';
import TermsOfUseKidWay from '@components/politics-projects/TermsOfUseKidWay';

const PoliticsHiWay = () => {
  return (
    <Layout title="KidWay" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Políticas y Condiciones - KidWay"
        desc="A continuación encontrarás las Politicas de Seguridad y los Términos & Condiciones. También Términos y Condiciones."
      />
      <PrivacyPoliticsKidWay />
      <TermsOfUseKidWay />
      <Footer />
    </Layout>
  );
};

export default PoliticsHiWay;
