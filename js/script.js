let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active')
}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')
}

document.getElementById('menuBtn').addEventListener('click', () => {
  window.location.href = 'menu.html';
});
document.getElementById('menuBtntwo').addEventListener('click', () => {
  window.location.href = 'menu.html';
});
document.getElementById('navmenu').addEventListener('click', () => {
  window.location.href = 'menu.html';
});

