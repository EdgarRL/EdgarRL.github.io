const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");
const navFabars = document.querySelector(".fabars");
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("#nav");

const hideMenu = () => {
  navMenu.classList.toggle("visible");
  document.body.classList.toggle("stop-scrolling");
  navFabars.classList.toggle("rotate");
};

navToggle.addEventListener("click", () => {
  hideMenu();
});

window.addEventListener("scroll", function() {
	let ubicacionActual = window.pageYOffset

	console.log(ubicacionActual)

	if( ubicacionPrincipal >= ubicacionActual ) {
		$nav.style.top = "0px"
	} else {
		$nav.style.top = "-55px"
	}

	ubicacionPrincipal = ubicacionActual
});
