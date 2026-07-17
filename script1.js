document.addEventListener('DOMContentLoaded', () => {

  // UPDATE THESE when you add new posts or projects
  const siteData = {
    lastPost: {
      name: "Another Post",
      url: "posts.html"
    },
    currentProject: {
      name: "Project Name",
      url: "projects.html"
    }
  };

  // fill in sidebar
  const lastPostEl = document.getElementById('last-post');
  const currentProjectEl = document.getElementById('current-project');

  if (lastPostEl) {
    lastPostEl.innerHTML = `<a href="${siteData.lastPost.url}">${siteData.lastPost.name}</a>`;
  }

  if (currentProjectEl) {
    currentProjectEl.innerHTML = `<a href="${siteData.currentProject.url}">${siteData.currentProject.name}</a>`;
  }

  // close greetings
  const closeBtn = document.getElementById('close-greetings');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('greetings-popup').style.display = 'none';
      document.getElementById('nav-greetings').classList.remove('opened-window');
    });
  }
  
  // dialog popup
 const overlay = document.getElementById('dialog-overlay');
  if (overlay) {
    const dialogText = document.getElementById('dialog-text');
    const dialogButtons = document.getElementById('dialog-buttons');

    document.querySelectorAll('.proceed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        const github = btn.getAttribute('data-github');
        const itchio = btn.getAttribute('data-itchio');
        const project = btn.getAttribute('data-project');

        dialogText.textContent = `Where do you want to proceed with ${name}?`;
        dialogButtons.innerHTML = '';

        if (github) {
          const ghBtn = document.createElement('button');
          ghBtn.className = 'win-btn';
          ghBtn.textContent = 'GitHub';
          ghBtn.addEventListener('click', () => { window.open(github, '_blank'); overlay.style.display = 'none'; });
          dialogButtons.appendChild(ghBtn);
        }

        if (itchio) {
          const itchBtn = document.createElement('button');
          itchBtn.className = 'win-btn';
          itchBtn.textContent = 'itch.io';
          itchBtn.addEventListener('click', () => { window.open(itchio, '_blank'); overlay.style.display = 'none'; });
          dialogButtons.appendChild(itchBtn);
        }

        if (project) {
          const projBtn = document.createElement('button');
          projBtn.className = 'win-btn';
          projBtn.textContent = 'Website';
          projBtn.addEventListener('click', () => { window.open(project, '_blank'); overlay.style.display = 'none'; });
          dialogButtons.appendChild(projBtn);
        }

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'win-btn';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', () => { overlay.style.display = 'none'; });
        dialogButtons.appendChild(cancelBtn);

        overlay.style.display = 'flex';
      });
    });

