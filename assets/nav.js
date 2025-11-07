function createNavBar(activePage) {
  const mobileNav = document.getElementById("mobileNav");
  if (!mobileNav) return;

  mobileNav.innerHTML = `
    <nav class="bottom-nav">
      <a href="home.html" class="${activePage === 'home' ? 'active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5l9-7 9 7v10.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V13H9v6.5a2 2 0 0 1-2 2H3z"/></svg>
        <span>Home</span>
      </a>

      <a href="dreams.html" class="${activePage === 'dreams' ? 'active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.536-7.536l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636"/></svg>
        <span>Dreams</span>
      </a>

      <a href="reflections.html" class="${activePage === 'reflections' ? 'active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6m-6 4h6m-6 4h4"/><circle cx="17" cy="7" r="1"/></svg>
        <span>Reflections</span>
      </a>

      <a href="profile.html" class="${activePage === 'profile' ? 'active' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-1a6 6 0 0 1 12 0v1"/></svg>
        <span>Profile</span>
      </a>
    </nav>
  `;
}
