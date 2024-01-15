// Your code here
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    var dodger = document.getElementById("dodger"); // Replace "dodger" with the actual ID or selector of your dodger element
    var currentLeft = parseInt(dodger.style.left) || 0;
    dodger.style.left = currentLeft + 10 + "px";
  }