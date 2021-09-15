const elements = document.querySelectorAll("h3");
for (element of elements) {
  element.addEventListener("click", (event) => {
    alert("hvbjv");
  });
}
var span = document.getElementById("myspan");
if ("textContent" in span) {
  span.textContent = "-";
} else {
  span.innerText = "+";
}
