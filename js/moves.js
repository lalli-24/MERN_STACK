const box=document.getElementById("box");
let x=0;
let y=0;
function moveleft(){
    x-=20;
    box.style.left=x+"px";
}
function moveright(){
    x+=20;
    box.style.left=x+"px";
}
function moveup(){
    y-=20;
    box.style.top=y+"px";
}
function movedown(){
    y+=20;
    box.style.top=y+"px";
}

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key == "ArrowUp") {
            y -= 30;
        }
        if (event.key == "ArrowDown") {
            y += 30;
        }
        if (event.key == "ArrowLeft") {
            x -= 30;
        }
        if (event.key == "ArrowRight") {
            x += 30;
        }

        box.style.left = x + "px";
        box.style.top = y + "px";
    }
);
box.addEventListener("click", () => {
    box.style.backgroundColor = "red";
});
box.addEventListener("dblclick", () => {
    box.style.backgroundColor = "green";
});
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "yellow";
});
box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "blue";
});
document.addEventListener("keyup", (event) => {
    console.log(event.key);
});