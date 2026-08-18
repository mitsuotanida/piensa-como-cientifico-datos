const content = window.COURSE_CONTENT; // Toma los datos del curso definidos en content.js para pintar la página sin repetir HTML.

const objectiveGrid = document.querySelector("#objectiveGrid"); // Guarda el lugar donde aparecerán los objetivos específicos.
const sessionList = document.querySelector("#sessionList"); // Guarda el contenedor de las seis sesiones del taller.
const materialsGrid = document.querySelector("#materialsGrid"); // Guarda el contenedor de las tarjetas de materiales.
const materialCount = document.querySelector("#materialCount"); // Guarda el texto que muestra cuántos archivos hay publicados.
const progressBar = document.querySelector("#progressBar"); // Guarda la barra visual que representa el progreso del taller.
const progressLabel = document.querySelector("#progressLabel"); // Guarda el contador de sesiones realizadas sobre el total.

function renderObjectives() {
  objectiveGrid.innerHTML = content.objectives.map((objective, index) => `
    <article class="objective-card reveal">
      <div class="objective-icon">${String(index + 2).padStart(2, "0")}</div>
      <h3>${objective.title}</h3>
      <p>${objective.description}</p>
    </article>
  `).join("");
}

function renderSessions() {
  sessionList.innerHTML = content.sessions.map((session) => {
    const links = session.materials.length
      ? session.materials.map((item) => `<a class="mini-link" href="${item.path}" download>${item.label} ↓</a>`).join("")
      : `<span class="no-material">Material disponible próximamente</span>`;

    return `
      <article class="session-card reveal">
        <div class="session-index">${String(session.number).padStart(2, "0")}</div>
        <div>
          <div class="session-title-row">
            <h3>${session.title}</h3>
            <span class="status-badge ${session.status === "done" ? "status-done" : "status-next"}">${session.statusLabel}</span>
          </div>
          <p>${session.description}</p>
        </div>
        <div class="session-materials">${links}</div>
      </article>
    `;
  }).join("");

  const completed = content.sessions.filter((session) => session.status === "done").length; // Cuenta cuántas sesiones ya fueron realizadas para calcular el avance.
  const total = content.sessions.length; // Cuenta el total de sesiones planificadas del taller.
  progressLabel.textContent = `${completed} / ${total}`;
  requestAnimationFrame(() => {
    progressBar.style.width = `${(completed / total) * 100}%`;
  });
}

function renderMaterials(filter = "all") {
  const visibleMaterials = filter === "all"
    ? content.library
    : content.library.filter((item) => item.type === filter); // Selecciona solo los archivos que coinciden con el filtro activo.

  materialCount.textContent = `${content.library.length} ${content.library.length === 1 ? "archivo" : "archivos"}`;

  materialsGrid.innerHTML = visibleMaterials.map((item) => `
    <article class="material-card reveal visible">
      <div class="material-top">
        <div class="file-icon">${item.type}</div>
        <span class="file-type">${item.type}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="material-meta">
        <span>${item.session}</span>
        <a class="download-link" href="${item.path}" download>Descargar ↓</a>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  document.querySelectorAll(".filter-pill").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-pill").forEach((pill) => pill.classList.remove("active"));
      button.classList.add("active");
      renderMaterials(button.dataset.filter);
    });
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }); // Crea un observador que activa una animación cuando cada bloque entra en pantalla.

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

renderObjectives();
renderSessions();
renderMaterials();
setupFilters();
setupRevealAnimation();