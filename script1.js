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
    const dialogOk = document.getElementById('dialog-ok');
    const dialogCancel = document.getElementById('dialog-cancel');
    let currentUrl = '';

    document.querySelectorAll('.proceed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-name');
        currentUrl = btn.getAttribute('data-url');
        dialogText.textContent = `Do you want to proceed to ${name} GitHub page?`;
        overlay.style.display = 'flex';
      });
    });

    dialogOk.addEventListener('click', () => {
      window.open(currentUrl, '_blank');
      overlay.style.display = 'none';
    });

    dialogCancel.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    document.querySelectorAll('.win-btn:not(.proceed-btn)').forEach(btn => {
      btn.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
    });
  }

});
