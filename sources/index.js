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

function duplicateDeck(deckName, deckBoxName) {
  const deck = document.getElementById(deckName);
  const cloneDeck = deck.cloneNode(true);
  console.log(deckBoxName);
  document.getElementById(deckBoxName).appendChild(cloneDeck);
}

function populateDecks(listOfImages, deckName) {
  listOfImages.forEach((imageName) => {
    let imageBox = document.createElement("img");
    imageBox.className = "card";
    imageBox.src = imageName;
    document.getElementById(deckName).appendChild(imageBox);
  });
}

window.onload = function () {
  if (detecDevice()) {
    let elementsNeededHiding = document.getElementsByClassName("mobileHidden");
    for (let index = 0; index < elementsNeededHiding.length; index++) {
      const element = elementsNeededHiding[index];
      element.computedStyleMap.visibility = "hidden";
    }
  } else {
    let deck1Images = [
      "./sources/images/IMG_7450.jpg",
      "./sources/images/IMG_7515.jpg",
      "./sources/images/IMG_7851.jpg",
      "./sources/images/IMG_7899.jpg",
      "./sources/images/IMG_7985.jpg",
      "./sources/images/IMG_8013.jpg",
      "./sources/images/IMG_8051.jpg",
      "./sources/images/IMG_8055.jpg",
      "./sources/images/IMG_8080.jpg",
    ];

    let deck2Images = [
      "./sources/images/IMG_7175.jpg",
      "./sources/images/IMG_7197.jpg",
      "./sources/images/IMG_7246.jpg",
      "./sources/images/IMG_7072.jpg",
      "./sources/images/IMG_7073.jpg",
      "./sources/images/IMG_7074.jpg",
      "./sources/images/IMG_7081.jpg",
      "./sources/images/IMG_7082.jpg",
      "./sources/images/IMG_7146.jpg",
    ];

    populateDecks(deck1Images, "deck1");
    duplicateDeck("deck1", "deckBox1");

    populateDecks(deck2Images, "deck2");
    duplicateDeck("deck2", "deckBox2");

  }
};
