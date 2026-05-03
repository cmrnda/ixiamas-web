
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('.menu a').forEach(a=>{
  if(a.getAttribute('href') === location.pathname.split('/').pop() || (location.pathname.endsWith('/') && a.getAttribute('href')==='index.html')){
    a.classList.add('active');
  }
});
