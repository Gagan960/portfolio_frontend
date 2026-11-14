import React from 'react';
import { motion } from 'framer-motion';
import {
  FiUsers,
  FiCheckCircle,
  FiCpu,
  FiBookOpen,
  FiAward,
  FiFolder,
  FiMapPin,
  FiCalendar,
  FiTarget,
  FiShield
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const About = () => {
  const { isDark } = useTheme();
  const { personal, stats, education } = portfolioData;

  const statIcons = [
    <FiUsers className="w-5 h-5 text-indigo-400" />,
    <FiCheckCircle className="w-5 h-5 text-emerald-400" />,
    <FiCpu className="w-5 h-5 text-cyan-400" />,
    <SiLeetcode className="w-5 h-5 text-amber-400" />,
    <FiFolder className="w-5 h-5 text-purple-400" />,
    <FiBookOpen className="w-5 h-5 text-rose-400" />
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Get To Know Me
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering for the <span className="gradient-text">Real World</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A focused software engineer committed to writing scalable code, building resilient backends, and bringing ideas all the way to live deployment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-4 rounded-2xl border text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-md'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg shadow-sm'
              }`}
            >
              <div className="flex justify-center mb-2">
                <div className={`p-2 rounded-xl ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'}`}>
                  {statIcons[idx]}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'} mb-1`}>
                {stat.label}
              </div>
              <div className={`text-[11px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'} line-clamp-2`}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDark
                ? 'bg-slate-900/50 border-slate-800 shadow-xl'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <FiTarget className="w-4 h-4" />
                <span>Philosophy & Mission</span>
              </div>
              <h3 className={`text-2xl font-bold font-heading mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                "A website isn't finished when the code works. It's finished when the world can use it."
              </h3>
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                <p>
                  As a Full Stack Developer rooted in the MERN stack, I focus on bridging the gap between local development and production-grade software. Whether architecting REST APIs with secure JWT role-based authorization, automating scheduled tasks, or configuring edge delivery with Cloudflare and AWS, I build products meant to serve real users reliably.
                </p>
                <p>
                  At <span className="font-semibold text-indigo-400">Cleanhub India</span>, I lead the technical development of <span className="font-semibold text-cyan-400">ServExaa</span> (live on <a href="https://servexaa.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300">servexaa.com</a> and Google Play Store). Beyond individual development, I have actively mentored <span className="font-semibold text-cyan-400">20+ university students</span> as a Teaching Assistant, resolved 30+ complex bugs, and co-authored a published research paper in <span className="font-semibold text-purple-400">IEEE Xplore</span> using Sentence Transformers and XGBoost.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-800/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                  <FiShield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Security First
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    JWT auth, RBAC permissions & input sanitization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                  <FiCpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Production Ready
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Cloudflare edge CDN & AWS cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
              isDark
                ? 'bg-slate-900/50 border-slate-800 shadow-xl'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <FiBookOpen className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {education.institution}
              </h3>
              <p className="text-sm font-medium text-indigo-400 mb-4">
                {education.degree}
              </p>

              <div className="flex items-center gap-4 text-xs mb-6 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                  isDark ? 'border-slate-800 bg-slate-800/60 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
                }`}>
                  <FiCalendar className="w-3.5 h-3.5 text-indigo-400" />
                  {education.duration}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold">
                  <FiAward className="w-3.5 h-3.5 text-emerald-400" />
                  {education.grade}
                </span>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                  isDark ? 'border-slate-800 bg-slate-800/60 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
                }`}>
                  <FiMapPin className="w-3.5 h-3.5 text-purple-400" />
                  {education.location}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Key Academic Highlights
                </h4>
                <ul className="space-y-2.5">
                  {education.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-800/70' : 'border-slate-200'} text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Location: <span className="text-white font-medium">{personal.location}</span> • Ready for remote & on-site opportunities.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

