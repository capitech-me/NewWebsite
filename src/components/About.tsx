import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-white/5 p-1">
              <div className="w-full h-full rounded-3xl bg-[#0a1628] p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>C</span>
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Capitech</h3>
                      <p className="text-gray-400 text-sm">Est. 2017 • Bahrain</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 text-center">
                      <div className="text-3xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>200+</div>
                      <div className="text-gray-500 text-xs mt-1">Projects</div>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <div className="text-3xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>50+</div>
                      <div className="text-gray-500 text-xs mt-1">Clients</div>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <div className="text-3xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>6</div>
                      <div className="text-gray-500 text-xs mt-1">Countries</div>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <div className="text-3xl font-bold gradient-text" style={{ fontFamily: 'Space Grotesk' }}>7+</div>
                      <div className="text-gray-500 text-xs mt-1">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="text-blue-300 text-sm font-medium">About Capitech</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Space Grotesk' }}
            >
              Pioneering
              <br />
              <span className="gradient-text">Digital Excellence</span>
              <br />
              in the GCC
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8"
            >
              Established in 2017 and headquartered in the Kingdom of Bahrain, Capitech is a premier 
              strategic advisory firm specializing in management consulting, information technology, 
              and innovative solutions for the Middle East market.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Mission</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      To be a key player serving the GCC market through strong partnerships with clients, 
                      suppliers, and system integrators—providing cost-effective, innovative solutions through an advisory approach.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Vision</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      To be a leading professional services firm delivering innovative strategic advisory solutions 
                      across management, IT, and audio-visual domains—embracing lean, efficient approaches for sustainable growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
