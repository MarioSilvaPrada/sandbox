let animateHTML = function() {
  let elems;
  let windowHeight;

// Get every element that have the class hidden
  const init = () => {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

// Run a function when window is scrolled
  const addEventHandlers = () => {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

// Calculate the height relative to the viewport and
// if the element is inside the viewport, add the class.
  const checkPosition = () => {
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "fade-in-element"
        );
      }
    }
  }

  return {
    init: init
  };
};

animateHTML().init();
