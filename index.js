function toggleMenu(){
  let menu = document.getElementsByClassName("right-nav");

  for(i=0; i < menu.length; i++){
    if (menu[i].style.display === "" || menu[i].style.display === "none"){
      menu[i].style.display = "flex";
     }else{
       menu[i].style.display = "none";
     }
   }
}