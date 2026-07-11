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
        <Route path="/future-ai" element={<FutureAI />} />
      </Routes>
    </Layout>
  );
}
