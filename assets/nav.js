// Simple shared navigation for all public pages
// Usage in each page: createNavBar("home" | "dreams" | "reflections" | "profile");

function createNavBar(active) {
  const pages = [
    { id: "home", label: "Home", icon: "🏠", href: "home.html" },
    { id: "dreams", label: "Dreams", icon: "🎯", href: "dreams.html" },
    { id: "reflections", label: "Reflections", icon: "📖", href: "reflections.html" },
    { id: "profile", label: "Profile", icon: "👤", href: "profile.html" },
  ];

  // === HEADER (desktop / tablet) ===
  const header = document.getElementById("appHeader");
  if (header) {
    header.innerHTML = `
      <div class="app-header">
        <div class="app-header-inner">
          <div class="brand">
            <div class="brand-orbit">🌕</div>
            <div>
              <div class="brand-text-main">DAYLIFE</div>
              <div class="brand-text-sub">Every day counts</div>
            </div>
          </div>
          <nav class="top-nav">
            ${pages
              .map(
                (p) => `
              <button
                class="top-nav-item ${p.id === active ? "active" : ""}"
                onclick="location.href='${p.href}'"
              >
                <span class="top-nav-icon">${p.icon}</span>
                <span class="top-nav-label">${p.label}</span>
              </button>
            `
              )
              .join("")}
          </nav>
        </div>
      </div>
    `;
  }

  // === BOTTOM NAV (mobile) ===
  const bottom = document.getElementById("bottomNav");
  if (bottom) {
    bottom.innerHTML = `
      <nav class="bottom-nav">
        <div class="bottom-nav-inner">
          ${pages
            .map(
              (p) => `
            <a
              href="${p.href}"
              class="bottom-nav-item ${p.id === active ? "active" : ""}"
            >
              <span class="bottom-nav-icon">${p.icon}</span>
              <span>${p.label}</span>
            </a>
          `
            )
            .join("")}
        </div>
      </nav>
    `;
  }
}
