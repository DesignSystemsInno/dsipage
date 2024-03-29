import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import Footer from '@layout/Footer/Footer';
import FaqThree from '@components/faq/FaqThree';
import PriceTwo from '@components/pricing/PriceTwo';
import FeatureSix from '@components/features/FeatureSix';
import QuickSupport from '@components/support/QuickSupport';
import FeatureImgFive from '@components/features/FeatureImgFive';
import FeatureImgFour from '@components/features/FeatureImgFour';
import TestimonialTwo from '@components/testimonial/TestimonialTwo';
import HeroSectionTwo from '@components/hero-section/HeroSectionTwo';
import HeroSectionSeven from '@components/hero-section/HeroSectionSeven';
import WorkProcessThree from '@components/workprocess/WorkProcessThree';

//this is for app landing demo

const AppLandingFour = () => {
  return (
    <Layout title="Coway">
      <Navbar />
      <HeroSectionSeven />
      <FeatureSix />
      {/* <FeatureImgFour />
      <FeatureImgFive />
      <WorkProcessThree />
      <PriceTwo />
      <FaqThree />
      <TestimonialTwo />
      <QuickSupport /> */}
      <Footer />
    </Layout>
  );
};

export default AppLandingFour;
