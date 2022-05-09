import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout title="HiWay" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Políticas y Condiciones - HiWay"
        desc="A continuación encontrarás las Politicas de Seguridad y los Términos & Condiciones. También Términos y Condiciones."
      />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
