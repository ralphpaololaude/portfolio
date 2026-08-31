fFadeInElements()

function fFadeInElements(){
    var parentBlock = document.getElementsByClassName("hero")[0];
    fadeIn(parentBlock);
}


function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = 0;
  element.style.display = "block"; // Ensure element is visible
  const interval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(interval);
    } else {
      opacity += 0.1;
      element.style.opacity = opacity;
    }
  }, 50); // Adjust timing for speed
}   