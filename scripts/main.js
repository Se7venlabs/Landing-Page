import { COMPONENTS } from '../config/settings.js';

async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(path);
  const html = await res.text();
  el.innerHTML = html;
}

async function init() {
  for (const comp of COMPONENTS) {
    await loadComponent(comp.id, comp.path);
  }

  document.dispatchEvent(new Event('components:loaded'));
}

init();
