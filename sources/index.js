function detecDevice() {
  let device = "";

  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    device = true;
  } else {
    device = false;
  }
  return device;
}

window.onload = function () {
  if (device()) {
    document.getElementById("headerBar").style.visibility = "hidden"
}
};
