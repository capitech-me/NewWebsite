import { motion } from 'framer-motion';
import { Award, Users, Clock, TrendingUp, Globe2, Headphones } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Industry Expertise', description: '7+ years of specialized experience serving GCC enterprises.', stat: '7+', statLabel: 'Years' },
  { icon: Users, title: 'Dedicated Teams', description: 'Certified professionals with deep domain knowledge.', stat: '50+', statLabel: 'Experts' },
  { icon: Clock, title: 'Rapid Delivery', description: 'Agile methodology ensures fast time-to-value.', stat: '40%', statLabel: 'Faster' },
  { icon: TrendingUp, title: 'Proven ROI', description: 'Solutions consistently deliver measurable business impact.', stat: '3x', statLabel: 'ROI' },
  { icon: Globe2, title: 'Regional Presence', description: 'Headquartered in Bahrain serving the entire Middle East.', stat: 'GCC', statLabel: 'Coverage' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock monitoring and support.', stat: '24/7', statLabel: 'Support' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Your Strategic <span className="gradient-text-gold">Technology Partner</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end">
            <p className="text-gray-400 text-lg leading-relaxed">
              We combine deep technical expertise with strategic business acumen to deliver solutions that prepare you for tomorrow's opportunities.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card p-8 hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>{reason.stat}</div>
                  <div className="text-xs text-gray-500">{reason.statLabel}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk' }}>{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
