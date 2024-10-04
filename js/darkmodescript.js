  // Function that changes the body element from light to darkmode 
  function darkModeBody() {
    var element = document.body;
    element.classList.toggle("darkmode");
}
// Function that changes the bottom bar element from light to darkmode
function darkModeBar() {
    var element = document.querySelector('.bottombar');
    element.classList.toggle("bottombardark");
}
// Finds the demo element and stores reference to it with the value x
const x = document.getElementById("demo");
