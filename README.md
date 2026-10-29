# Preetom Saha — Personal Portfolio Website

A responsive, high-performance, and authentic portfolio website built for **Preetom Saha**, 2nd-year B.Tech Computer Science & Engineering (Data Science) student at Narula Institute of Technology (JIS Group), Kolkata.

This portfolio is strictly based on Preetom's verified LinkedIn profile, college enrollment records (Roll No: `127250900089`), authentic credentials (TCS iON, Infosys Springboard, IBM SkillsBuild, Google Cloud, Best Computer Technology), and actual academic deliverables.

---

## 🌟 Key Features

- **Automatic Light / Dark Theme**:
  - Automatically respects the visitor's OS preference (`prefers-color-scheme`).
  - Implements dynamic listeners (`matchMedia.addEventListener('change')`) for instant live theme switching.
  - Zero-flash initial load script in `<head>`.
  - Manual toggle cycle (`Auto (System)` → `Light` → `Dark`).
- **Authentic Assets & Evidence**:
  - Genuine profile photograph (`/assets/preetom-photo.jpg`).
  - Viewable & downloadable verified PDF resume (`/assets/Preetom_Saha_Resume.pdf`).
  - Genuine certificate credentials with Credly and OnWingspan links and modal image viewer (TCS iON `8766-29971339-1016`, Infosys Springboard, IBM SkillsBuild, Google Cloud Vertex AI badge).
  - Genuine EduSkills AICTE Offer Letter (`C18Y2026M091578812`) for Google Cloud Generative AI Virtual Internship.
- **Human-Crafted, Professional UI**:
  - Semantic typography and generous whitespace.
  - No fake terminal windows, generic cards, or artificial percentage bars.
  - Transparent badges labeling items as **Verified**, **Documented**, or **Pending Confirmation**.
- **Interactive Modals**:
  - Embedded PDF Resume viewer with instant download button.
  - Full-resolution certificate image viewer.
  - In-depth project breakdown modal (Problem statement, architecture, features, contribution).
- **Interactive Contact Form**:
  - Client-side validation.
  - One-click copy email button with feedback tooltip.
  - Direct mailto dispatch to `mr.preetomsaha@gmail.com`.

---

## 📁 Project Structure

```text
preetom-portfolio/
├── public/
│   └── assets/                     # Genuine photography, certificates & resume
│       ├── preetom-photo.jpg
│       ├── Preetom_Saha_Resume.pdf
│       ├── infosys-pyspark-certificate.jpg
│       ├── ibm-skillsbuild-genai.jpg
│       ├── google-cloud-vertex-ai.png
│       ├── ibm-granite-models.png
│       ├── ibm-data-analytics.png
│       └── eduskills-internship-offer.jpg
├── src/
│   ├── data/
│   │   └── portfolio.ts            # Central editable source of truth
│   ├── hooks/
│   │   └── useTheme.ts             # System theme detection & persistence
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navigation with theme indicator
│   │   ├── Hero.tsx                # Hero section with verified badges
│   │   ├── AboutSection.tsx        # Academic journey & pillars
│   │   ├── ExperienceSection.tsx   # EduSkills & Alfido Tech internships
│   │   ├── ProjectsSection.tsx     # AI Sentinel, AegisOS, Biofuels Assessment
│   │   ├── SkillsSection.tsx       # Evidence-backed skill taxonomy
│   │   ├── EducationSection.tsx    # NIT Agarpara & Ariadaha Kalachand HS
│   │   ├── CertificationsSection.tsx # TCS iON, Infosys, IBM, Google Cloud
│   │   ├── EventsSection.tsx       # HexaFalls 2, Google Ambassador Pitch
│   │   ├── ContactSection.tsx      # Contact cards & validated form
│   │   ├── ResumeModal.tsx         # Embedded PDF previewer & download
│   │   ├── Footer.tsx              # Attribution & back-to-top
│   │   └── Icons.tsx               # SVG brand icons (LinkedIn, GitHub)
│   ├── App.tsx                     # Main layout orchestration
│   ├── index.css                   # Custom CSS variables & Tailwind v4
│   └── main.tsx                    # React DOM entry point
├── index.html                      # SEO metadata & theme pre-render script
├── vite.config.ts                  # Vite + Tailwind v4 configuration
├── vercel.json                     # Vercel SPA routing & asset cache rules
└── netlify.toml                    # Netlify SPA redirect & cache config
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v24.20.0)
- **npm** v9+ (or pnpm / yarn)

### 2. Installation
```bash
cd C:\Users\User\.gemini\antigravity\scratch\preetom-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
This runs `tsc -b` for strict type checking and `vite build` to generate the production-ready `dist` folder.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Content & Information

All content is strictly separated from the presentation layer and stored in:
`src/data/portfolio.ts`

### 1. Update Personal Info & Social Links
Open `src/data/portfolio.ts` and modify `portfolioData.personal` or `portfolioData.socialLinks`:
```typescript
personal: {
  name: "Preetom Saha",
  headline: "B.Tech Computer Science & Engineering (Data Science) Student",
  email: "mr.preetomsaha@gmail.com",
  phone: "+91 8100645894",
  ...
}
```

### 2. Update Resume or Profile Photo
- **Photo**: Replace `public/assets/preetom-photo.jpg` with a new JPEG/PNG image.
- **Resume**: Replace `public/assets/Preetom_Saha_Resume.pdf` with your updated resume PDF.

### 3. Add or Update Projects
In `portfolioData.projects`, update or append new project objects:
```typescript
{
  id: "my-new-project",
  title: "Project Name",
  subtitle: "One-line description",
  category: "Artificial Intelligence & Vision",
  status: "Prototype / Under Development",
  problemStatement: "Problem solved...",
  overview: "Detailed overview...",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Python", "PySpark"],
  myContribution: "What you contributed...",
  verification: {
    status: "verified",
    note: "GitHub repository verified."
  }
}
```

### 4. Add or Update Certifications
In `portfolioData.certifications`, add your certificates:
```typescript
{
  id: "cert-id",
  title: "Course Name",
  issuer: "Issuing Body",
  issueDate: "Month Year",
  credentialId: "CERT-12345",
  verificationUrl: "https://...",
  imagePath: "/assets/my-certificate.jpg",
  topicsCovered: ["Topic 1", "Topic 2"],
  verification: {
    status: "verified",
    note: "Verified via Certificate ID."
  }
}
```

---

## 🌐 Deploying to Production

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**.
5. Click **"Deploy"**. The preconfigured `vercel.json` will handle SPA routing automatically.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **"Deploy Site"**. The included `netlify.toml` configures rewrite redirects and cache headers.

---

## 📄 License
Personal portfolio project for Preetom Saha.
