/**
 * Making the new button hidden on initial load
 */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("new").style.display = "none";
});

// Grabbing the input fields
const inputs = document.getElementsByClassName("fields");
var i = 0;
var src = "hai";

/**
 * View button event listener
 */
document.getElementById("viewBtn").onclick = function (e) {
  i = 1;

  var mainh = document.getElementById("MainHeading").value; // Main heading
  var subh = document.getElementById("SubHeading").value; // Sub heading

  // Form validation
  if (mainh == "" || subh == "") {
    // Making the borders red when invalid
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.border = "1px solid red";
    }
  } else {
    // Making the borders blue when valid
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.border = "1px solid blue";
    }

    src =
      "https://svg-banners.vercel.app/api?type=origin&text1=" +
      mainh +
      "%20&text2=" +
      subh +
      "&width=1130&height=600";

    svg = document.getElementById("svg");
    svg.src = src;
    document.getElementById("download").setAttribute("href", src);
    document.getElementById("download").removeAttribute("hidden");
    document.getElementById("viewBtn").style.display = "none";

    document.getElementById("new").style.display = "inline-block";
  }
};
