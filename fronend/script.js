const campuzImg = document.querySelector(".campuz-image-container");
const centerText = document.querySelector(".hero-text");
const btnContainer = document.querySelectorAll(".Mybtn");

if (campuzImg) {
  setTimeout(() => {
    campuzImg.classList.remove("hideClass");
  }, 600);
}

setTimeout(()=>{
    centerText.classList.remove("hideClass");
} , 2000)

setTimeout(() => {
    btnContainer.forEach(button => {
        button.classList.remove("hideClass");
    });
}, 2100);

const btnWrapper = document.querySelector(".btn-container");

setTimeout(() => {
    btnWrapper.classList.remove("hideClass");
}, 2100);

const section = document.querySelector('.showcase');
const mainCard = document.querySelector('.main-card');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // progress: 0 → 1 while section is in view
  const progress = Math.min(
    Math.max((windowHeight - rect.top) / windowHeight, 0),
    1
  );

  // move DOWN only
  const moveDown = progress * 160;

  mainCard.style.transform = `translateY(${moveDown}px)`;
});

