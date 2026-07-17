import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import ITTrends from "./pages/ITTrends";
import BusinessGrowth from "./pages/BusinessGrowth";
import CaseStudies from "./pages/CaseStudies";
import FutureAI from "./pages/FutureAI";
import { useLocation } from "react-router-dom";
import RequestAquote from "./pages/RequestAQuote";
import WebsiteDevelopment from "./pages/src/Footer/Services/WebsiteDevelopment";
import LandingPage from "./pages/src/Footer/Services/LandingPage";
import EcommerceBuildStory from "./pages/src/Footer/Services/EcommercePage";
import PortfolioWork from "./pages/src/Footer/Services/PortfolioWork";
import WebAppBuildStory from "./pages/src/Footer/Services/WebApplicationPage";
import UiUxService from "./pages/src/Footer/Services/UiUxPage";
import WebsiteRedesign from "./pages/src/Footer/Services/WebsiteRedesign";
import ContentHub from "./pages/src/Footer/Services/ContentHub";
import OptimizationPage from "./pages/src/Footer/Services/OptimizationPage";
import BusinessProfileCreation from "./pages/src/Footer/Services/BusinessProfileCreation";
import DigitalMarketingShowcase from "./pages/src/Footer/Services/DigitalMarketing";
import FAQPage from "./pages/src/Footer/Supports/FaqPage";
import TechStackPage from "./pages/src/Footer/Supports/TechStack";
import EthicsPolicyPage from "./pages/src/Footer/Supports/EthichsAndPolicies";
import SocialMediaHandlingPage from "./pages/src/Footer/Supports/SocialMediaPage";
import AppDevHero from "./pages/src/Footer/Services/AppDevelopment";
import SocialShowcase from "./pages/src/Footer/Services/SocialMediaPage";
import RowCallingData from "./pages/src/Footer/Services/RowCallingData";
import MaintenanceSupportPage from "./pages/src/Footer/Services/MaintenanceAndSupportPage";
import BrandingMarketingPage from "./pages/src/Footer/Services/BrandingAndMarketing";
import BusinessConsultancy from "./pages/src/Footer/Services/BusinessConsultancy";
import GraphicDesignPage from "./pages/src/Footer/Services/GraphicDesign";

export default function App() {
   
  const location = useLocation();
  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);
  return (
    <Layout>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/services">Services</Link> | <Link to="/blog">Blog</Link> |{" "}
        <Link to="/career">Career</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-quote" element={<RequestAquote />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/it-trends" element={<ITTrends />} />
        <Route path="/business-growth" element={<BusinessGrowth />} />
        <Route path="/case-studies" element={<CaseStudies />} />

        {/* Services */}
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/landing-page" element={<LandingPage />} />
        <Route path="/services/ecommerce-website" element={<EcommerceBuildStory />} />
        <Route path="/services/portfolio-website" element={<PortfolioWork />} />
        <Route path="/services/web-application" element={<WebAppBuildStory />} />
        <Route path="/services/ui-ux-design" element={<UiUxService />} />
        <Route path="/services/website-redesign" element={<WebsiteRedesign />} />
        <Route path="/services/content-hub" element={<ContentHub />} />
        <Route path="/services/seo-optimization" element={<OptimizationPage />} />
        <Route path="/services/profile-creation" element={<BusinessProfileCreation />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketingShowcase />} />
        <Route path="/services/app-development" element={<AppDevHero />} />
        <Route path="/services/row-calling-data" element={<RowCallingData />} />
        <Route path="/services/maintenance-support" element={<MaintenanceSupportPage />} />
        <Route path="/services/branding-marketing" element={<BrandingMarketingPage />} />
        <Route path="/services/business-consultancy" element={<BusinessConsultancy />} />
        <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
        {/* Supports */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/ethics-policy" element={<EthicsPolicyPage />} />
        <Route path="/services/social-media" element={<SocialShowcase />} />

      </Routes>
    </Layout>
  );
}
