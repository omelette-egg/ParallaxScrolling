// Below is an event handler for the scroll event on the window object. It triggers the function every time the user scrolls.
document.addEventListener("scroll", function () {
  // The line of code below gets the current vertical position of the scroll bar. scrollTop() is a jQuery method that returns the vertical scrollbar position for the first element in the set of matched elements or sets the vertical scrollbar position for every matched element.
  var scrollPosition = window.pageYOffset;

  // This line below changes the background-position property of the .parallax-image class.
  document.querySelector(".parallax-image").style.transform =
    "translateY(" + scrollPosition * 0.2 + "px)";

  //NOTE: Remember that the * 0.5 value above can be adjusted as desired. The smaller the value, the slower the background image will move relative to the rest of the content, enhancing the parallax effect.
});
