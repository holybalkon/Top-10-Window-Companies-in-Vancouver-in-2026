document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");
document.querySelectorAll(".faq-trigger").forEach(function (btn) {
  btn.setAttribute("aria-expanded", "false");
  btn.addEventListener("click", function () {
    var item = btn.closest(".faq-item");
    var open = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
