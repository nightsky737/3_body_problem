const header = document.getElementById("overlay-header");
const content = document.getElementById("overlay-content");

header.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        header.innerHTML = "Controls ▲";
    } else {
        content.style.display = "none";
        header.innerHTML = "Controls ▼";
    }
});

async function pause(){
    await fetch('/pause') 
}
document.getElementById("pauseButton").addEventListener("click", pause);


async function reset(){
    await fetch('/reset') 
}
document.getElementById("resetButton").addEventListener("click", pause);
