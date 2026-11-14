# Gagan Kumar - Software Engineer & Full Stack Developer (MERN) Portfolio

A modern, high-performance, fully responsive personal portfolio website for **Gagan Kumar**, Full Stack Developer (MERN) & Software Engineer based in New Delhi, India.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and a secure **Node.js + Express** backend with Nodemailer for automated contact emails sent directly to Gmail (`gagankumar1102.3@gmail.com`).

---

## 🌟 Key Highlights & Features

- **Modern Visual Identity**: Dark theme default with a smooth Light/Dark theme switcher, gradient accents (indigo, violet, cyan), glassmorphism cards, and subtle animated glow effects.
- **Single-Page Architecture**: Sticky navbar with active section scroll-spy, smooth scroll transitions, mobile drawer navigation, and quick "Download Resume" CTA.
- **Hero Section**:
  - Live availability badge with green status indicator.
  - Interactive typewriter animation cycling through core engineering roles.
  - Confident, strictly fact-based bio.
  - Direct action buttons (*View Projects*, *Hire Me / Contact*, *Download Resume*).
  - Social profile links (*GitHub, LinkedIn, LeetCode, Email, Phone*).
- **About & Impact Metrics**:
  - Highlights engineering philosophy: *"A website isn't finished when the code works. It's finished when the world can use it."*
  - Key counters: **20+** Students Mentored, **30+** Issues Resolved, **12+** REST APIs Built, **42** LeetCode Problems Solved, **40+** Repositories, **1** IEEE Publication.
  - Education card: B.Tech in Electrical & Computer Engineering at ABES Engineering College (2022–2026, CGPA 7.2).
- **Interactive Skills Section**: Grouped by Frontend, Backend, Database & Cloud, Languages, and Tools with live category filtering, proficiency indicators, and branded icons.
- **Vertical Experience Timeline**: Chronological display of Software Engineer at Cleanhub India, Teaching Assistant at ABES Engineering College, and Web Development Intern at IBM Skill Network.
- **Project Showcase**:
  - ⭐ **Featured Freelance Work**: **AMREON Jewellers** (High-end luxury jewelry e-commerce & showcase platform built from client requirements to production, hosted on AWS with Cloudflare edge CDN).
  - **College Marketplace**: Full-stack MERN platform supporting 50+ users, 3 RBAC roles, and 12+ REST APIs.
  - **Smart Health Adviser**: Symptom-based disease prediction system (<2s response time) backed by published IEEE research.
  - **Online Food Delivery & Order Manager**: Dynamic food ordering app with cart management built during IBM Skill Network internship.
  - **Git Activity Tracker**: Automated repository commit tracking system built during Teaching Assistant tenure.
  - **College Event Manager**: Campus club event portal with role-based RSVPs.
- **Achievements & Certifications**:
  - IEEE Research Paper publication on disease prediction with Sentence Transformers & XGBoost.
  - Top 3 Teams at IIM Lucknow National Hackathon.
  - Top 50 Teams at Smart India Hackathon internal round.
  - 3-Star Python Programmer at HackerRank.
  - 42 LeetCode problems solved breakdown.
  - Certifications from PW Skills, Kaggle, and NPTEL.
- **Production-Ready "Contact Me" System**:
  - Real-time client-side validation with instant visual feedback.
  - Express backend (`POST /api/contact`) sending emails via Nodemailer with Gmail SMTP.
  - Security suite: Helmet headers, rate limiting (5 requests/15 mins per IP), CORS protection, and honeypot spam filter.
  - Direct email and phone cards with 1-click clipboard copy.
  - **Intelligent Fallback**: If the backend is ever offline or credentials are not yet configured, the UI automatically offers a 1-click *"Send via Mail Client"* button pre-filled with the visitor's subject and message!
- **Centralized Content Store**: All portfolio data, bio, social links, stats, skills, projects, and experiences reside in `src/data/portfolio.js` for effortless maintenance.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + `@tailwindcss/vite`
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons, Font Awesome, Simple Icons)
- **Effects**: Canvas Confetti (celebratory effect on contact submission)
- **Typography**: Inter, Outfit, Fira Code (via Google Fonts)

