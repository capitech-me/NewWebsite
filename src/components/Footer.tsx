import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { name: 'Strategic Advisory', href: '#services' },
    { name: 'Data Center Solutions', href: '#services' },
    { name: 'ICT Infrastructure', href: '#services' },
    { name: 'Cloud Services', href: '#services' },
    { name: 'Security Solutions', href: '#services' },
    { name: 'Audio-Visual', href: '#services' },
  ],
  Solutions: [
    { name: 'Enterprise Infrastructure', href: '#solutions' },
    { name: 'Digital Transformation', href: '#solutions' },
    { name: 'Smart Security', href: '#solutions' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Process', href: '#' },
    { name: 'Partners', href: '#partners' },
    { name: 'Apps', href: '#apps' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#060d18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px] -mt-16"
        >
          <div className="bg-[#0a1628] rounded-2xl px-8 py-12 sm:px-12 sm:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                Let's Build Something Extraordinary
              </h3>
              <p className="text-gray-400 text-lg">Schedule a free consultation and discover how we can accelerate your digital journey.</p>
            </div>
            <a href="#contact" className="group flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a1628] font-bold rounded-xl hover:shadow-2xl transition-all duration-300">
              Start Your Project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>C</span>
              </div>
              <span className="text-white text-xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Capi<span className="gradient-text">tech</span></span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Strategic technology advisory firm delivering innovative solutions across management consulting, IT infrastructure, and audio-visual domains.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Capitech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
