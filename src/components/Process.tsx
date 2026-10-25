import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket, BarChart } from 'lucide-react';

const steps = [
  { icon: Search, step: '01', title: 'Discovery & Assessment', description: 'Deep-dive into your business objectives and pain points.', color: 'from-blue-500 to-blue-600' },
  { icon: Lightbulb, step: '02', title: 'Strategy & Design', description: 'Craft a tailored roadmap with clear milestones.', color: 'from-cyan-500 to-cyan-600' },
  { icon: Code2, step: '03', title: 'Implementation', description: 'Execute with precision using agile methodology.', color: 'from-purple-500 to-purple-600' },
  { icon: Rocket, step: '04', title: 'Deployment & Launch', description: 'Rigorous testing and phased rollout.', color: 'from-green-500 to-green-600' },
  { icon: BarChart, step: '05', title: 'Optimize & Scale', description: 'Continuous monitoring and strategic scaling.', color: 'from-amber-500 to-amber-600' },
];

export default function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            From Vision to <span className="gradient-text">Reality in 5 Steps</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="glass-card p-6 h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-2 text-center">
                <div className="text-5xl font-bold text-white/5 absolute top-4 right-4" style={{ fontFamily: 'Space Grotesk' }}>{step.step}</div>
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
