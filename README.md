<div align="center">

# 🎯 SmartHire AI

### AI-Powered Resume Analyzer, ATS Scorer & Job Match Tool

Upload your resume, get an instant ATS score, match it against any job description, and generate a tailored cover letter — all powered by LLMs.

[![Live Demo](https://img.shields.io/badge/Live-Demo-4F46E5?style=for-the-badge)](https://smart-hire-ai-tan.vercel.app)
[![Backend](https://img.shields.io/badge/API-Render-46E3B7?style=for-the-badge)](https://smarthire-backend-7wq0.onrender.com/api/health)

</div>

---

## 📖 Overview

SmartHire AI is a full-stack web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) and specific job postings. It combines rule-based document analysis with LLM-powered evaluation to give actionable, specific feedback — not generic tips.

Built during placement season as a real tool I use on my own resumes, it demonstrates a full RAG-adjacent AI pipeline: document parsing → structured extraction → hybrid scoring → semantic job matching → generative writing (cover letters).

---

## ✨ Features

- **📄 Resume Upload & Parsing** — Supports PDF and DOCX, with automatic text extraction and edge-case handling (e.g. scanned/image-based files).
- **🧠 AI Structured Extraction** — Uses an LLM (Groq / Llama) to parse raw resume text into structured skills, experience, and education data.
- **📊 Hybrid ATS Scoring** — Combines deterministic rule-based checks (contact info, section headers, bullet usage, action verbs, resume length, links) with AI-driven qualitative scoring for a more consistent, explainable 0–100 score.
- **🎯 Job Description Matcher** — Paste any JD and get a match percentage, matching skills, missing keywords, and targeted suggestions to close the gap.
- **✍️ AI Cover Letter Generator** — Generates a tailored, natural-sounding cover letter referencing specific resume projects that match the JD.
- **🕘 Resume History Dashboard** — Every analysis is saved; revisit past uploads and track scores over time.
- **🔐 Authentication** — Email/password (JWT) and Google OAuth sign-in.
- **📱 Responsive Design** — Fully usable on mobile.

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Zustand (state management)
- React Router
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Google OAuth (`google-auth-library`)
- Multer (file uploads)
- `pdf-parse` / `mammoth` (PDF/DOCX text extraction)

**AI**
- Groq API (Llama-based models via `openai/gpt-oss-120b`)
- Custom hybrid scoring engine (rules + LLM)
- Prompt-engineered structured JSON extraction

**Infrastructure**
- MongoDB Atlas (database)
- Render (backend hosting)
- Vercel (frontend hosting)

---

## 🏗️ Architecture

```
┌─────────────┐      ┌──────────────┐      ┌──────────────┐
│   React     │─────▶│   Express    │─────▶│   MongoDB    │
│  (Vercel)   │◀─────│   (Render)   │◀─────│    Atlas     │
└─────────────┘      └──────┬───────┘      └──────────────┘
                             │
                             ▼
                      ┌──────────────┐
                      │  Groq API    │
                      │ (Llama LLM)  │
                      └──────────────┘

Flow: Upload → Parse (pdf-parse/mammoth) → AI Extraction (Groq)
      → Hybrid ATS Scoring → JD Matching → Cover Letter Gen
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- [Groq API key](https://console.groq.com)
- [Google OAuth Client ID](https://console.cloud.google.com)

### 1. Clone the repository

```bash
git clone https://github.com/ganesh02M/SmartHire-AI.git
cd SmartHire-AI
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
GROQ_API_KEY=your_groq_api_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
CLIENT_URL=http://localhost:5173
```

```bash
npm run dev
```

Backend runs on `http://localhost:5000`.

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`.

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register with email/password | ❌ |
| `POST` | `/api/auth/login` | Login with email/password | ❌ |
| `POST` | `/api/auth/google` | Login/register via Google | ❌ |
| `GET` | `/api/auth/me` | Get current user | ✅ |
| `POST` | `/api/resume/upload` | Upload & parse resume | ✅ |
| `GET` | `/api/resume/history` | Get all analyses for user | ✅ |
| `GET` | `/api/resume/:id` | Get single resume analysis | ✅ |
| `POST` | `/api/resume/:id/score` | Run hybrid ATS scoring | ✅ |
| `POST` | `/api/resume/:id/match` | Match resume against a JD | ✅ |
| `POST` | `/api/resume/:id/cover-letter` | Generate tailored cover letter | ✅ |

---

## 🌐 Deployment

This project is deployed as a monorepo with independently deployed frontend and backend:

- **Frontend** — deployed on [Vercel](https://vercel.com), root directory set to `/frontend`
- **Backend** — deployed on [Render](https://render.com), root directory set to `/backend`
- **Database** — hosted on MongoDB Atlas

> Note: The backend is on Render's free tier, which spins down after periods of inactivity. The first request after idle time may take 20–30 seconds to respond.

---

## 🗺️ Roadmap

- [x] Resume upload & parsing (PDF/DOCX)
- [x] AI structured data extraction
- [x] Hybrid ATS scoring engine
- [x] Job description matcher
- [x] AI cover letter generator
- [x] Google OAuth
- [x] Deployment (Vercel + Render + Atlas)
- [ ] RAG-based interview question generator
- [ ] Resume comparison (version A/B)
- [ ] PDF export of analysis report
- [ ] Chrome extension for one-click JD import

---

## 👤 Author

**Ganesh Mishra**
MERN Stack Developer | Full Stack Engineer

- GitHub: [@ganesh02M](https://github.com/ganesh02M)
- LinkedIn: [ganesh-mishra](https://linkedin.com/in/ganesh-mishra)
- LeetCode: [Ganesh9305](https://leetcode.com/u/Ganesh9305)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Built with ❤️ during placement season, to solve a real problem for real applicants.
</div>