let menuBtn = document.getElementById("mobile_menuIcon");
let menuBtnLabal = document.getElementsByClassName("mobile_menuIcon");
let sidebarXBnt = document.getElementById("mobile_sidebar_x");
var sidebar_teg = document.getElementsByClassName("side_bar")
var mobileBackground = document.getElementsByClassName("mobile_background")

menuBtn.addEventListener("click",function (){
    sidebar_teg[0].style.left = 0;
    menuBtnLabal[1].style.visibility="hidden";
    mobileBackground[0].style.visibility="visible";
});

sidebarXBnt.addEventListener("click",function (){
    sidebar_teg[0].style.left = -1000+'px';
    menuBtnLabal[1].style.visibility="visible";
    mobileBackground[0].style.visibility="hidden";
});
