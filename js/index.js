const toggleBtns = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtns.addEventListener('click', (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện click
  navbarLinks.classList.toggle('active');
});
