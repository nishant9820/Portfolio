import {
  About,
  Contact,
  Experience,
  Blogs,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const Elements = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Blogs />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Elements;
