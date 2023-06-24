// Start
let myImgs = Array.from(
  document.querySelectorAll(".landing .landing-imgs img")
);

let slidesCount = myImgs.length;
let currentSlid = 1;

let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

let landingSiction = document.querySelector(".landing");

// create ul & li

let myUl = document.createElement("ul");
myUl.className = "bullets";

for (let i = 1; i <= slidesCount; i++) {
  let myLi = document.createElement("li");
  myLi.setAttribute("data-count", i);
  myUl.appendChild(myLi);
}
landingSiction.appendChild(myUl);

nextBtn.onclick = function () {
  currentSlid++;
  if (currentSlid > slidesCount) {
    currentSlid = 1;
  }
  setSlides();
};
prevBtn.onclick = function () {
  currentSlid--;
  if (currentSlid < 1) {
    currentSlid = slidesCount;
  }
  setSlides();
};
setSlides();

function setSlides() {
  removeActive();

  myUl.children[currentSlid - 1].classList.add("active");

  myImgs[currentSlid - 1].classList.add("active");
}
function removeActive() {
  let myLiArry = Array.from(document.querySelectorAll(".bullets li"));
  myLiArry.forEach((li) => {
    li.classList.remove("active");
  });
  myImgs.forEach((img) => {
    img.classList.remove("active");
  });
}
