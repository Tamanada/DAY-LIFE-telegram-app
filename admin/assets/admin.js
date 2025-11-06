/* === SIMULATED USER DATA === */
const users = [
  { name: "David Deveaux", email: "lovephangan@gmail.com", country: "France", sex: "Homme", role: "Admin", days: 18676, stars: 25 },
  { name: "Nanda", email: "nanda@daylife.app", country: "Myanmar", sex: "Femme", role: "User", days: 12045, stars: 18 },
  { name: "Marie", email: "marie@daylife.app", country: "France", sex: "Femme", role: "User", days: 4500, stars: 12 },
  { name: "Alex Moon", email: "alex@daylife.app", country: "USA", sex: "Homme", role: "Admin", days: 9950, stars: 30 },
  { name: "Tao", email: "tao@daylife.app", country: "Thaïlande", sex: "Homme", role: "User", days: 4745, stars: 9 },
];

/* === DOM ELEMENTS === */
const searchInput = document.getElementById("searchUser");
const table = document.getElementById("userTable");
const exportBtn = document.getElementById("exportCSV");
const logoutBtn = document.getElementById("logoutBtn");

/* === RENDER FUNCTION === */
function renderUsers(filter = "") {
  table.innerHTML = "";

  users
    .filter(u =>
      u.name.toLowerCase().includes(filter) ||
      u.email.toLowerCase().includes(filter)
    )
    .forEach(u => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.country}</td>
        <td>${u.sex}</td>
        <td>
          <span class="role-badge ${u.role === "Admin" ? "role-admin" : "role-user"}">
            ${u.role}
          </span>
        </td>
        <td>${u.days}</td>
        <td>${u.stars}</td>
        <td>
          <button class="btn-edit">Modifier</button>
          <button class="btn-delete">Supprimer</button>
        </td>
      `;

      // Action buttons
      row.querySelector(".btn-edit").addEventListener("click", () => {
        alert(`✏️ Modification de ${u.name} (${u.role})`);
      });

      row.querySelector(".btn-delete").addEventListener("click", () => {
        const confirmDelete = confirm(`Voulez-vous supprimer ${u.name} ?`);
        if (confirmDelete) {
          alert(`${u.name} supprimé avec succès ✅`);
        }
      });

      table.appendChild(row);
    });
}

/* === SEARCH === */
searchInput.addEventListener("input", e => {
  renderUsers(e.target.value.toLowerCase());
});

/* === EXPORT CSV === */
exportBtn.addEventListener("click", () => {
  let csv = "Nom,Email,Pays,Sexe,Rôle,Jours vécus,Étoiles\n";
  users.forEach(u => {
    csv += `${u.name},${u.email},${u.country},${u.sex},${u.role},${u.days},${u.stars}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "daylife_users.csv";
  link.click();
});

/* === LOGOUT === */
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("adminLoggedIn");
  alert("Vous avez été déconnecté ✅");
  window.location.href = "index.html";
});

/* === INIT === */
renderUsers();
