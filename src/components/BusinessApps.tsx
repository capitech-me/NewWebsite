import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Cpu, 
  Volume2, 
  ExternalLink, 
  Shield, 
  Wifi, 
  Moon,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const apps = [
  {
    icon: Briefcase,
    name: 'Usawi Biz',
    tagline: 'Business OS',
    version: 'v1.9.28',
    description: 'Your meetings, cards and follow-ups in one clean workspace. Scan a card, draft minutes, and every action item becomes a tracked task.',
    features: [
      'Business Card Scanner — OCR capture → review → email or WhatsApp follow-up',
      'Meeting Minutes hub — auto-drafted and emailed to attendees',
      'Tasks & Actions — linked to the meeting they came from, with priority, owner and due date',
      'Team Workspace — workload balance and per-member completion rates',
      'Contacts registry, Reports & Insights, Arabic + English RTL',
      'Data residency — local folder, OneDrive, Google Drive, JSON backup'
    ],
    gradient: 'from-blue-500 to-indigo-600',
    bgGlow: 'blue',
    url: 'https://usawiapps.capitech.me/'
  },
  {
    icon: Search,
    name: 'Usawi HR Wiz',
    tagline: 'Live AI Job Match',
    version: 'v1.9.28',
    description: 'Live worldwide job intelligence powered by your real CV. On-device OCR reads your resume, builds a skill profile, then queries live global job APIs.',
    features: [
      'Step 1 · Upload CV — PDF only, scanned copies auto-OCR\'d (Tesseract)',
      'Step 2 · Location — country / region plus optional city',
      'Step 3 · Target role — auto-filled from your CV, editable to broaden or narrow',
      'Live Matches — job-board deep-links with pre-filled search terms',
      'Application Tracker with export, plus refine & sort controls',
      '194 countries · 4 live APIs · 100% on-device parsing'
    ],
    gradient: 'from-purple-500 to-pink-600',
    bgGlow: 'purple',
    url: 'https://usawiapps.capitech.me/'
  },
  {
    icon: Cpu,
    name: 'Usawi GPU',
    tagline: 'Equipment Catalog',
    version: 'v1.9.28',
    description: 'GPU equipment catalog with live market alerts, per-source stock, a customer cart and an admin dashboard for margins, sources and orders.',
    features: [
      'Market alert banner — DRAM shortage & RTX 50-series supply signals',
      'Product catalog with stock counts, source links and last-updated stamps',
      'Customer cart and order confirmation sent to the admin inbox',
      'Admin dashboard — manage margins, source links and per-source stock',
      'Orders queue with refresh-from-marketplace and reset controls',
      'Secure admin login separate from customer checkout'
    ],
    gradient: 'from-green-500 to-emerald-600',
    bgGlow: 'green',
    url: 'https://usawiapps.capitech.me/'
  },
  {
    icon: Volume2,
    name: 'Usawi Sizing Tool',
    tagline: 'Sound System Sizing',
    version: 'v1.9.28',
    description: 'Design the right sound system for any venue. A five-step wizard turns the space and its use into a matched speaker, amplifier and subwoofer specification.',
    features: [
      'Five-step wizard — Venue → Space → Speakers → Amplifiers → Summary',
      'Speaker and subwoofer recommendations, matched for power, impedance and coverage',
      'Coverage heatmap drawn over the room plan, with a level legend',
      'Amplifier selection with channel and power matching',
      'Project summary — bill of materials and recommended wiring',
      'Product catalogue, acoustics reference and support sections'
    ],
    gradient: 'from-amber-500 to-orange-600',
    bgGlow: 'amber',
    url: 'https://usawiapps.capitech.me/'
  }
];

const platformFeatures = [
  {
    icon: Shield,
    title: 'Single Sign-On',
    description: 'One Supabase-backed account unlocks every Usawi application. Sessions persist across visits.'
  },
  {
    icon: CheckCircle2,
    title: 'Verified Email',
    description: 'Sign-up requires email confirmation via a 6-digit code or magic link before access is granted.'
  },
  {
    icon: Wifi,
    title: 'On-Device Processing',
    description: 'CV parsing, OCR and card scanning run locally in the browser. Files never leave your device.'
  },
  {
    icon: Moon,
    title: 'Light & Dark',
    description: 'A refined dual theme follows your system preference and syncs into every embedded app.'
  }
];

export default function BusinessApps() {
  return (
    <section id="apps" className="relative py-24 lg:py-32 bg-[#0a1628] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <span className="text-purple-300 text-sm font-medium">Business Applications</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            One Workspace for
            <br />
            <span className="gradient-text">Every Business Need</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Four production-ready tools under one roof. Sign in once to launch any of them instantly — 
            no second login, no separate accounts.
          </motion.p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover:border-white/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${app.bgGlow}-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">{app.tagline} · {app.version}</div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>
                        {app.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {app.features.slice(0, 4).map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${app.gradient} mt-2 flex-shrink-0`} />
                      <span className="text-gray-500 text-xs leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {app.features.length > 4 && (
                    <div className="text-gray-600 text-xs pl-4">
                      +{app.features.length - 4} more features
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${app.gradient} text-white text-sm font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group/link`}
                >
                  Launch Application
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Space Grotesk' }}>
            Built for How You Actually Work
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 lg:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk' }}>
            Get Started in Three Steps
          </h3>
          <p className="text-gray-400 mb-10">From account to first insight in under two minutes.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="relative">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white font-bold">
                1
              </div>
              <h4 className="text-white font-semibold mb-2">Create Your Account</h4>
              <p className="text-gray-500 text-sm">Enter your name, email and a password. Your data is stored securely in Supabase.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 text-white font-bold">
                2
              </div>
              <h4 className="text-white font-semibold mb-2">Confirm Your Email</h4>
              <p className="text-gray-500 text-sm">A 6-digit verification code lands in your inbox. Enter it to activate access.</p>
            </div>
            <div className="relative">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 text-white font-bold">
                3
              </div>
              <h4 className="text-white font-semibold mb-2">Launch Any App</h4>
              <p className="text-gray-500 text-sm">Your hub opens with all applications ready to use. Sign out and back in anytime.</p>
            </div>
          </div>

          <a
            href="https://usawiapps.capitech.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Open Usawi Apps
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
