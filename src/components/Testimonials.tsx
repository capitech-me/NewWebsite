import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Leading Financial Institution',
    role: 'Chief Technology Officer',
    content: 'Capitech transformed our entire IT infrastructure in just 6 months. Their strategic approach and technical expertise are unmatched in the region. We saw a 40% improvement in operational efficiency.',
    rating: 5,
  },
  {
    name: 'Major Healthcare Provider',
    role: 'Chief Executive Officer',
    content: 'The data center solution Capitech delivered exceeded all our expectations. Their team understood our unique requirements in healthcare and built a system that ensures 100% uptime for critical patient systems.',
    rating: 5,
  },
  {
    name: 'Premier Real Estate Developer',
    role: 'Director of Operations',
    content: 'From security systems to AV integration, Capitech delivered a complete smart building solution. Their attention to detail and project management made the entire process seamless.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Trusted by Industry <span className="gradient-text">Leaders Across GCC</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="glass-card p-8 h-full hover:border-purple-500/20 transition-all duration-500 hover:-translate-y-1 relative">
                <Quote className="w-10 h-10 text-purple-500/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
