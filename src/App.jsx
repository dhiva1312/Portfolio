import React, { Suspense, lazy } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

// Lazy load heavy sections
const Experience = lazy(() => import("./components/experience/Experience"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />

      {/* Suspense fallback until component loads */}
      <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
