let langBtnMobile = document.getElementById("mobile_menuIcon");
var sidebarBnt = document.getElementById("mobile_menuIcon");
var sidebar_teg = document.getElementsByClassName("side_bar")

langBtnMobile.addEventListener("click",function (){
  if(sidebarBnt.checked){
    sidebar_teg[0].style.left = 0;
  }else{
    sidebar_teg[0].style.left = -1000+'px'
  }
});
