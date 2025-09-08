import React, { useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
// Personal Branding Imports
import PersonalBranding from './pages/PersonalBranding/Services/Branding';
import FounderLedMarketing from './pages/PersonalBranding/FounderLedMarketing/Services/FounderLedMarketing';
import TechAndSaaS from './pages/PersonalBranding/TechAndSaaS/Services/TechAndSaaS';
import HNI from './pages/PersonalBranding/HNI/Services/HNI';

// Content Engine Imports
import ContentEngine from './pages/ContentEngine/index';
import ContentEngineB2B from './pages/ContentEngineB2B/index';
import ContentEngineHealthcare from './pages/ContentEngineHealthcare/index';
import ContentEngineFinTech from './pages/ContentEngineFinTech/index';

// CMO Imports
import FCMO from './pages/CMO/Services/FCMO'
import MarTech from './pages/CMO/Services/MarTech/MarTech';
import AutoEV from './pages/CMO/Services/AutoEV/AutoEV'
import Startups from './pages/CMO/Services/Startups/Startups';
import Nonprofits from './pages/CMO/Services/Nonprofits/Nonprofits';
import Incubators from './pages/CMO/Services/Incubators/Incubators';

// tiny component to redirect to an external site
const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    // use replace to avoid keeping the redirected-from URL in history
    window.location.replace(url);
    // alternatively: window.location.href = url;
  }, [url]);

  return null; // nothing to render
};


function App() {
  return (
    <div className="font-biennale">
      <Routes>
        {/* Redirect '/' to writtenlyhub.com */}
        {/* <Route path="/" element={<Navigate to="https://www.writtenlyhub.com/" replace />} /> */}

        {/* Redirect root (/) to external site using a real browser redirect */}
        <Route path="/" element={<ExternalRedirect url="https://www.writtenlyhub.com" />} />


        {/* Personal Branding Routes */}
        <Route path="/personalbranding" element={<PersonalBranding />} />
        <Route path="/founderledmarketing" element={<FounderLedMarketing />} />
        <Route path="/personalbranding-saas" element={<TechAndSaaS />} />
        <Route path="/personalbranding-hni" element={<HNI />} />

        {/* Content Engine Route */}
        <Route path="/contentengine-nonprofits" element={<ContentEngine />} />
        <Route path="/contentengine-b2bsaas" element={<ContentEngineB2B />} />
        <Route path="/contentengine-healthcare" element={<ContentEngineHealthcare />} />
        <Route path="/contentengine-fintech" element={<ContentEngineFinTech />} />
        


        {/* CMO Routes */}
        <Route path="/cmoaas-techsaas" element={<FCMO />} />
        <Route path="/cmoaas-martech" element={<MarTech />} /> 
        <Route path="/cmoaas-autoev" element={<AutoEV />} />
        <Route path="/cmoaas-startups" element={<Startups />} />
        <Route path="/cmoaas-nonprofits" element={<Nonprofits />} />
        <Route path="/cmoaas-incubators" element={<Incubators />} />


     {/* Redirect all unmatched routes check */}
        {/* <Route path="*" element={<Navigate to="https://www.writtenlyhub.com/" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
