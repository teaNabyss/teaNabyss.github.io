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
  document.getElementById('close-greetings').addEventListener('click', () => {
    document.getElementById('greetings-popup').style.display = 'none';
    document.getElementById('nav-greetings').classList.remove('opened-window');
  });

});