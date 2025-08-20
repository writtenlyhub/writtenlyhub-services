import { Layout } from './Components/Layout';
import Hero from './Components/Hero';
import SocialProof from './Components/SocialProof';
import PainPoints from './Components/PainPoints';
import ValueYouGet from './Components/ValueYouGet';
import ValueProposition from './Components/ValueProposition';
import TestimonialScroller from './Components/TestimonialScroller';
import OldNewWay from './Components/OldNewWay';
import WhyChooseUs from './Components/WhyChooseUs';
import ProofOfWork from './Components/ProofOfWork';
import WhoIsFor from './Components/WhoIsFor';
import MagneticLinkedIn from './Components/MagneticLinkedIn';
import WinsLookLike from './Components/WinsLookLike';
import RevenueNumbers from './Components/RevenueNumbers';
import WhyItWorks from './Components/WhyItWorks';
import CaseStudy from './Components/Casestudy';
import Founders from './Components/Founders';
import PricingCalculator from './Components/PricingCalculator';
import CMOCloser from './Components/CMOCloser';
import FAQ from './Components/FAQs';
import Footer from './Components/Footer';

export default function TechAndSaaS() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <PainPoints />
     <ValueProposition /> 
      <ValueYouGet />
      <OldNewWay />
      <WhyChooseUs />
      <ProofOfWork />
      <MagneticLinkedIn />
      <WhoIsFor />
      <WinsLookLike />
      <RevenueNumbers />
      <WhyItWorks />
      <CaseStudy />
      <Founders />
      <PricingCalculator />
      <CMOCloser />
      <FAQ />
      <Footer />
    </Layout>
  );
}
