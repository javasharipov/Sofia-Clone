window.onscroll = function() {
    changeHeaderColor();
  };
  
  function changeHeaderColor() {
    var header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = "black"; // Change to solid black after scrolling 50px
    } else {
      header.style.background = "linear-gradient( #000e, #000a, #0000"; // Revert to the gradient when at the top
    }
  }