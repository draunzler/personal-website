const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.hero-text',{delay:500,origin:'left'});

let innerCursor = document.querySelector(".cursor-inner");
let outerCursor = document.querySelector(".cursor-outer");
document.addEventListener("mousemove", moveCursor);
function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
    link.addEventListener("mouseover", () => {
        outerCursor.classList.add("fade");
    });
    link.addEventListener("mouseleave", () => {
        outerCursor.classList.remove("fade");
    });
});