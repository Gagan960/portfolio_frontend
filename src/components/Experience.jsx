import React from 'react';
import { motion } from 'framer-motion';
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiArrowUpRight,
  FiGlobe,
  FiExternalLink
} from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Experience = () => {
  const { isDark } = useTheme();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Career Journey
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Hands-on software engineering across production products, academic mentorship, and industry internships.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 ml-2 sm:ml-4 space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full border-2 ${
                  item.isCurrent
                    ? 'border-emerald-400 bg-emerald-500 shadow-md shadow-emerald-500/50'
                    : 'border-indigo-400 bg-slate-900'
                } flex items-center justify-center transition-transform group-hover:scale-125`}>
                  {item.isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                </div>
              </div>

              {/* Experience Card */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl shadow-sm'
              }`}>
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className={`text-xl sm:text-2xl font-bold font-heading ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}>
                        {item.role}
                      </h3>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                        item.isCurrent
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30'
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-indigo-400">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 gap-1">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <FiCalendar className="w-4 h-4 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <FiMapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Live Product Badge Links (e.g. ServExaa website & Play Store app) */}
                {(item.websiteUrl || item.playStoreUrl) && (
                  <div className="flex items-center gap-2.5 flex-wrap mb-4">
                    {item.websiteUrl && (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all hover:scale-105"
                      >
                        <FiGlobe className="w-3.5 h-3.5" />
                        <span>servexaa.com</span>
                        <FiExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}
                    {item.playStoreUrl && (
                      <a
                        href={item.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all hover:scale-105"
                      >
                        <FaGooglePlay className="w-3.5 h-3.5" />
                        <span>ServExaa on Google Play</span>
                        <FiExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}
                  </div>
                )}

                <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 mb-6">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-medium px-3 py-1 rounded-lg border ${
                        isDark
                          ? 'border-slate-800 bg-slate-800/60 text-slate-300'
                          : 'border-slate-200 bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
