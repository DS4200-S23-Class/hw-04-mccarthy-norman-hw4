// function for mouse hover
function hoverHighlight(point) {
    point.classList.toggle("highlight");
}

// adds event listeners to given point
function addListeners(point) {
    point.addEventListener("mouseover", () => hoverHighlight(point));
    point.addEventListener("mouseout", () => hoverHighlight(point));
    point.addEventListener("click", () => clickPoint(point));
}

// function for mouse click
function clickPoint(point) {
    point.classList.toggle("clicked")
    const lastClicked = document.getElementById("last-clicked");
    // coordinates come from the cx and cy attributes, which are in the form of the coordinate multiplied by 10 as a percent (so x=1 would be 10%) 
    const cx = point.getAttribute("cx")[0]; // gets x-coord
    const cy = 10 - parseInt(point.getAttribute("cy")[0]); // gets y-coord, subtract from 10 due to where 0 is
    lastClicked.innerHTML = `Last clicked: (${cx}, ${cy})`
}

let points = Array.from(document.querySelectorAll(".point"));

points.forEach((point) => {
    addListeners(point);
});

// adds a point to the plot when the submit button is clicked
function addPoint() {
  let xValue = document.getElementById("x-value");
  let yValue = document.getElementById("y-value");
  xValue = xValue.options[xValue.selectedIndex].value; // gets x-coord value from dropdown
  yValue = yValue.options[yValue.selectedIndex].value; // gets y-coord value from dropdown
  xValue = (xValue * 10).toString() + "%"; // convert to percent
  yValue = (100 - yValue * 10).toString() + "%"; // convert to percent
  const plot = document.getElementById("plot");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("class", "point");
  circle.setAttribute("cx", xValue);
  circle.setAttribute("cy", yValue);
  circle.setAttribute("r", 10);
  addListeners(circle);
  plot.appendChild(circle);
}

document.getElementById('submit-button').addEventListener('click', addPoint);
