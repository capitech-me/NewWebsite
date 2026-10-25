import { motion } from 'framer-motion';
import { BarChart3, Server, Shield, Monitor, Cloud, Network, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Strategic Advisory',
    description: 'Business planning, organizational transformation, and financial optimization to drive sustainable growth.',
    features: ['Strategic Planning', 'Change Management', 'Financial Analysis'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Server,
    title: 'Data Center Solutions',
    description: 'Enterprise-grade data center infrastructure with 99.99% uptime, scalability, and security.',
    features: ['Raised Floor Systems', 'UPS & Power', 'Environmental Monitoring'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Network,
    title: 'ICT Infrastructure',
    description: 'End-to-end network design, deployment, and management for mission-critical operations.',
    features: ['Structured Cabling', 'Fiber Optics', 'Wireless Solutions'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration, hybrid infrastructure, and managed cloud services.',
    features: ['Cloud Migration', 'Hybrid Solutions', 'Managed Services'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Comprehensive physical and cyber security systems protecting your critical assets.',
    features: ['CCTV & Surveillance', 'Access Control', 'Biometric Systems'],
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Monitor,
    title: 'Audio-Visual Solutions',
    description: 'Immersive AV experiences for boardrooms, conference centers, and entertainment venues.',
    features: ['LED Displays', 'Sound Engineering', 'Automation'],
    color: 'from-amber-500 to-amber-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="text-blue-300 text-sm font-medium">Our Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Comprehensive Technology
            <br />
            <span className="gradient-text">Services & Solutions</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk' }}>
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
