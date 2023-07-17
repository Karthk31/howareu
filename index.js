document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".modal2").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
});

document.querySelector(".close-modal2").addEventListener("click", function () {
  document.querySelector(".modal2").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modal2").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
