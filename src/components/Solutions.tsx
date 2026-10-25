import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Infrastructure',
    subtitle: 'Build. Scale. Optimize.',
    description: 'Complete IT infrastructure solutions from network design to data center operations.',
    highlights: ['99.99% Uptime SLA', '24/7 Monitoring', 'Scalable Architecture', 'Disaster Recovery'],
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Digital Transformation',
    subtitle: 'Innovate. Disrupt. Lead.',
    description: 'End-to-end digital transformation advisory and implementation.',
    highlights: ['Cloud Migration', 'Process Automation', 'Data Analytics', 'AI Integration'],
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Smart Security',
    subtitle: 'Protect. Monitor. Respond.',
    description: 'Integrated physical and cybersecurity solutions leveraging cutting-edge technology.',
    highlights: ['Biometric Access', 'AI Surveillance', 'Zero Trust', 'Threat Detection'],
    gradient: 'from-amber-500 to-red-500',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Solutions That <span className="gradient-text">Drive Results</span>
          </motion.h2>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${solution.gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-2xl bg-[#0d1b2a] p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4`}>
                          <ArrowUpRight className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white/60 text-sm">{solution.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{solution.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {solution.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${solution.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300`}>
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
