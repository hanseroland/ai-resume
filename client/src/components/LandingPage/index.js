import React from 'react';
import HeroSection from './HeroSection';
import ImageCarousel from './ImageCarousel';
import HighlightSection from './HighlightSection';
import AvantagesSection from './AvantagesSection';
import PossibilitiesSection from './PossibilitiesSection';
import WhyChooseUs from './WhyChooseUs';
import PricingOffers from './PricingOffers';
import ContactSection from './ContactSection';
import FloatingButton from '../buttons/FloatingButton';


const LandingPage = ({mode}) => {
  return (
    <>  
      <HeroSection mode={mode} />
      <HighlightSection mode={mode}/>
      <ImageCarousel mode={mode}/>
      <AvantagesSection mode={mode}/>
      <PossibilitiesSection mode={mode}/>
      <WhyChooseUs mode={mode}/>
      <PricingOffers  mode={mode}/>
      <FloatingButton/>
      
     {/* 
     <ContactSection mode={mode}/>
     <FeaturesSection />
      <BenefitsSection />
      <Testimonials />
      */}
    </>
  );
};

export default LandingPage;
