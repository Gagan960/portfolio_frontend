import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiMail,
  FiPhone,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiCode
} from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Hero = () => {
  const { isDark } = useTheme();
  const { personal } = portfolioData;

  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const roles = personal.roles;
    const fullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText.length + 1 === fullText.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Backspacing
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, personal.roles, typingSpeed]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm"
          style={{
            borderColor: isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.25)',
            backgroundColor: isDark ? 'rgba(30, 27, 75, 0.4)' : 'rgba(238, 242, 255, 0.8)',
            color: isDark ? '#a5b4fc' : '#4f46e5'
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{personal.availability}</span>
        </motion.div>

        {/* Profile Picture with Glowing Gradient Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 group cursor-pointer"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />

          {/* Avatar Image Frame */}
          <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl overflow-hidden">
            <img
              src={personal.avatarUrl || "/profile.webp"}
              alt={personal.name}
              className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Floating Dev Badge */}
          <div
            className={`absolute bottom-1 right-1 p-2 rounded-full border shadow-lg transition-transform group-hover:scale-110 ${
              isDark ? 'bg-slate-900 border-indigo-400 text-indigo-400' : 'bg-white border-indigo-500 text-indigo-600'
            }`}
            title="Full Stack Software Engineer"
          >
            <FiCode className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-tight mb-3 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Hi, I'm{' '}
          <span className="gradient-text drop-shadow-sm">
            {personal.name}
          </span>
        </motion.h1>

        {/* Animated Typewriter Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span
            className={`text-xl sm:text-2xl md:text-3xl font-semibold font-heading tracking-wide ${
              isDark ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            I build systems as a{' '}
            <span className="text-cyan-400 font-bold border-b-2 border-cyan-400/50 pb-0.5">
              {currentText}
            </span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Confident Fact-Based Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed mb-10 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {personal.bio}
        </motion.p>

        {/* Primary Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Projects</span>
            <FiArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
              isDark
                ? 'border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800 hover:border-indigo-500/50 shadow-md'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-indigo-400 shadow-sm'
            }`}
          >
            <span>Hire Me / Contact</span>
          </a>

          <a
            href={personal.resumeUrl}
            download="Gagan_Kumar_Resume.pdf"
            className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium border text-sm transition-all duration-200 hover:-translate-y-0.5 ${
              isDark
                ? 'border-indigo-500/40 text-indigo-300 hover:bg-indigo-950/40'
                : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Profile Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href={personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-black hover:border-slate-300 hover:bg-slate-50 shadow-sm'
            }`}
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>

          <a
            href={personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-sky-600 hover:border-sky-300 hover:bg-slate-50 shadow-sm'
            }`}
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>

          <a
            href={personal.socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-amber-600 hover:border-amber-300 hover:bg-slate-50 shadow-sm'
            }`}
            aria-label="LeetCode Profile (42 Solved)"
            title="LeetCode Profile (42 Solved)"
          >
            <SiLeetcode className="w-5 h-5" />
          </a>

          <a
            href={personal.socialLinks.email}
            className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:text-rose-400 hover:border-rose-500/50 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-rose-600 hover:border-rose-300 hover:bg-slate-50 shadow-sm'
            }`}
            aria-label={`Email ${personal.email}`}
            title={`Email ${personal.email}`}
          >
            <FiMail className="w-5 h-5" />
          </a>

          <a
            href={personal.socialLinks.phone}
            className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
              isDark
                ? 'border-slate-800 bg-slate-900/70 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800'
                : 'border-slate-200 bg-white text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:bg-slate-50 shadow-sm'
            }`}
            aria-label={`Call ${personal.phone}`}
            title={`Call ${personal.phone}`}
          >
            <FiPhone className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
