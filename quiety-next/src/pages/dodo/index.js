import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import CtaTwo from '@components/cta/CtaTwo';
import CtaThree from '@components/cta/CtaThree';
import FeatureFive from '@components/features/FeatureFive';
import PromoWithVideo from '@components/promo/PromoWithVideo';
import TestimonialThree from '@components/testimonial/TestimonialThree';
import HeroSectionEight from '@components/hero-section/HeroSectionEight';
import FeatureImgContentSix from '@components/feature-img-content/FeatureImgContentSix';
import FeatureImgContentNine from '@components/feature-img-content/FeatureImgContentNine';
import FeatureImgContentSeven from '@components/feature-img-content/FeatureImgContentSeven';
import WorkProcessFour from '@components/workprocess/WorkProcessFour';


//this is for app landing two demo

const AppLandingTwoHome = () => {
  return (
    <Layout title="Dodo">
      <Navbar navDark />
      <HeroSectionEight />
      <WorkProcessFour />
      <FeatureImgContentSix />
      <FeatureImgContentNine />
      {/* <FeatureImgContentSeven /> */}
      {/* <CtaTwo /> */}
      {/* <TestimonialThree /> */}
      {/* <PromoWithVideo /> */}
      {/* <CtaThree /> */}
      <Footer footerLight />
    </Layout>
  );
};

export default AppLandingTwoHome;
