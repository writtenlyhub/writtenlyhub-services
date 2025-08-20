import { Layout } from './Components/Layout';
import Hero from './Components/Hero';
import SocialProof from './Components/SocialProof';
import PainPoints from './Components/PainPoints';
import SolutionsCarousel from './Components/SolutionsCarousel';
import CMOPComparison from './Components/CMOPComparison';
import CaseStudy1 from './Components/CaseStudy1';
import TestimonialCarousel from './Components/TestimonialCarousel';
import CaseStudy2 from './Components/CaseStudy2';
import OperationalExcellence from './Components/OperationalExcellence';
import MarketingJourney from './Components/MarketingJourney';

import USP from './Components/USP';
import AboutUs from './Components/AboutUs';
import WhoIsCMO from './Components/WhoIsCMO';
import Faq from './Components/Faq';
import CMOCloser from './Components/CMOCloser';
import Footer from './Components/Footer';


export default function AutoEV() {
  return (
    
    <Layout>
      <Hero />
      <SocialProof />
      <PainPoints />
      <CaseStudy1 />
      <SolutionsCarousel />
      <CMOPComparison />
      <TestimonialCarousel />
      <OperationalExcellence />
     <CaseStudy2 />
      <MarketingJourney />
      <USP />
      <AboutUs />
      <WhoIsCMO />
      
      <CMOCloser />
      <Faq />
      <Footer />
    </Layout>
  );
}

