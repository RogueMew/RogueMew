function detectDevice() {
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

function populateMiniGallery(miniGalleryImgs) {
  const galleryLocation = document.getElementById("miniGallery");

  miniGalleryImgs.forEach((miniGaliImg) => {
    temp = document.createElement("img");
    temp.src = miniGaliImg;
    temp.className = "miniGalleryImage";
    galleryLocation.appendChild(temp);
  });
}

window.onload = function () {
  if (detectDevice()) {
    let elementsNeededHiding = document.getElementsByClassName("mobileHidden");
    for (let index = 0; index < elementsNeededHiding.length; index++) {
      const element = elementsNeededHiding[index];
      element.style.visibility = "hidden";
      console.log(element);
    }
  } else {

    

    let galImgs = [
      "./sources/images/IMG_7450.jpg",
      "./sources/images/IMG_7515.jpg",
      "./sources/images/IMG_7851.jpg",
      "./sources/images/IMG_7899.jpg",
      "./sources/images/IMG_7985.jpg",
      "./sources/images/IMG_8013.jpg",
      "./sources/images/IMG_8051.jpg",
      "./sources/images/IMG_8055.jpg",
      "./sources/images/IMG_8080.jpg",
      "./sources/images/IMG_5899.jpg",
      "./sources/images/IMG_7072.jpg",
      "./sources/images/IMG_7073.jpg",
      "./sources/images/IMG_7074.jpg",
      "./sources/images/IMG_7081.jpg",
      "./sources/images/IMG_7082.jpg",
      "./sources/images/IMG_7146.jpg",
      "./sources/images/IMG_7175.jpg",
      "./sources/images/IMG_7197.jpg",
    ];
    populateMiniGallery(galImgs);


  }
};

function openGallery(modalID) {
  modalID.style.visibility = "visible";
  console.log("Done!");
}

const header = document.getElementById('headerBar');

function getColorBehindHeader() {
  const rect = header.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.bottom - 1;

  header.style.visibility = 'hidden';
  const elements = document.elementsFromPoint(x, y);
  header.style.visibility = '';

  for (const el of elements) {
    const bg = getComputedStyle(el).backgroundColor;
    if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      return bg;
    }
  }

  return 'rgb(255, 255, 255)';
}

function isWhite(color) {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  return r > 240 && g > 240 && b > 240;
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  requestAnimationFrame(() => {
    const bg = getColorBehindHeader();
    header.classList.toggle('over-white', isWhite(bg));
    ticking = false;
  });
  ticking = true;
}, { passive: true });