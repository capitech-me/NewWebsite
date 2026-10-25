import { motion } from 'framer-motion';

const partners = ['Microsoft', 'Cisco', 'Dell Technologies', 'Huawei', 'HPE', 'Fortinet', 'VMware', 'AWS'];

export default function TrustedBy() {
  return (
    <section className="relative py-20 bg-[#0a1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">
            Trusted Technology Partners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
                <span className="text-gray-500 group-hover:text-gray-300 font-semibold text-lg transition-colors duration-300">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
