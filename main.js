var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

const menu_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav");
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");
  $(".mobile-nav a").on("click", function () {
    $("#onclick").click();
  });
});
