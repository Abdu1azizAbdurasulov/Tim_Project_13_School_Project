const hamburgerBtn = document.querySelector(".hamburger__wrap"),
 	hamburgerMenu = document.querySelector(".nav_menu");

hamburgerBtn.addEventListener("click", () =>{
	hamburgerMenu.classList.toggle("show");
});

