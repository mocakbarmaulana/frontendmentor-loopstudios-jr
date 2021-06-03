const btnMenuHumberger = document.querySelector(".navbar-menu-mobile");
const imgButtonMenuMobile = document.querySelector(".navbar-menu-mobile img");
const imgSlogan = document.querySelector("#slogan img");
const navbar = document.querySelector(".navbar");
const header = document.querySelector("header");

btnMenuHumberger.addEventListener("click", function () {
  navbar.classList.toggle("active");
  header.classList.toggle("mobile");
  changeMenuMobile(navbar.classList.contains("active"));
});

// function change image menu mobile
const changeMenuMobile = (value) => {
  if (value) {
    imgButtonMenuMobile.src = "/images/icon-close.svg";
  } else {
    imgButtonMenuMobile.src = "/images/icon-hamburger.svg";
  }
};

const ImgeProducts = () => {
  const imgProducts = document.querySelectorAll(".grid-container img");
  if (window.innerWidth < 767) {
    imgProducts.forEach((e) => {
      const link = e.src;
      const res = link.replace("desktop", "mobile");
      e.src = res;
    });
  } else {
    imgProducts.forEach((e) => {
      const link = e.src;
      const res = link.replace("mobile", "desktop");
      e.src = res;
    });
  }
};

window.setInterval(function () {
  ImgeProducts();
}, 1); // 1000 milliseconds (1 second)

// window.onload = ImgeProducts();
