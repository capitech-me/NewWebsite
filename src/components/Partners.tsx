import { motion } from 'framer-motion';
import { Users, Award, Globe2, TrendingUp } from 'lucide-react';

const partners = [
  { name: 'Microsoft', category: 'Cloud & Software', description: 'Enterprise cloud solutions, Azure services, and Microsoft 365 implementations', logo: 'M', color: 'from-blue-500/10 to-blue-600/10', borderColor: 'hover:border-blue-500/30' },
  { name: 'Cisco', category: 'Network Infrastructure', description: 'Enterprise networking, security, and collaboration solutions', logo: 'C', color: 'from-cyan-500/10 to-cyan-600/10', borderColor: 'hover:border-cyan-500/30' },
  { name: 'Dell Technologies', category: 'Hardware & Storage', description: 'Servers, storage systems, and enterprise computing infrastructure', logo: 'D', color: 'from-blue-600/10 to-indigo-600/10', borderColor: 'hover:border-blue-400/30' },
  { name: 'Huawei', category: 'ICT Solutions', description: 'Telecommunications, enterprise networks, and cloud computing', logo: 'H', color: 'from-red-500/10 to-red-600/10', borderColor: 'hover:border-red-500/30' },
  { name: 'HPE', category: 'Enterprise IT', description: 'Hybrid cloud, edge computing, and intelligent infrastructure', logo: 'H', color: 'from-green-500/10 to-green-600/10', borderColor: 'hover:border-green-500/30' },
  { name: 'Fortinet', category: 'Cybersecurity', description: 'Advanced threat protection and network security solutions', logo: 'F', color: 'from-orange-500/10 to-red-500/10', borderColor: 'hover:border-orange-500/30' },
  { name: 'VMware', category: 'Virtualization', description: 'Cloud infrastructure and virtualization platforms', logo: 'V', color: 'from-blue-500/10 to-cyan-500/10', borderColor: 'hover:border-blue-400/30' },
  { name: 'AWS', category: 'Cloud Services', description: 'Amazon Web Services cloud infrastructure and solutions', logo: 'A', color: 'from-amber-500/10 to-orange-500/10', borderColor: 'hover:border-amber-500/30' },
];

const benefits = [
  { icon: Users, title: 'Strategic Alliances', description: 'Deep partnerships with global technology leaders' },
  { icon: Award, title: 'Certified Expertise', description: 'Advanced certifications across all partner technologies' },
  { icon: Globe2, title: 'Global Reach', description: 'Worldwide partner ecosystems with local GCC support' },
  { icon: TrendingUp, title: 'Competitive Advantage', description: 'Preferred pricing and priority support' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 lg:py-32 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Powered by <span className="gradient-text">World-Class Partners</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit) => (
            <div key={benefit.title} className="glass-card p-6 text-center hover:border-green-500/20 transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Space Grotesk' }}>{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`glass-card p-8 h-full ${partner.borderColor} transition-all duration-500 hover:-translate-y-1 flex flex-col items-center justify-center`}>
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                  <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>{partner.logo}</span>
                </div>
                <h3 className="text-white font-bold text-center mb-1" style={{ fontFamily: 'Space Grotesk' }}>{partner.name}</h3>
                <div className="text-blue-400 text-xs text-center mb-2">{partner.category}</div>
                <p className="text-gray-500 text-xs text-center leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Partner Ecosystem Images */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Space Grotesk' }}>Audio-Visual Technology Partners</h3>
            <div className="glass-card p-6 overflow-hidden">
              <img src="https://www.capitech.me/gallery_gen/84389b3ae9f4ab001c6caa22d5701257_fit.jpg?ts=1754399942" alt="Audio-Visual Partners" className="w-full h-auto rounded-xl" loading="lazy" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Space Grotesk' }}>IT Infrastructure & Hardware Partners</h3>
            <div className="glass-card p-6 overflow-hidden">
              <img src="https://www.capitech.me/gallery/partners.jpg?ts=1754399942" alt="IT Infrastructure Partners" className="w-full h-auto rounded-xl" loading="lazy" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
