import { createBrowserRouter } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      { path: "career", element: <Career /> },
      { path: "contact", element: <Contact /> },
      { path: "request-quote", element: <RequestAquote /> },
      { path: "digital-marketing", element: <DigitalMarketing /> },
      { path: "it-trends", element: <ITTrends /> },
      { path: "business-growth", element: <BusinessGrowth /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "future-ai", element: <FutureAI /> },
      
      // Services
      { path: "services/website-development", element: <WebsiteDevelopment /> },
      { path: "services/landing-page", element: <LandingPage /> },
      { path: "services/ecommerce-website", element: <EcommerceBuildStory /> },
      { path: "services/portfolio-website", element: <PortfolioWork /> },
      { path: "services/web-application", element: <WebAppBuildStory /> },
      { path: "services/ui-ux-design", element: <UiUxService /> },
      { path: "services/website-redesign", element: <WebsiteRedesign /> },
      { path: "services/content-hub", element: <ContentHub /> },
      { path: "services/seo-optimization", element: <OptimizationPage /> },
      { path: "services/profile-creation", element: <BusinessProfileCreation /> },
      { path: "services/digital-marketing", element: <DigitalMarketingShowcase /> },
      { path: "services/app-development", element: <AppDevHero /> },
      { path: "services/row-calling-data", element: <RowCallingData /> },
      { path: "services/maintenance-support", element: <MaintenanceSupportPage /> },
      { path: "services/branding-marketing", element: <BrandingMarketingPage /> },
      { path: "services/business-consultancy", element: <BusinessConsultancy /> },
      { path: "services/graphic-design", element: <GraphicDesignPage /> },
      
      // Supports
      
      { path: "faq", element: <FAQPage /> },
      { path: "tech-stack", element: <TechStackPage /> },
      { path: "ethics-policy", element: <EthicsPolicyPage /> },
      { path: "services/social-media", element: <SocialShowcase /> },

    ],
  },
]);

export default router;
