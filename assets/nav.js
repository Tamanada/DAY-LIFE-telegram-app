// assets/nav.js
function createNavBar(activePage) {
  const nav = document.getElementById("mobileNav");
  if (!nav) return;

  nav.innerHTML = `
    <a href="home.html" class="${activePage === 'home' ? 'active' : ''}">
      <i>🏠</i>
      Home
    </a>
    <a href="dreams.html" class="${activePage === 'dreams' ? 'active' : ''}">
      <i>💭</i>
      Dreams
    </a>
    <a href="reflections.html" class="${activePage === 'reflections' ? 'active' : ''}">
      <i>🪞</i>
      Reflections
    </a>
    <a href="profile.html" class="${activePage === 'profile' ? 'active' : ''}">
      <i>👤</i>
      Profile
    </a>
  `;
}
