//Function to moveout clouds on hover at the every reload
function moveClouds(callback) {
    /* clouds 1 & 2 move to the left 
       clouds 3 & 4 to the right */
    for (var i = 1; i < 5; i++) {
      var cloud = document.getElementById("cloud" + i);
      cloud.style.transitionTimingFunction = "ease-out";
      cloud.style.transitionDuration = "10ms";
      var top = window.getComputedStyle(cloud, null).getPropertyValue("top");
  
      var topValue = parseInt(top);
      topValue = topValue - 20;
      top = topValue + "px";
  
      cloud.style.top = top;
  
      var left = window.getComputedStyle(cloud, null).getPropertyValue("left");
      var leftValue = parseInt(left);
  
      if (i < 3) {
        leftValue = leftValue - 30;
      } else {
        leftValue = leftValue + 30;
      }
      left = leftValue + "px";
  
      cloud.style.left = left;
    }
  
    // Delay the execution of the callback function after the transition completes
    setTimeout(callback, 10);
  }
  
  // Example usage:
  moveClouds(function() {
    // Code to execute after all clouds have disappeared
    var textElement = document.getElementById("mainText");
    textElement.innerText = "Welcome";
  });

  //JS part got from -  https://codepen.io/trixie13/pen/GNJqBJ