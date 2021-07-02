//Toggles mobile hamburger menu
let toggleMenu = () => {
  let menu = document.getElementsByClassName("toggle-menu");

  if (menu[0].style.display === "" || menu[0].style.display === "none"){
      menu[0].style.display = "flex";
      }else{
        menu[0].style.display = "none";
      }
}

/*Prevents desktop navbar from disappearing after mobile hamburger menu is toggled 
and window is resized*/

let displayLargeNav = () => {
  let width = window.innerWidth;
  let menu = document.getElementsByClassName("toggle-menu");

  if (width >= 752){
    menu[0].style.display = "flex";
  }else{
    menu[0].style.display = "none";
  }
}

window.onresize = displayLargeNav;