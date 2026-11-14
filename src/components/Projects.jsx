import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiServer,
  FiCloud,
  FiLayers,
  FiCheck,
  FiBookOpen
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Projects = () => {
  const { isDark } = useTheme();
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack MERN' },
    { id: 'ai-research', label: 'AI & Research' }
  ];

  const featuredProject = projects.find((p) => p.isFeatured);
  const regularProjects = projects.filter((p) => !p.isFeatured);

  const getFilteredList = () => {
    if (filter === 'all') return regularProjects;
    if (filter === 'fullstack') {
      return regularProjects.filter(p => p.category === 'fullstack');
    }
    if (filter === 'ai-research') {
      return regularProjects.filter(p => p.category === 'ai-fullstack');
    }
    return regularProjects;
  };

  const displayedProjects = getFilteredList();

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Portfolio Showcase
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Work & <span className="gradient-text">Shipped Systems</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Real-world client deliverables, scalable MERN architectures, and published AI research.
          </p>
        </div>

        {/* FEATURED FREELANCE SPOTLIGHT CARD */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 relative group"
          >
            {/* Subtle glow border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

            <div className={`relative p-6 sm:p-10 rounded-3xl border transition-all ${
              isDark
                ? 'bg-slate-950/90 border-amber-500/30 shadow-2xl'
                : 'bg-white border-amber-400/50 shadow-xl'
            }`}>
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                  {/* Badge & Industry */}
                  <div className="flex items-center gap-3 flex-wrap mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30">
                      <FiStar className="w-3.5 h-3.5 fill-current" />
                      {featuredProject.badge}
                    </span>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                      isDark ? 'border-slate-800 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-100 text-slate-700'
                    }`}>
                      Client: {featuredProject.clientIndustry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live in Production
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {featuredProject.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-amber-400 mb-4">
                    {featuredProject.subtitle}
                  </p>

                  <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {featuredProject.description}
                  </p>

                  {/* Architecture & Deployment Story Callout */}
                  <div className={`p-4 rounded-2xl border mb-6 ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                      <FiServer className="w-4 h-4" />
                      <span>Production Deployment Architecture</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {featuredProject.deploymentStory}
                    </p>
                  </div>

                  {/* Key Highlights list */}
                  <div className="space-y-2 mb-6">
                    {featuredProject.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <FiCheck className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-medium px-3 py-1 rounded-lg border ${
                          isDark
                            ? 'border-slate-800 bg-slate-900 text-slate-200'
                            : 'border-slate-200 bg-slate-100 text-slate-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
                    >
                      <span>Explore Live Website</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                    <span className="text-xs text-slate-400">
                      amreonjewellers.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Switcher for Other Projects */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h3 className={`text-xl sm:text-2xl font-bold font-heading ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Projects & Open Source
          </h3>

          <div className="flex items-center gap-1.5 flex-wrap">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === opt.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : isDark
                    ? 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Regular Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/80 shadow-md hover:shadow-indigo-500/10'
                    : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-xl shadow-sm'
                }`}
              >
                <div>
                  {/* Badge & Links header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                      {project.badge}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border transition-colors ${
                            isDark
                              ? 'border-slate-800 bg-slate-800/80 text-slate-300 hover:text-white hover:border-slate-600'
                              : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-black hover:border-slate-300'
                          }`}
                          aria-label={`${project.title} GitHub Repository`}
                          title="View on GitHub"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-500/30"
                          aria-label={`${project.title} Live URL`}
                          title="Open Live Preview"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className={`text-lg sm:text-xl font-bold font-heading mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h4>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">
                    {project.subtitle}
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with tech tags and action buttons */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-4 border-t border-slate-800/60">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isDark
                            ? 'border-slate-800 bg-slate-800/50 text-slate-300'
                            : 'border-slate-200 bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 text-slate-400`}>
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.paperUrl && (
                      <a
                        href={project.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <FiBookOpen className="w-3.5 h-3.5" />
                        <span>IEEE Publication</span>
                      </a>
                    )}
                    {project.liveUrl && !project.paperUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>View Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

