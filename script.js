const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
const profileImage = document.querySelector('.hero-photo img');

profileImage.addEventListener('mouseenter', () => {
  profileImage.style.transition = 'transform 0.8s ease';
  profileImage.style.transform = 'scale(1.15)';
});

profileImage.addEventListener('mouseleave', () => {
  profileImage.style.transform = 'scale(1)';
});