### Backend
- **Runtime**: Node.js
- **Server Framework**: Express.js
- **Mail Service**: Nodemailer (Gmail SMTP with App Password)
- **Security**: Helmet, CORS, Express-Rate-Limit
- **Configuration**: Dotenv

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg               # Sleek <GK/> developer favicon
│   ├── Gagan_Kumar_Resume.pdf    # Resume PDF linked to download buttons
│   └── resume.pdf                # Alias link for resume
├── server/
│   ├── .env                      # Server environment variables (gitignored)
│   ├── .env.example              # Example environment template & instructions
│   ├── package.json              # Server dependencies (Express, Nodemailer, Helmet, etc.)
│   └── server.js                 # Contact API with rate limiting, CORS, & Nodemailer
├── src/
│   ├── components/
│   │   ├── About.jsx             # About story, education & stat counters
│   │   ├── Achievements.jsx      # IEEE research, hackathons & certifications
│   │   ├── Contact.jsx           # Validated contact form + mailto fallback
│   │   ├── Experience.jsx        # Vertical timeline of professional roles
│   │   ├── Footer.jsx            # Modern footer with social links & back-to-top
│   │   ├── Hero.jsx              # Hero greeting, typewriter roles & quick CTAs
│   │   ├── Navbar.jsx            # Sticky navbar, theme toggle & mobile menu
│   │   ├── Projects.jsx          # AMREON Jewellers featured spotlight & project grid
│   │   └── Skills.jsx            # Grouped skills with filter tabs & level badges
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/Light theme provider with localStorage
│   ├── data/
│   │   └── portfolio.js          # ⭐ SINGLE DATA FILE FOR ALL PORTFOLIO CONTENT
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Tailwind CSS styles & custom glassmorphism
│   └── main.jsx                  # React application entry point
├── .gitignore                    # Prevents node_modules & .env from committing
├── index.html                    # SEO meta tags, Open Graph, Twitter & favicon
├── package.json                  # Frontend dependencies & convenient scripts
├── vite.config.js                # Vite configuration with Tailwind & /api proxy
└── README.md                     # Complete project documentation
```

---

## 🚀 Local Development Setup

### 1. Clone or Open the Repository
```bash
cd c:\Users\Hp\Desktop\portfolio
```

### 2. Install Dependencies

Install root frontend packages:
```bash
npm install
```

Install backend packages in `/server`:
```bash
npm --prefix server install
```

### 3. Configure the Backend Environment
Create `server/.env` based on `server/.env.example`:
```bash
cp server/.env.example server/.env
```

Open `server/.env` and configure:
```env
PORT=5000
CLIENT_URL=http://localhost:5173
EMAIL_USER=gagankumar1102.3@gmail.com
EMAIL_APP_PASSWORD=your_16_character_gmail_app_password
```

### 4. Run Both Servers Concurrently

You can run both the backend and frontend simultaneously:

**Terminal 1 (Backend API):**
```bash
npm run server
# Or for auto-reload during development:
npm run server:dev
```
*The Express server will start on `http://localhost:5000`.*

**Terminal 2 (Frontend Dev Server):**
```bash
npm run dev
```
*Vite will start on `http://localhost:5173` (or `5174`). Open it in your browser!*

Because Vite is configured with a built-in proxy in `vite.config.js`, all `/api` requests from the frontend are automatically routed to `http://localhost:5000` without any CORS configuration required locally.

---

## 📧 How to Create a Gmail App Password

To allow Nodemailer to securely send emails through your Gmail account (`gagankumar1102.3@gmail.com`) without exposing your primary password, Google requires a **16-character App Password**:

1. Log into your Google Account at [myaccount.google.com](https://myaccount.google.com).
2. In the left navigation, click **Security**.
3. Under **How you sign in to Google**, verify that **2-Step Verification** is turned **ON**. (App Passwords require 2FA to be enabled).
4. Click on **2-Step Verification**, scroll to the bottom, and click on **App passwords** (or go directly to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
5. Under **App name**, type `Portfolio Contact Form` and click **Create**.
6. Google will generate a 16-character code (formatted like `xxxx xxxx xxxx xxxx`).
7. Copy this 16-character code (you can paste it without spaces).
8. In `server/.env`, set:
   ```env
   EMAIL_USER=gagankumar1102.3@gmail.com
   EMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
   ```
9. Restart the Express server (`npm run server`).
10. Test by sending a message through the contact form on your portfolio website!

---

## 🌐 Production Deployment Guide

### A. Deploying the Frontend to Vercel (Free & Instant)

1. Push your repository to GitHub (`github.com/Gagan960/portfolio` or similar).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Framework Preset: **Vite**.
5. Root Directory: `./` (Leave as root).
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Under **Environment Variables**, if your backend is hosted separately on Render, add:
   - `VITE_API_URL`: `https://your-backend-app.onrender.com` (Update the contact fetch URL or configure a Vercel rewrite in `vercel.json`).
9. Click **Deploy**. Vercel will build and assign you a live URL like `https://gagan-portfolio.vercel.app`.

### B. Deploying the Backend to Render (Free Node.js Hosting)

1. Go to [render.com](https://render.com) and create an account.
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository.
4. Configure the Web Service settings:
   - **Name**: `gagan-portfolio-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`
5. In the **Environment Variables** section, add:
   - `PORT`: `5000` (or leave default, Render sets this automatically)
   - `CLIENT_URL`: `https://gagan-portfolio.vercel.app` *(Your Vercel frontend URL)*
   - `EMAIL_USER`: `gagankumar1102.3@gmail.com`
   - `EMAIL_APP_PASSWORD`: `your_16_character_app_password`
6. Click **Create Web Service**.
7. Once deployed, Render will provide a live URL like `https://gagan-portfolio-api.onrender.com`.
8. Test the health endpoint: `https://gagan-portfolio-api.onrender.com/api/health` — it will return `{"status":"ok"}`.

---

## ✏️ How to Edit Portfolio Content

All personal information, experiences, projects, stats, and achievements are organized in a single readable configuration file:

👉 **`src/data/portfolio.js`**

- **Change Bio or Tagline**: Edit `personal.bio` or `personal.roles`.
- **Add / Edit Projects**: Modify the `projects` array. Each project accepts `title`, `description`, `keyFeatures`, `technologies`, `githubUrl`, `liveUrl`, and `badge`.
- **Add Work Experience**: Add a new object to the `experience` array.
- **Update Skills**: Update items in `skills.frontend`, `skills.backend`, `skills.databaseAndCloud`, etc.
- **Update Resume**: Simply replace `public/Gagan_Kumar_Resume.pdf` with your new resume file.

---

## 📄 License & Attribution

Designed and developed by **Gagan Kumar**. Feel free to customize and use this code for personal portfolio presentations.
