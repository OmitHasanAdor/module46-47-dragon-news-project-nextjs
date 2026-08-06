# 📰 Dragon News – Modern News & Media Platform

### Dragon News is a fully responsive, modern news platform built with Next.js, delivering breaking news, category-based browsing, and secure user authentication. Readers can explore news by category, view detailed articles, and sign in seamlessly through Google or GitHub, all wrapped in a clean, mobile-first navy-and-white interface.

---

## Technologies Used

* **Frontend Framework:** React.js & Next.js (App Router)
* **Authentication:** Better Auth (Email/Password, Google & GitHub Social Login)
* **Styling & UI Components:** Tailwind CSS, DaisyUI
* **Forms & Validation:** React Hook Form
* **Data Fetching:** Next.js Server Components, Native Fetch API
* **Marquee/Ticker:** React Fast Marquee (Breaking News bar)
* **Date Formatting:** date-fns
* **Icons:** React Icons
* **Deployment:** Vercel

---

## Features

1. **Category-Based News Browsing:** Dynamic category pages (`/category/[id]`) letting readers filter news by Breaking, Regular, International, Sports, Entertainment, Culture, and more.
2. **Secure Authentication:** Email/password sign-up and sign-in flows alongside one-click Google and GitHub social login, powered by Better Auth.
3. **Breaking News Ticker:** A live scrolling marquee bar highlighting the latest headlines at the top of every page.
4. **Detailed Article Pages:** Server-rendered individual news detail pages (`/news/[id]`) with dynamic SEO metadata, full article content, and category-linked navigation.
5. **Fully Responsive Layout:** A three-column desktop layout (categories, news feed, login & social panel) that collapses into a clean, stacked mobile experience with a slide-in category drawer.
6. **Sticky Navigation & Sidebars:** Persistent navbar and sticky category/login sidebars on desktop for effortless browsing, without sacrificing mobile usability.
7. **Author & Engagement Details:** Each news card displays author info, publish date, star ratings, view counts, bookmark, and share actions.
8. **Q-Zone Highlights:** A dedicated panel showcasing featured lifestyle content (Swimming, Class, Play Ground) alongside social media links.
9. **Consistent Navy-Blue Theme:** A clean, professional light theme built for readability across all devices.
10. **Form Validation & Feedback:** Real-time validation errors and success/failure alerts on sign-up and sign-in using React Hook Form.