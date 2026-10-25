import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Partners from './components/Partners';
import BusinessApps from './components/BusinessApps';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Stats />
      <Services />
      <Solutions />
      <Industries />
      <Partners />
      <BusinessApps />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
