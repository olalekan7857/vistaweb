/* ==========================================================================
   VistaWeb — Project data source
   --------------------------------------------------------------------------
   This is the ONLY file you need to edit to manage the project-detail pages.

   HOW IT WORKS:
   - `project.html?project=<slug>` reads the slug from the URL
     (for example `project.html?project=devblog`)
   - and displays the matching entry from `PROJECTS` below.
   - No new HTML page is needed for a new project.

   HOW TO ADD A NEW PROJECT:
   1. Copy one of the existing project blocks (from `slug: {` to the
      matching `},`) and paste it inside `PROJECTS`.
   2. Change the key (the slug) to a short, URL-friendly name,
      e.g. `campulse:` or `freshdirect:` (lowercase, no spaces).
   3. Fill in the fields. Any field you leave empty (`""` or `[]`
      or `null`) is simply hidden on the page — nothing breaks.
   4. Put the project's screenshots in `assets/images/` and point
      `images.cover` / `images.gallery` at them.
   5. On `index.html`, point the card's "View Project" button at
      `project.html?project=<your-slug>`.

   MARKING A PROJECT OFFLINE:
   - Set `liveUrl` to `null` AND add the `unavailable` class to that
     project's Visit link on `index.html`. The detail page then shows
     no Visit button at all (it also double-checks the homepage flag
     by itself, so the two pages stay in sync).

   FIELD GUIDE:
   - title:        Project name (becomes the page H1).
   - category:     Short badge shown above the title
                   (e.g. "SaaS Platform", "Expense Tracker").
   - tagline:      1–3 sentence summary shown under the title.
   - overview:     List of paragraphs explaining what the project is,
                   the problem it addresses, and what was built.
   - role:        Your role on the project (e.g. "Backend Engineer").
   - technologies: List of real tools used (only ones actually used).
   - features:     3–6 key features/capabilities (factual only).
   - technical:    List of technical work YOU actually performed.
   - outcome:      Short, factual summary of the result of your work.
                   Never invent statistics, users, or revenue figures.
   - timeline:     e.g. "2024". Leave as "" if unknown (field hides).
   - images.cover:   Main screenshot (shown large at the top).
   - images.gallery: Extra screenshots. Can hold 0, 1, or many images.
                      If empty, the gallery section is hidden.
   - images.alt:     Descriptive alt text for the cover image.
   - liveUrl:      Full https URL of the live site, or `null` when the
                   project is not currently online. When `null`, no Visit
                   button is shown at all.
   - sourceUrl:    Link to source code, case study, etc. — or `null`.
   ========================================================================== */

