# IoT Lab Website Audit & Revamp
## Phase 1 Report: Security Hardening & API Centralization

**Date:** July 9, 2026
**Target Branch:** `v1`

---

### 1. Executive Summary
During Phase 1 of the IoT Lab website modernization, we conducted a targeted audit focused on identifying and mitigating critical security vulnerabilities, standardizing API communication, and improving application resilience. All identified issues in this phase have been successfully resolved and committed.

---

### 2. Security Enhancements (XSS Remediation)

> **Vulnerability:** Cross-Site Scripting (XSS) Risk
> The application was utilizing `dangerouslySetInnerHTML` to render unsanitized content directly into the DOM (e.g., CP-Probs questions). This exposed the site to potential injection attacks if malicious content was entered into the database.

**Actions Taken:**
* **Input Sanitization:** Installed `isomorphic-dompurify` and applied it to dynamic user-generated content in `SubAccordionCard.tsx` before rendering.
* **Component Refactoring:** Refactored `BottomCards.jsx` and `EventCard.jsx`. Previously, these components used `dangerouslySetInnerHTML` to inject hardcoded SVG styles, which triggered security scanner warnings. These were replaced with standard React `<style>` tags.

---

### 3. Architecture: API Centralization

> **Technical Debt:** Hardcoded API Endpoints
> Production API URLs (`https://api.iotkiit.in`) were hardcoded across more than 8 different components and pages. This made environment switching (e.g., testing against a local backend or staging server) virtually impossible without manually changing code.

**Actions Taken:**
* **Configuration Layer:** Created a centralized configuration file at `lib/config.ts` exporting a single `API_URL` constant.
* **Environment Variables:** Implemented `process.env.NEXT_PUBLIC_API_URL` to allow dynamic environment switching.
* **Template Generation:** Added a `.env.example` file to standardize local development setups for new contributors.
* **Codebase Refactor:** Replaced all hardcoded string URLs with the centralized `API_URL` in:
  * `ProjectCard.tsx`
  * `SpeakerCard.tsx`
  * `RequestForm.tsx`
  * `AccordionCard.tsx`
  * `app/cp-probs/page.tsx`
  * `app/labstatus.tsx`
  * `app/status/page.tsx`

---

### 4. Application Resilience (Error Boundaries)

> **Stability Issue:** Unhandled Promise Rejections
> Multiple client-side `fetch` calls lacked error handling. If the IoT Lab backend experienced downtime, the frontend would fail silently or crash.

**Actions Taken:**
* Added explicit `.catch()` blocks and `try/catch` wrappers to all isolated fetch calls.
* Handled loading states (`isLoading`) gracefully within the `finally` blocks to ensure the UI doesn't remain in a perpetual loading state when network errors occur.
* Removed deprecated/dead `getStaticProps` code remnants from `app/webinar/page.tsx`.

---

### 5. Configuration & Dependency Hygiene

**Actions Taken:**
* **Next.js Security Config:** Upgraded the legacy `images.domains` configuration in `next.config.js` to the stricter and more secure `remotePatterns` standard recommended by Next.js.
* **Ghost Dependencies:** Removed a problematic `"all": "^0.0.0"` entry from `package.json` that was causing package manager warnings.

---

### Conclusion
Phase 1 is officially complete. The application is now more secure against basic injection attacks, significantly easier to configure for local development, and resilient against API outages. 

**Next Steps (Phase 2):** 
Address the significant technical debt in `package.json` by mapping out a conservative modernization strategy for Next.js, Material UI, and TailwindCSS.
