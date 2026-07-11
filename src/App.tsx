import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  return (
    <main
      className="p-4 sm:p-6 md:p-8"
      style={{ overflowX: 'clip', background: 'transparent' }}
    >
      <div className="site-bg" aria-hidden="true" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
