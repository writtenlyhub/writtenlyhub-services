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
import CaseStudyFiMoney from './Components/CaseStudyFi';
import CaseStudyApollo from './Components/CaseStudyApollo';
import CaseStudyEverhope from './Components/CaseStudyEverhope';
import CaseStudyShriram from './Components/CaseStudyShriram';

export default function Branding() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <PainPoints />
      <GifWithBenefits />
      <ValueYouGet />
      <TestimonialCarousel />
      {/* <CaseStudyApollo /> */}
      <CaseStudyFiMoney />
      <ServicesOffering />
      <HowItWorks />
      <OldNewWay />
      {/* <CaseStudyEverhope /> */}
      <CaseStudyShriram />
      <MeasurableOutcomes />
      <Pricing />
      <CMOCloser />
      <FAQ />
      <Footer />
    </Layout>
  );
}
