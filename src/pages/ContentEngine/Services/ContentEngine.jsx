import { Layout } from './Components/Layout';
import Hero from './Components/Hero';
import SocialProof from './Components/SocialProof';
import PainPoints from './Components/PainPoints';
import GifWithBenefits from './Components/GifWithBenefits';
import ValueYouGet from './Components/ValueYouGet';
import TestimonialCarousel from './Components/TestimonialCarousel';
import ServicesOffering from './Components/ServicesOffering';
import HowItWorks from './Components/HowItWorks';
import OldNewWay from './Components/OldNewWay';
import CaseStudy from './Components/CaseStudy';
import Pricing from './Components/Pricing';
import MeasurableOutcomes from './Components/MeasurableOutcomes';
import CMOCloser from './Components/CMOCloser';
import FAQ from './Components/FAQs';
import Footer from './Components/Footer';

export default function Branding() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <PainPoints />
      <GifWithBenefits />
      <ValueYouGet />
      <TestimonialCarousel />
      <ServicesOffering />
      <HowItWorks />
      <OldNewWay />
      <CaseStudy />
      <Pricing />
      <MeasurableOutcomes />
      <CMOCloser />
      <FAQ />
      <Footer />
    </Layout>
  );
}
