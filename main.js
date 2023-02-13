function hoverHighlight(point) {
    point.classList.toggle("highlight");

}

function clickPoint(point) {
    point.classList.toggle("clicked")
    const lastClicked = document.getElementById("last-clicked");
    const cx = point.getAttribute("cx")[0];
    const cy = 10 - parseInt(point.getAttribute("cy")[0]);
    lastClicked.innerHTML = `Last clicked: (${cx}, ${cy})`
}

let points = Array.from(document.querySelectorAll(".point"));

points.forEach((point) => {
    point.addEventListener("mouseover", () => hoverHighlight(point));
    point.addEventListener("mouseout", () => hoverHighlight(point));
    point.addEventListener("click", () => clickPoint(point));
});

function addPoint() {
    let xValue = document.getElementById('x-value');
    let yValue = document.getElementById("y-value");
    xValue = xValue.options[xValue.selectedIndex].value;
    yValue = yValue.options[yValue.selectedIndex].value;
    xValue = (xValue * 10).toString() + "%";
    yValue = (100 - (yValue*10)).toString() + "%";
    const plot = document.getElementById('plot');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", "point");
    circle.setAttribute("cx", xValue);
    circle.setAttribute("cy", yValue);
    circle.setAttribute("r", 10);
    plot.appendChild(circle);
}

document.getElementById('submit-button').addEventListener('click', addPoint);
