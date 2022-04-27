function remSize() {
  let width = document.documentElement.clientWidth || window.innerWidth;
  if (width >= 750) {
    width = 750;
  }
  if (width <= 320) {
    width = 320;
  }
  document.documentElement.style.fontSize = width / 7.5 + "px";
  document.body.style.fontSize = '0.16rem'
}
remSize();
if (window.addEventListener) {
  window.addEventListener("resize", remSize);
} else if (window.attachEvent) {
  window.attachEvent("resize", remSize);
}

