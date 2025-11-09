// assets/dreams.js

document.addEventListener("DOMContentLoaded", () => {
  const dreamsList = document.getElementById("dreamsList");
  const newDreamBtn = document.getElementById("newDreamBtn");

  // Charger les rêves du localStorage
  let dreams = JSON.parse(localStorage.getItem("daylifeDreams")) || [];

  function saveDreams() {
    localStorage.setItem("daylifeDreams", JSON.stringify(dreams));
  }

  function renderDreams() {
    dreamsList.innerHTML = "";

    if (dreams.length === 0) {
      dreamsList.innerHTML = `
        <p class="section-subtitle" style="text-align:center; margin-top:24px;">
          No dreams yet. Click “New Dream” to begin 🌙
        </p>`;
      return;
    }

    dreams.forEach((dream, index) => {
      const card = document.createElement("div");
      card.className = "dream-card";

      card.innerHTML = `
        <div class="dream-header">
          <h3>${dream.title}</h3>
          <div class="dream-actions">
            <button class="btn-icon edit" title="Edit dream" data-index="${index}">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="btn-icon delete" title="Delete dream" data-index="${index}">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
        <p>${dream.description || ""}</p>
        <div class="dream-meta">
          <i data-lucide="calendar"></i> ${dream.date || ""}
        </div>
      `;

      dreamsList.appendChild(card);
    });

    lucide.createIcons();
  }

  // Ajouter un nouveau rêve
  newDreamBtn.addEventListener("click", () => {
    const title = prompt("✨ What is your dream?");
    if (!title) return;

    const description = prompt("💭 Describe your dream briefly:");
    const date = prompt("📅 Target date (YYYY-MM-DD):");

    dreams.push({ title, description, date });
    saveDreams();
    renderDreams();
  });

  // Écouter les clics sur edit/delete
  dreamsList.addEventListener("click", (e) => {
    const editBtn = e.target.closest(".edit");
    const delBtn = e.target.closest(".delete");

    if (editBtn) {
      const index = editBtn.dataset.index;
      const dream = dreams[index];
      const newTitle = prompt("✏️ Update dream title:", dream.title);
      const newDesc = prompt("📝 Update description:", dream.description);
      const newDate = prompt("📅 Update target date (YYYY-MM-DD):", dream.date);
      dreams[index] = { title: newTitle, description: newDesc, date: newDate };
      saveDreams();
      renderDreams();
    }

    if (delBtn) {
      const index = delBtn.dataset.index;
      if (confirm("❌ Delete this dream?")) {
        dreams.splice(index, 1);
        saveDreams();
        renderDreams();
      }
    }
  });

  renderDreams();
});
