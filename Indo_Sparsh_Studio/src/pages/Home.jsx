import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeServices = lazy(() => import("./Home/Services.jsx"));
const HomeIndustries = lazy(() => import("./Home/Industries.jsx"));
const RecentProjects = lazy(() => import("./Home/RecentProjects.jsx"));
const HomeBlogs = lazy(() => import("./Home/Blogs.jsx"));
const ProjectDiscuss = lazy(() => import("./Home/ProjectDiscuss.jsx"));
const HomeTestomanies = lazy(() => import("./Home/Testimony.jsx"));
const HomeTechStack = lazy(() => import("./Home/TechSection.jsx"));

import LazySection from "./Home/LazySection.jsx";
import WebServe from "./Home/WebServe.jsx";
import OrbitSection from "./Home/OrbitSection.jsx";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  const header = document.querySelector(".cyber-header"); // your header class
  const headerHeight = header ? header.offsetHeight : 0;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export default function Home() {
  useEffect(() => {
    document.title = "Indo Sparsh Studio";
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return false;

    const header = document.querySelector(".cyber-header");
    const headerHeight = header ? header.offsetHeight : 0;

    const offsetPosition =
      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    return true;
  };

  useEffect(() => {
    if (!location.state?.scrollTo) return;

    scrollToSection(location.state.scrollTo);

    // Clear the state so it won't run again
    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  }, [location]);

  return (
    <>
      {/* ================= HERO ================= */}
      <WebServe />

      {/* ================= WE SERVE FOR ================= */}
      <OrbitSection />

      {/* ================= OUR SERVICES ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <HomeServices />
        </Suspense>
      </LazySection>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <HomeIndustries />
        </Suspense>
      </LazySection>

      {/* ================= OUR RECENT PROJECTS MARQUEE ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <RecentProjects />
        </Suspense>
      </LazySection>

      {/* ================= OUR RECENT BLOGS ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <HomeBlogs />
        </Suspense>
      </LazySection>

      {/* ================= PROJECTS WE DISCUSS ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <ProjectDiscuss />
        </Suspense>
      </LazySection>

      {/* ================= TESTIMONIALS ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <HomeTestomanies />
        </Suspense>
      </LazySection>

      {/* ================= TECHNOLOGY WE USED ================= */}
      <LazySection>
        <Suspense fallback={null}>
          <HomeTechStack />
        </Suspense>
      </LazySection>
    </>
  );
}
