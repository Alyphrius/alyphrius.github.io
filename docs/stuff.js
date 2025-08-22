
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all divs with draggable="true"
  const draggableDivs = document.querySelectorAll("div[draggable='true']");
  
  // Remove the draggable attribute
  draggableDivs.forEach(div => {
    div.removeAttribute("draggable");
  });
});

