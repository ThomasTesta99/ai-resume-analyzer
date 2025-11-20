
---

```md
# Resumind 📄🤖  
_AI-powered resume analyzer for job seekers_

Resumind is an AI-powered resume analyzer that helps you compare your resume to job listings, surface ATS-style feedback, and identify ways to strengthen your applications.  

This project was **built by following Adrian Hajdin / JS Mastery’s AI Resume Analyzer tutorial**, as a way to practice and demonstrate how I learn new tools like **React Router v7, Zustand, and Puter.js** step by step.

You can:

- Upload and store resumes in one place  
- Provide a job listing and get an AI-driven match score  
- Receive feedback on strengths, missing keywords, and areas to improve  
- Experiment with different resumes for different roles  

---

## 🌐 Live Demo

👉 **Try Resumind here:**  
https://ai-resume-analyzer-iota-snowy.vercel.app

---

## ✨ Features

- **Browser-based authentication**
  - Auth handled entirely in the browser using Puter.js
  - No custom backend required for auth or storage

- **Resume upload & storage**
  - Upload resumes (PDF) and keep them organized in a single dashboard
  - Store files using Puter.js so they’re available across sessions

- **AI resume analysis**
  - Paste a job listing and run an AI analysis against a selected resume
  - Get an ATS-style score and targeted feedback
  - Identify missing skills, keywords, and focus areas for improvement

- **Modern, reusable UI**
  - Clean, responsive layout suitable for desktop use
  - Reusable components for forms, lists, and analysis results
  - Built to mirror a production-style React app structure

---

## 🧱 Tech Stack

- **Frontend**: React, TypeScript  
- **Routing**: React Router v7 (file-based routes via `react-router.config`)  
- **State Management**: Zustand  
- **Build Tooling**: Vite  
- **Styling**: Tailwind CSS  
- **Platform & AI**: Puter.js for authentication, file storage, and AI evaluations  

---

## 🖼️ Core Concepts

Resumind is structured around a few core entities:

- **User** – The authenticated user with access to their stored resumes and analyses  
- **Resume** – An uploaded resume file with metadata (name, upload date, etc.)  
- **Job Listing** – A job description used as the target for analysis  
- **Analysis** – The AI-generated result that includes match score, feedback, and recommendations  

This design keeps the flow simple: _pick a resume → paste a job listing → review your analysis and iterate_.

---

## 🗂️ Project Structure (High Level)

```txt
.
├─ app/                 # React Router entrypoint & route structure
│  ├─ routes/           # Route modules (dashboard, resume detail, analysis, etc.)
│  ├─ components/       # Route-level components and layout pieces
│  └─ root.tsx          # Root layout, loaders, and providers
├─ public/              # Static assets (icons, favicon, etc.)
├─ types/               # Shared TypeScript types for resumes, jobs, analysis
├─ react-router.config.ts  # File-based routing configuration
├─ vite.config.ts       # Vite config
└─ package.json         # Scripts and dependencies
