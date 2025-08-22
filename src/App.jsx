import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
// Personal Branding Imports
import PersonalBranding from './pages/PersonalBranding/Services/Branding';
import FounderLedMarketing from './pages/PersonalBranding/FounderLedMarketing/Services/FounderLedMarketing';
import TechAndSaaS from './pages/PersonalBranding/TechAndSaaS/Services/TechAndSaaS';

// Content Engine Imports
import ContentEngine from './pages/ContentEngine/index';

// CMO Imports
import FCMO from './pages/CMO/Services/FCMO'
import MarTech from './pages/CMO/Services/MarTech/MarTech';
import AutoEV from './pages/CMO/Services/AutoEV/AutoEV'
import Startups from './pages/CMO/Services/Startups/Startups';
import Nonprofits from './pages/CMO/Services/Nonprofits/Nonprofits';
import Incubators from './pages/CMO/Services/Incubators/Incubators';

function App() {
  return (
    <div className="font-biennale">
      <Routes>
        {/* Redirect '/' to writtenlyhub.com */}
        {/* <Route path="/" element={<Navigate to="https://www.writtenlyhub.com/" replace />} /> */}

        {/* Personal Branding Routes */}
        <Route path="/personalbranding" element={<PersonalBranding />} />
        <Route path="/founderledmarketing" element={<FounderLedMarketing />} />
        <Route path="/personalbranding-saas" element={<TechAndSaaS />} />

        {/* Content Engine Route */}
        <Route path="/contentengine" element={<ContentEngine />} />

        {/* CMO Routes */}
        <Route path="/cmoaas-techsaas" element={<FCMO />} />
        <Route path="/cmoaas-martech" element={<MarTech />} /> 
        <Route path="/cmo-autoev" element={<AutoEV />} />
        <Route path="/cmo-startups" element={<Startups />} />
        <Route path="/cmo-nonprofits" element={<Nonprofits />} />
        <Route path="/cmo-incubators" element={<Incubators />} />


     {/* Redirect all unmatched routes check */}
        {/* <Route path="*" element={<Navigate to="https://www.writtenlyhub.com/" replace />} /> */}
      </Routes>
    </div>
  );
}

export default App;
