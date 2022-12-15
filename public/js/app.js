const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navItem = document.querySelector(".nav-item");
const icons = document.querySelector(".icons");
const bars = document.getElementById("bars");
const home = document.querySelector(".home");


/*men.onclick = () => {
  productHeader.classList.toggle("active");
  men.classList.toggle("fa-times");
}; */
console.log(bars);

bars.onclick = () => {
  icons.classList.remove("active");
  navItem.classList.add("active");
  header.classList.add("active");
  navbar.classList.remove("active");
}
//window.addEventListener("touchend", touchcancel);
function touchcancel() {
  navbar.classList.add("active");
  navItem.classList.remove("active");
  header.classList.remove("active");
  icons.classList.add("active");
}

//scroll animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

reveal();
// End of scroll animation


