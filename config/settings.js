// /config/settings.js
// Central configuration for components and the scan flow.

export const COMPONENTS = [
  { id: 'navbar', path: '/components/navbar.html' },
  { id: 'hero', path: '/components/hero.html' },
  { id: 'problem', path: '/components/problem.html' },
  { id: 'solution', path: '/components/solution.html' },
  { id: 'dashboard-preview', path: '/components/dashboard-preview.html' },
  { id: 'how-it-works', path: '/components/how-it-works.html' },
  { id: 'testimonials', path: '/components/testimonials.html' },
  { id: 'cta', path: '/components/cta.html' },
];

export const SCAN = {
  endpoint: '/scan',
};
