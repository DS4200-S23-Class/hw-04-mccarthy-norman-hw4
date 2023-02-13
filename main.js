function hoverHighlight(point) {
    point.classList.toggle("highlight");

}

function clickPoint(point) {
    point.classList.toggle("clicked")

}
let points = Array.from(document.querySelectorAll(".point"));

points.forEach((point) => {
            point.addEventListener("mouseover", () => hoverHighlight(point))
            point.addEventListener("mouseout", () => hoverHighlight(point))
            point.addEventListener("click", () => clickPoint(point));
            })

