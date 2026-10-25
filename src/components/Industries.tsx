import { motion } from 'framer-motion';
import { Building2, Landmark, Heart, ShoppingBag, Plane, Factory } from 'lucide-react';

const industries = [
  { icon: Landmark, name: 'Banking & Finance' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Building2, name: 'Real Estate' },
  { icon: ShoppingBag, name: 'Retail' },
  { icon: Plane, name: 'Aviation' },
  { icon: Factory, name: 'Manufacturing' },
];

export default function Industries() {
  return (
    <section className="relative py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Powering <span className="gradient-text">Every Sector</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="glass-card p-6 text-center hover:border-cyan-500/20 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 flex items-center justify-center mb-3">
                  <industry.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
