function toggleMenu(){
  let menu = document.getElementsByClassName("toggle-menu");


if (menu[0].style.display === "" || menu[0].style.display === "none"){
    menu[0].style.display = "flex";
    }else{
      menu[0].style.display = "none";
    }
}

function displayLargeNav(){
  let width = window.innerWidth;
  let menu = document.getElementsByClassName("toggle-menu");

  if (width >= 752){
    menu[0].style.display = "flex";
  }else{
    menu[0].style.display = "none";
  }
 }

window.onresize = displayLargeNav;