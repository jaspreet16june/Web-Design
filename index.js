const btn = document.getElementById('btn');
const sideBar = document.getElementById('side-bar');

btn.addEventListener('click', () => {
    sideBar.classList.toggle('active');

})