function createObserver(elementId, titleId) {
  let elementDiv = document.getElementById(elementId);
  let title = document.getElementById(titleId);
  let timeOutHidder;
  let observer = new IntersectionObserver(function (entries) {
      for (let entry of entries) {
          if (entry.isIntersecting) {
              // On affiche le texte
              title.classList.remove('slide-up');
              title.classList.add('slide-down');
              // On cache le texte après 3 secondes
              timeOutHidder = setTimeout(() => {
                  title.classList.remove('slide-down');
                  title.classList.add('slide-up');
              }, 3000);
          } else {
              // On cache le texte
              clearTimeout(timeOutHidder)
              title.classList.remove('slide-down', 'slide-up');
          }
      }
  }, { threshold: 0.6 });  // Ici on ajoute un seuil d'intersection

  // On commence l'observation de l'élément
  observer.observe(elementDiv);
}

createObserver('projects', 'projectsTitle');
createObserver('about-me', 'about-meTitle');

function hideTitle(titleId) {
  let title = document.getElementById(titleId);
  title.classList.remove('slide-down', 'slide-up');
}

window.addEventListener('load', function() {
  setTimeout(() => {
    hideTitle('projectsTitle');
    hideTitle('about-meTitle');
  }, 3000);
});

window.addEventListener('hashchange', function() {
  setTimeout(() => {
    hideTitle('projectsTitle');
    hideTitle('about-meTitle');
  }, 3000);
});