import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Footer = () => {
  const { isDark } = useTheme();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      isDark ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-sm">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-xs ${
                isDark ? 'bg-slate-950 text-indigo-400' : 'bg-white text-indigo-600'
              }`}>
                &lt;GK /&gt;
              </div>
            </div>
            <div>
              <span className={`font-extrabold text-base tracking-tight font-heading ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {personal.name}
              </span>
              <p className="text-xs text-slate-400">
                Full Stack Developer (MERN) • Software Engineer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-black hover:border-slate-300'
              }`}
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-sky-400 hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-sky-600 hover:border-slate-300'
              }`}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-amber-400 hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-amber-600 hover:border-slate-300'
              }`}
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.email}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-rose-400 hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-rose-600 hover:border-slate-300'
              }`}
              aria-label="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.phone}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-emerald-400 hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-emerald-600 hover:border-slate-300'
              }`}
              aria-label="Phone"
            >
              <FiPhone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isDark
                ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & built with React 19, Tailwind CSS & Express
          </p>
        </div>
      </div>
    </footer>
  );
};

