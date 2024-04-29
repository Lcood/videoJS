const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
  // si le bouton ne contient pas la class "slide"
  if (!btn.classList.contains('slide')) {
    // alors tu me l'ajoutes + pas la méthode toggle car je veux aussi ajouter une fonctionnalité sur la video
    btn.classList.add('slide');
    // et tu me mets en pause la vidéo
    video.pause();
  } else {
    // sinon supprime moi la class "slide"
    btn.classList.remove('slide');
    // et tu me joue la video
    video.play();
  }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  // cacher le preloader lorsque la page aura chargée dans sa totalité
  preloader.classList.add('hide-preloader');
});
