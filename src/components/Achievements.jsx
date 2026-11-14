import React from 'react';
import { motion } from 'framer-motion';
import {
  FiAward,
  FiBookOpen,
  FiStar,
  FiExternalLink,
  FiCheckCircle,
  FiCode
} from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import { SiLeetcode, SiPython } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Achievements = () => {
  const { isDark } = useTheme();
  const { achievements, certifications } = portfolioData;

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'FaBookOpen':
        return <FiBookOpen className="w-5 h-5 text-purple-400" />;
      case 'FaTrophy':
        return <FaTrophy className="w-5 h-5 text-amber-400" />;
      case 'FaAward':
        return <FiAward className="w-5 h-5 text-cyan-400" />;
      case 'FaStar':
        return <FiStar className="w-5 h-5 text-emerald-400" />;
      case 'SiLeetcode':
        return <SiLeetcode className="w-5 h-5 text-amber-400" />;
      default:
        return <FiAward className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            Honors & Validations
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Recognized for research contribution, hackathon execution, algorithmic mastery, and ongoing learning.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-md'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${isDark ? 'bg-slate-800/90' : 'bg-slate-100'}`}>
                    {getAchievementIcon(item.icon)}
                  </div>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                    isDark ? 'border-slate-800 bg-slate-800/50 text-slate-400' : 'border-slate-200 bg-slate-100 text-slate-600'
                  }`}>
                    {item.organization}
                  </span>
                </div>

                <h3 className={`text-lg font-bold font-heading mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-indigo-400 mb-3">
                  {item.subtitle}
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="pt-4 border-t border-slate-800/60 mt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>{item.linkText || 'View Details'}</span>
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          isDark
            ? 'bg-slate-900/40 border-slate-800'
            : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 mb-6">
            <FiCheckCircle className="w-5 h-5 text-emerald-400" />
            <h3 className={`text-xl font-bold font-heading ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/70 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <FiAward className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className={`text-base font-semibold font-heading mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
