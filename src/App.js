import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/margins-paddings.css";
import Version01 from "./components/pages/version-01";
import Version02 from "./components/pages/version-02";
import Version03 from "./components/pages/version-03";
import Version04 from "./components/pages/version-04";
import Version05 from "./components/pages/version-05";
import Version06 from "./components/pages/version-06";

import AOS from "aos";
import { useEffect } from "react";
import "./assets/css/aos.css";
import AllBlog from "./components/pages/all-blog";
import AllEvent from "./components/pages/all-event";
import BlogLeftSidebar from "./components/pages/blog-left-sidebar";
import BlogRightSidebar from "./components/pages/blog-right-sidebar";
import SingleBlog from "./components/pages/single-blog";
import SingleEvent from "./components/pages/single-event";
import footerData from "./data/footer.json";
import headerData from "./data/header.json";

import ContactPage from "./components/contactPage";
import AboutPage from "./components/aboutPage";
import PrivacyPolicy from "./components/pages/policies/privacyPolicy";
import Terms from "./components/pages/policies/terms";
import ServicePage from "./components/servicePage";
import PortfolioPage from "./components/portfolioPage";
import Career from "./components/career";
import ServiceLayout from "./components/pages/services/serviceLayout";

import EnergyAndPowerSolutions from "./components/pages/services/energyAndPowerSolutions";
import Health from "./components/pages/services/health";
import IndustrialAutomation from "./components/pages/services/industrialAutomation";
import IndustrialMachines from "./components/pages/services/industrialMachines";
import IndustrialSafety from "./components/pages/services/industrialSafety";
import IndustrialSolutions from "./components/pages/services/industrialSolutions";
import Infrastructural from "./components/pages/services/infrastructural";
import OilAndGasFields from "./components/pages/services/oilAndGasFields";
import RawMaterials from "./components/pages/services/rawMaterials";
import SmartLogistics from "./components/pages/services/smartLogistics";
import SurveillanceSolutions from "./components/pages/services/surveillanceSolutions";
import TradeSolutions from "./components/pages/services/tradeSolutions";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const { header, headerv2, headerv3 } = headerData;
  const { footer } = footerData;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="section-wrapper">
      <div id="preLoader"></div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Version02 header={header} footer={footer} />} />
          <Route path="v1" element={<Version01 header={header} footer={footer} />} />
          <Route path="v2" element={<Version02 header={header} footer={footer} />} />
          <Route path="v3" element={<Version03 header={header} footer={footer} />} />
          <Route path="v4" element={<Version04 headerv2={headerv2} footer={footer} />} />
          <Route path="v5" element={<Version05 headerv2={headerv2} footer={footer} />} />
          <Route path="v6" element={<Version06 headerv2={headerv2} footer={footer} />} />
          <Route
            path="single-blog"
            element={<SingleBlog headerv3={headerv3} footer={footer} />}
          />
          <Route path="all-blog" element={<AllBlog headerv3={headerv3} footer={footer} />} />
          <Route
            path="single-event"
            element={<SingleEvent headerv3={headerv3} footer={footer} />}
          />
          <Route path="all-event" element={<AllEvent headerv3={headerv3} footer={footer} />} />
          <Route
            path="blog-right-sidebar"
            element={<BlogRightSidebar headerv3={headerv3} footer={footer} />}
          />
          <Route
            path="blog-left-sidebar"
            element={<BlogLeftSidebar headerv3={headerv3} footer={footer} />}
          />

          <Route path="contact" element={<ContactPage header={header} footer={footer} />} />
          <Route path="about" element={<AboutPage header={header} footer={footer} />} />
          <Route path="services" element={<ServicePage header={header} footer={footer} />} />
          <Route path="portfolio" element={<PortfolioPage header={header} footer={footer} />} />
          <Route path="career" element={<Career header={header} footer={footer} />} />
          <Route path="privacy-policy" element={<PrivacyPolicy header={header} footer={footer} />} />
          <Route path="terms" element={<Terms header={header} footer={footer} />} />

          <Route element={<ServiceLayout header={header} footer={footer} />}>
            <Route path="energyAndPowerSolutions" element={<EnergyAndPowerSolutions header={header} footer={footer} />} />
            <Route path="health" element={<Health header={header} footer={footer} />} />
            <Route path="industrialAutomation" element={<IndustrialAutomation header={header} footer={footer} />} />
            <Route path="industrialMachines" element={<IndustrialMachines header={header} footer={footer} />} />
            <Route path="industrialSafety" element={<IndustrialSafety header={header} footer={footer} />} />
            <Route path="industrialSolutions" element={<IndustrialSolutions header={header} footer={footer} />} />
            <Route path="infrastructural" element={<Infrastructural header={header} footer={footer} />} />
            <Route path="oilAndGasFields" element={<OilAndGasFields header={header} footer={footer} />} />
            <Route path="rawMaterials" element={<RawMaterials header={header} footer={footer} />} />
            <Route path="smartLogistics" element={<SmartLogistics header={header} footer={footer} />} />
            <Route path="surveillanceSolutions" element={<SurveillanceSolutions header={header} footer={footer} />} />
            <Route path="tradeSolutions" element={<TradeSolutions header={header} footer={footer} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
