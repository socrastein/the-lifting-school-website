const menuBar   = document.getElementById("menuBar");
const menuIcon  = document.getElementById("menuIcon");
const bizLogo   = document.getElementById("bizLogo");
const bizName   = document.getElementById("bizName");
const tagLine   = document.getElementById("tagLine");

var screenWidth = window.screen.width;

const onResize = function() {
    screenWidth = window.screen.width;
    if(screenWidth < 500){
        bizName.style.fontSize = "1.4rem";
        bizLogo.style.height = "30px";
        bizLogo.style.width = "30px";
        menuBar.style.display = "none";
        menuIcon.style.display = "flex";
        tagLine.style.fontSize = ".8rem";


    } else {
        bizName.style.fontSize = "2rem";
        bizLogo.style.height = "50px";
        bizLogo.style.width = "50px";
        menuBar.style.display = "flex";
        menuIcon.style.display = "none";
        tagLine.style.fontSize = "1rem";
    }
}

const closeMenuBar = function() {
    menuBar.style.display = "none";
    menuBar.style.flexDirection = "row";
    menuBar.style.alignItems = "flex-end";
    menuBar.style.position = "static";
    menuBar.style.top = "0px";
    menuBar.style.left = "0px";
    menuBar.style.backgroundColor = "inherit";
    menuBar.style.width = "";
    menuBar.style.padding = "0";
    menuBar.style.paddingLeft = "24px";
    menuIcon.setAttribute("src", "./icons/menu.svg");
    menuIcon.addEventListener("click", openMenuBar);
    menuIcon.removeEventListener("click", closeMenuBar);
}

const openMenuBar = function() {
    menuBar.style.display = "flex";
    menuBar.style.flexDirection = "column";
    menuBar.style.alignItems = "center";
    menuBar.style.position = "absolute";
    menuBar.style.top = "0px";
    menuBar.style.left = "0px";
    menuBar.style.backgroundColor = "rgb(var(--charcoal))";
    menuBar.style.width = "100vw";
    menuBar.style.padding = "3%";
    menuIcon.style.zIndex = "5";
    menuIcon.setAttribute("src", "./icons/close.svg");
    menuIcon.addEventListener("click", closeMenuBar);
    menuIcon.removeEventListener("click", openMenuBar);
}

onResize();
window.addEventListener("resize", onResize);
menuIcon.addEventListener("click", openMenuBar);

