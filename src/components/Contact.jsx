import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiCopy,
  FiCheck,
  FiClock,
  FiArrowUpRight
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolio';

export const Contact = () => {
  const { isDark } = useTheme();
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    hp_field: '' // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = 'Please enter a subject (at least 3 characters)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // Ignore if canvas is unavailable
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Check honeypot
    if (formData.hp_field) {
      // Silent catch
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Try local or deployed backend API endpoint
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          hp_field: formData.hp_field
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', hp_field: '' });
        triggerConfetti();
      } else {
        const msg = data?.message || 'Server was unable to process your request.';
        throw new Error(msg);
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err.message || 'Unable to connect to contact server. You can send a direct email using the mailto button below.'
      );
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `Hi Gagan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Let's Collaborate
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Have an engineering role, freelance project, or discussion in mind? Send me a message and it will be delivered directly to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-2xl font-bold font-heading mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Feel free to reach out via the form, direct email, or phone. I'm actively interested in full stack, frontend, and backend engineering opportunities.
              </p>

              {/* Info Items */}
              <div className="space-y-4">
                {/* Email item */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                      Email Address
                    </span>
                    <button
                      onClick={() => copyToClipboard(personal.email)}
                      className={`text-xs inline-flex items-center gap-1 font-semibold transition-colors ${
                        copiedEmail ? 'text-emerald-400' : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black'
                      }`}
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <FiCheck className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className={`text-sm sm:text-base font-semibold break-all hover:text-indigo-400 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {personal.email}
                  </a>
                </div>

                {/* Phone item */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xs font-medium text-cyan-400 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${personal.phone}`}
                    className={`text-sm sm:text-base font-semibold hover:text-cyan-400 transition-colors ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>

                {/* Location item */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-xs font-medium text-purple-400 uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className={`text-sm sm:text-base font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className={`mt-6 pt-4 border-t flex items-center gap-2 text-xs ${
                isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <FiClock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response time: Typically replies within 24 hours</span>
              </div>
            </div>

            {/* Quick Mailto Fallback Button Card */}
            <div className={`p-5 rounded-3xl border flex items-center justify-between gap-4 ${
              isDark ? 'bg-indigo-950/30 border-indigo-500/20' : 'bg-indigo-50/70 border-indigo-200'
            }`}>
              <div>
                <h4 className={`text-sm font-bold ${isDark ? 'text-indigo-200' : 'text-indigo-900'}`}>
                  Prefer your default email client?
                </h4>
                <p className={`text-xs ${isDark ? 'text-indigo-300/80' : 'text-indigo-700'}`}>
                  Opens Gmail, Outlook, or Apple Mail directly.
                </p>
              </div>
              <a
                href={mailtoUrl}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shrink-0 shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Direct Mail</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-xl sm:text-2xl font-bold font-heading mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Fill in the form below to shoot an email straight to Gagan's personal inbox.
              </p>

              {/* Success Alert Banner */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3 mb-6"
                  >
                    <FiCheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold">Message Sent Successfully!</h4>
                      <p className="text-xs text-emerald-300 mt-0.5">
                        Thank you for reaching out, {formData.name || 'there'}. I have received your email and will respond promptly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Alert Banner with Fallback Button */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-6"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <FiAlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold">Could Not Send Via Server</h4>
                        <p className="text-xs text-rose-300 mt-0.5">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                    {/* Fallback button */}
                    <div className="pt-2 border-t border-rose-500/20 flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs text-rose-300">
                        Fallback: Open your email client with your message pre-filled:
                      </span>
                      <a
                        href={mailtoUrl}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors inline-flex items-center gap-1.5"
                      >
                        <FiMail className="w-3.5 h-3.5" />
                        <span>Send via Mail Client</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp_field"
                    value={formData.hp_field}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.name
                          ? 'border-rose-500 bg-rose-500/5'
                          : isDark
                          ? 'border-slate-800 bg-slate-800/50 text-white placeholder-slate-500 focus:border-indigo-500'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-semibold mb-1.5 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g., alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.email
                          ? 'border-rose-500 bg-rose-500/5'
                          : isDark
                          ? 'border-slate-800 bg-slate-800/50 text-white placeholder-slate-500 focus:border-indigo-500'
                          : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Opportunity for Full Stack Engineer / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-500/5'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/50 text-white placeholder-slate-500 focus:border-indigo-500'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-xs font-semibold mb-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here... Share details about your team, project, or role."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                      errors.message
                        ? 'border-rose-500 bg-rose-500/5'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/50 text-white placeholder-slate-500 focus:border-indigo-500'
                        : 'border-slate-300 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

