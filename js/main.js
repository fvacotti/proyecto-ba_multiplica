// --------------- MENÚ HAMBURGUESA ---------------

const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
	menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const id = entry.target.getAttribute("id");
			const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

			if (entry.isIntersecting) {
				document.querySelector(".nav-menu a.selected").classList.remove("selected");
				menuLink.classList.add("selected");
			}
		});
	},

	// para que no se intersecten elementos que estén muy juntos
	
	{ rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", function () {
		menu.classList.remove("menu_opened");
	});

	const hash = menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});

// --------------- BOTÓN ARRIBA ---------------

function subir() {
	window.addEventListener("scroll", () => {
		let scroll = document.documentElement.scrollTop;
		let btnUp = document.getElementById("btn-up");

		if (scroll >= 300) {
			btnUp.style.right = 30 + "px";
		} else {
			btnUp.style.right = -200 + "px";
		}
	})
}

subir();