import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Layout from "./layout/Layout";
// Main Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const RequestAquote = lazy(() => import("./pages/RequestAQuote"));

const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const ITTrends = lazy(() => import("./pages/ITTrends"));
const BusinessGrowth = lazy(() => import("./pages/BusinessGrowth"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const FutureAI = lazy(() => import("./pages/FutureAI"));

// Services
const WebsiteDevelopment = lazy(
  () => import("./pages/src/Footer/Services/WebsiteDevelopment"),
);

const PortfolioWork = lazy(
  () => import("./pages/src/Footer/Services/PortfolioWork"),
);

const WebAppBuildStory = lazy(
  () => import("./pages/src/Footer/Services/WebApplicationPage"),
);

const UiUxService = lazy(() => import("./pages/src/Footer/Services/UiUxPage"));

const ContentHub = lazy(() => import("./pages/src/Footer/Services/ContentHub"));

const BusinessProfileCreation = lazy(
  () => import("./pages/src/Footer/Services/BusinessProfileCreation"),
);

const DigitalMarketingShowcase = lazy(
  () => import("./pages/src/Footer/Services/DigitalMarketing"),
);

const AppDevHero = lazy(
  () => import("./pages/src/Footer/Services/AppDevelopment"),
);

const SocialMediaManagement = lazy(
  () => import("./pages/src/Footer/Services/SocialMediaPage"),
);

const RowCallingData = lazy(
  () => import("./pages/src/Footer/Services/RowCallingData"),
);

const BrandingMarketingPage = lazy(
  () => import("./pages/src/Footer/Services/BrandingAndMarketing"),
);

const BusinessConsultancy = lazy(
  () => import("./pages/src/Footer/Services/BusinessConsultancy"),
);

const GraphicDesignPage = lazy(
  () => import("./pages/src/Footer/Services/GraphicDesign"),
);

// Supports
const FAQPage = lazy(() => import("./pages/src/Footer/Supports/FaqPage"));

const TechStackPage = lazy(
  () => import("./pages/src/Footer/Supports/TechStack"),
);

const EthicsPolicyPage = lazy(
  () => import("./pages/src/Footer/Supports/EthichsAndPolicies"),
);

const SocialMediaHandlingPage = lazy(
  () => import("./pages/src/Footer/Supports/SocialMediaPage"),
);

// Policies
const PrivacyPolicyPage = lazy(
  () => import("./pages/src/Footer/Policies/PrivacyPolicy"),
);

const TermsConditionsPage = lazy(
  () => import("./pages/src/Footer/Policies/TermConditionPage"),
);

const RefundPolicyPage = lazy(
  () => import("./pages/src/Footer/Policies/RefundPolicyPage"),
);

const ModernSlaveryActPage = lazy(
  () => import("./pages/src/Footer/Policies/ModernSlaveryActPage"),
);

const RecruitmentPolicyPage = lazy(
  () => import("./pages/src/Footer/Policies/RecruitmentPolicyPage"),
);

const SitemapPage = lazy(
  () => import("./pages/src/Footer/Policies/SitemapPage"),
);

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

      <Suspense fallback={<div className="page-loader">Loading...</div>}>
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
          <Route path="/future-ai" element={<FutureAI />} />

          {/* Services */}

          <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />

          <Route
            path="/services/portfolio-website"
            element={<PortfolioWork />}
          />

          <Route
            path="/services/web-application"
            element={<WebAppBuildStory />}
          />

          <Route path="/services/ui-ux-design" element={<UiUxService />} />

          <Route path="/services/content-hub" element={<ContentHub />} />

          <Route
            path="/services/profile-creation"
            element={<BusinessProfileCreation />}
          />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingShowcase />}
          />

          <Route path="/services/app-development" element={<AppDevHero />} />

          <Route path="/services/social-media" element={<SocialMediaManagement />} />

          <Route
            path="/services/row-calling-data"
            element={<RowCallingData />}
          />

          <Route
            path="/services/branding-marketing"
            element={<BrandingMarketingPage />}
          />

          <Route
            path="/services/business-consultancy"
            element={<BusinessConsultancy />}
          />

          <Route
            path="/services/graphic-design"
            element={<GraphicDesignPage />}
          />

          {/* Supports */}

          <Route path="/faq" element={<FAQPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          <Route path="/ethics-policy" element={<EthicsPolicyPage />} />
          <Route
            path="/social-media-handling"
            element={<SocialMediaHandlingPage />}
          />

          {/* Policies */}

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsConditionsPage />}
          />

          <Route path="/refund-policy" element={<RefundPolicyPage />} />

          <Route
            path="/modern-slavery-act"
            element={<ModernSlaveryActPage />}
          />

          <Route
            path="/recruitment-policy"
            element={<RecruitmentPolicyPage />}
          />

          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
