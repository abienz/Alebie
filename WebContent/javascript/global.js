// JavaScript Document
document.addEventListener('DOMContentLoaded', function(){
  setupParticles();
  startAnim();
});

function setupParticles() {
  particlesJS.load('particles-js', '/javascript/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}

function startAnim() {
  const body = document.querySelector("body");
  const classNames = ['brand', 'creative', 'technical'];
  let i = 1;
  const interval = window.setInterval(function(){
    if (i < 3) {
      body.className = classNames[i];
      i++;
      if (i >= 3) i = 0;
    }
  }, 5000);
}
