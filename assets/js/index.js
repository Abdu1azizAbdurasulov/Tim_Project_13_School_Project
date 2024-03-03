const hamburgerBtn = document.querySelector(".hamburger__wrap"),
 	hamburgerMenu = document.querySelector(".nav_menu"),
	closeBtn = document.querySelector(".x_mark"),
	show = document.querySelector(".show"),
	hide = document.querySelector(".hidden");

hamburgerBtn.addEventListener("click", () =>{
	hamburgerMenu.style.display = "block"
	hamburgerBtn.style.display = "none"
	closeBtn.style.display = "block"
});
closeBtn.addEventListener("click", () =>{
	hamburgerMenu.style.display = "none"
	hamburgerBtn.style.display = "block"
	closeBtn.style.display = "none"
});
