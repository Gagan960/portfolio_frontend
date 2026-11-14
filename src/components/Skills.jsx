import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaAws,
  FaMobileAlt,
  FaNetworkWired,
  FaUserShield,
  FaClock,
  FaExchangeAlt
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFramer,
  SiJsonwebtokens,
  SiCloudflare,
  SiVite
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

// Icon mapping helper
const getSkillIcon = (iconName) => {
  const map = {
    FaReact: <FaReact className="w-5 h-5 text-[#61DAFB]" />,
    SiJavascript: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />,
    SiTailwindcss: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
    FaHtml5: <FaHtml5 className="w-5 h-5 text-[#E34F26]" />,
    FaMobileAlt: <FaMobileAlt className="w-5 h-5 text-[#8B5CF6]" />,
    SiFramer: <SiFramer className="w-5 h-5 text-[#0055FF]" />,
    FaNodeJs: <FaNodeJs className="w-5 h-5 text-[#339933]" />,
    SiExpress: <SiExpress className="w-5 h-5 text-slate-300" />,
    FaNetworkWired: <FaNetworkWired className="w-5 h-5 text-[#10B981]" />,
    SiJsonwebtokens: <SiJsonwebtokens className="w-5 h-5 text-[#D63AFF]" />,
    FaUserShield: <FaUserShield className="w-5 h-5 text-[#F59E0B]" />,
    FaClock: <FaClock className="w-5 h-5 text-[#EC4899]" />,
    SiMongodb: <SiMongodb className="w-5 h-5 text-[#47A248]" />,
    FaDatabase: <FaDatabase className="w-5 h-5 text-[#00758F]" />,
    FaAws: <FaAws className="w-5 h-5 text-[#FF9900]" />,
    SiCloudflare: <SiCloudflare className="w-5 h-5 text-[#F38020]" />,
    FaPython: <FaPython className="w-5 h-5 text-[#3776AB]" />,
    FaGitAlt: <FaGitAlt className="w-5 h-5 text-[#F05032]" />,
    FaGithub: <FaGithub className="w-5 h-5 text-slate-200" />,
    SiPostman: <SiPostman className="w-5 h-5 text-[#FF6C37]" />,
    FaExchangeAlt: <FaExchangeAlt className="w-5 h-5 text-[#06B6D4]" />,
    SiVite: <SiVite className="w-5 h-5 text-[#646CFF]" />
  };
  return map[iconName] || <FaReact className="w-5 h-5 text-indigo-400" />;
};

export const Skills = () => {
  const { isDark } = useTheme();
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databaseAndCloud', label: 'Database & Cloud' },
    { id: 'languages', label: 'Languages' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  // Flatten or filter
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skills.databaseAndCloud.map(s => ({ ...s, category: 'Database & Cloud' })),
        ...skills.languages.map(s => ({ ...s, category: 'Languages' })),
        ...skills.tools.map(s => ({ ...s, category: 'Tools & DevOps' }))
      ];
    }
    return (skills[activeTab] || []).map(s => ({
      ...s,
      category: categories.find(c => c.id === activeTab)?.label || ''
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            Technical Proficiency
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Core Stack & <span className="gradient-text">Technologies</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A robust full-stack toolkit centered around the MERN stack, robust REST API architecture, secure authentication, and cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : isDark
                    ? 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={`${skill.name}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={`p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/90 shadow-md hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-lg shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-slate-800/80' : 'bg-slate-100'
                  }`}>
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.level === 'Expert'
                      ? 'border-purple-500/40 bg-purple-500/10 text-purple-400'
                      : skill.level === 'Advanced'
                      ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
                      : 'border-indigo-500/40 bg-indigo-500/10 text-indigo-400'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className={`text-sm font-semibold tracking-tight font-heading mb-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {skill.category}
                </span>

                {/* Progress bar visual indicator */}
                <div className="w-full bg-slate-800/40 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{
                      width:
                        skill.level === 'Expert'
                          ? '95%'
                          : skill.level === 'Advanced'
                          ? '85%'
                          : '75%'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

