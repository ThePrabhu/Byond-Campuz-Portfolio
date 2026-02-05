const campuzImg = document.querySelector(".campuz-image-container");
const centerText = document.querySelector(".hero-text");
const btnContainer = document.querySelectorAll(".btn");

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
