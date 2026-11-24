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

// Open all links (and link-buttons) in a new tab. In-page anchors (#...) stay in the same tab.
document.querySelectorAll("a[href]").forEach(function (a) {
  var href = a.getAttribute("href");
  if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
  a.setAttribute("target", "_blank");
  var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
  if (rel.indexOf("noopener") === -1) rel.push("noopener");
  a.setAttribute("rel", rel.join(" "));
});
