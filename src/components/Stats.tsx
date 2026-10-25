import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '200+', label: 'Projects Delivered' },
  { icon: Shield, value: '99.9%', label: 'System Uptime' },
  { icon: Zap, value: '40%', label: 'Faster Deployment' },
  { icon: Globe, value: '6', label: 'GCC Countries' },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="glass-card p-6 lg:p-8 hover:border-blue-500/20 transition-all duration-500">
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
