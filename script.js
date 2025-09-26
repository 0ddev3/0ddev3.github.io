// script.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
const nameText = "Yvette Boyd";
let index = 0;

function typeName() {
  if (index < nameText.length) {
    document.getElementById("typed-name").textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 150);
  }
}

window.onload = typeName;
