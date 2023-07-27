// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1px 1px";
    document.getElementById("navbar").style.fontSize = "75%";
    document.getElementById("siteLogo").style.width = "10%";
  } else {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("navbar").style.fontSize = "90%";
    document.getElementById("siteLogo").style.width = "15%";
  }
}

//got from https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp