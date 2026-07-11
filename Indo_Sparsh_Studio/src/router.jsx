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
      { path: "digital-marketing", element: <DigitalMarketing /> },
      { path: "it-trends", element: <ITTrends /> },
      { path: "business-growth", element: <BusinessGrowth /> },
      { path: "case-studies", element: <CaseStudies /> },
      { path: "future-ai", element: <FutureAI /> },
    ],
  },
]);

export default router;
