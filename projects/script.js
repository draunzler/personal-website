document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.image');
  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add('reveal');
    }, index * 100);
  });
});

const track = document.getElementById("image-track");
const images = track.getElementsByClassName("image");
const totalWidth = images.length * images[0].clientWidth;
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}
window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = totalWidth - window.innerWidth;
    const percentage = (mouseDelta / maxDelta) * 100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage) - percentage;
    if (nextPercentage > 0) {
        nextPercentage = 0;
    } else if (nextPercentage < -100){
        nextPercentage = -100;
    }
    track.dataset.percentage = nextPercentage;
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});
    for(const image of images){
        image.animate({
            objectPosition: `${nextPercentage + 100}% 50%`
        }, {duration: 1200, fill: "forwards"});
    }
}

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

let links = Array.from(document.querySelectorAll("img"));

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

const image = document.getElementById('image');

image.addEventListener('click', function() {
  window.location.href = 'https://draunzler.github.io/personal-website/projects/project-1/project-1.html';
});