const PROJECTS = {

  "pillaven-saas": {
    title: "Pillaven SaaS",
    category: "SaaS Platform",
    tagline: "A scalable SaaS platform with secure APIs and admin tooling for managing projects and customer enquiries.",
    overview: [
      "Pillaven SaaS is a software-as-a-service platform for managing client projects and customer enquiries, backed by a scalable backend with secure APIs and admin tooling.",
      "I worked on the project as a backend engineer — creating the data models for adding new projects, implementing authentication, and handling contact-form submissions."
    ],
    role: "Backend Engineer",
    technologies: ["HTML", "CSS", "JavaScript", "Django"],
    features: [
      "Project models for creating and managing client projects",
      "Secure user authentication and access control",
      "Contact-form submission with backend validation"
    ],
    technical: [
      "Designed Django data models for creating and managing client projects",
      "Implemented user authentication and access control",
      "Built contact-form submission with backend validation",
      "Contributed to secure REST API design and admin tooling"
    ],
    outcome: "Backend engineer — built project models, authentication, contact-form handling, and API optimization.",
    timeline: "",
    images: {
      cover: "assets/images/Screenshot_239.png",
      gallery: [],
      alt: "Pillaven SaaS platform preview"
    },
    liveUrl: "https://saas.pillaven.com/",
    sourceUrl: null
  },

  "pillaven-cashbook": {
    title: "Pillaven Cashbook",
    category: "Expense Tracker",
    tagline: "An expense tracking platform that helps users log income and expenses and keep clean financial records.",
    overview: [
      "Pillaven Cashbook is an expense tracking platform that enables users to log income and expenses, track financial records, and export comprehensive statements as PDF or Excel files.",
      "I contributed to the backend development of the platform, working on the transaction logic and statement generation."
    ],
    role: "Backend Developer (Contributor)",
    technologies: ["HTML", "CSS", "JavaScript", "Django"],
    features: [
      "Income and expense logging with categorized records",
      "Financial history tracking and balance summaries",
      "Statement export as PDF and Excel files"
    ],
    technical: [
      "Contributed to backend architecture for income and expense records",
      "Built transaction logic for financial history and balance summaries",
      "Implemented statement export as PDF and Excel files"
    ],
    outcome: "Contributed to backend architecture, transaction logic, and PDF/Excel statement generation.",
    timeline: "",
    images: {
      cover: "assets/images/pillaven_cashbook-screenshot.png",
      gallery: [],
      alt: "Pillaven Cashbook expense tracking platform preview"
    },
    // Live Cashbook URL (matches the Visit link on index.html).
    liveUrl: "https://cashbook.pillaven.com",
    sourceUrl: null
  },

  "vistaweb": {
    title: "VistaWeb (My Portfolio)",
    category: "Portfolio Website",
    tagline: "A responsive personal portfolio website showcasing software projects, technical skills, and professional services.",
    overview: [
      "VistaWeb is my personal portfolio website, designed and developed to showcase software projects, highlight technical capabilities, and present professional services offered.",
      "I handled the project end-to-end: UI design, responsive frontend build, and deployment."
    ],
    role: "Designer & Developer (Solo)",
    technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    features: [
      "Responsive showcase layout for projects and services",
      "SEO-friendly structure with fast load times",
      "Deployed and hosted on Vercel"
    ],
    technical: [
      "Designed a responsive showcase layout for projects and services",
      "Built clean, accessible interfaces with HTML, CSS, and JavaScript",
      "Structured pages for SEO with fast load times",
      "Deployed and hosted the site on Vercel"
    ],
    outcome: "Designed and developed end-to-end — UI design, frontend build, and deployment.",
    timeline: "",
    images: {
      cover: "assets/images/vistaweb_hero.png",
      gallery: [],
      alt: "VistaWeb portfolio website preview"
    },
    // Live URL of the main portfolio site itself.
    liveUrl: "https://vistaweb.com.ng/",
    sourceUrl: null
  },

  "devblog": {
    title: "Devblog",
    category: "Blog Platform",
    tagline: "A developer-focused publishing platform for writing, sharing, and discovering technical articles.",
    overview: [
      "Devblog is a developer-focused publishing platform for writing, sharing, and discovering technical articles.",
      "I worked together with a team to create the frontend and the backend — collaborating on UI implementation, Django backend logic, and deployment."
    ],
    role: "Full-Stack Contributor (Team)",
    technologies: ["HTML", "CSS", "JavaScript", "Django"],
    features: [
      "Responsive frontend UI for reading and publishing posts",
      "Django backend logic for posts, users, and content",
      "Team collaboration across UI and API implementation"
    ],
    technical: [
      "Collaborated on the responsive frontend UI for reading and publishing posts",
      "Built Django backend logic for posts, users, and content",
      "Worked with the team across UI and API implementation",
      "Contributed to deployment"
    ],
    outcome: "Full-stack contributor — collaborated on UI, Django backend logic, and deployment.",
    timeline: "",
    images: {
      cover: "assets/images/devblog-hero.webp",
      gallery: [],
      alt: "DevBlog homepage preview with hero section and latest blog posts"
    },
    // The devblog.com.ng domain is no longer online, so no live link
    // is shown — the page simply omits the Visit button instead.
    liveUrl: null,
    sourceUrl: null
  }

};
