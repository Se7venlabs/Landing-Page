import { COMPONENTS } from "../config/settings.js";

function loadComponent(id, path) {
  return fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

async function init() {
  const promises = COMPONENTS.map(c =>
    loadComponent(c.id, c.path)
  );

  await Promise.all(promises);

  document.dispatchEvent(new Event("components:loaded"));
}

init();
