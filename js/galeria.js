// --------------- GALERÍA --------------- //

const galleryItem = document.getElementsByClassName("gallery-item");

// creo elemento para el lightbox

const lightBoxContainer = document.createElement("div");

// creo área del lightbox

const lightBoxContent = document.createElement("div");

// creo imagen del lightbox

const lightBoxImg = document.createElement("img");

// creo botones prev, next y exit

const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
const lightBoxExit = document.createElement("div");

// agrego las clases a los elementos creados

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa-solid", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa-solid", "fa-angle-right", "lightbox-next");
lightBoxExit.classList.add("fa-solid", "fa-xmark", "lightbox-exit");

// agrego en el html

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContent.appendChild(lightBoxExit);

document.body.appendChild(lightBoxContainer);

// galería

let index = 1;

function showLightbox(n) {
	if (n > galleryItem.length) {
		index = 1;
	}
	else if (n < 1) {
		index = galleryItem.length;
	}

	let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
	lightBoxImg.setAttribute("src", imageLocation);
}

// imagen abierta

function currentImg() {
	lightBoxContainer.style.display = "flex";
	lightBoxContainer.style.alignItems = "center";
	lightBoxContainer.style.justifyContent = "center";
	lightBoxContainer.style.animation = "puff-in-center 700ms cubic-bezier(0.470, 0.000, 0.745, 0.715) both";

	let imageIndex = parseInt(this.getAttribute("data-index"));

	showLightbox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
	galleryItem[i].addEventListener("click", currentImg);
}

// slider

function sliderImg(n) {
	showLightbox(index += n);
}

function prevImg() {
	sliderImg(-1);
}

function nextImg() {
	sliderImg(1);
}

lightBoxPrev.addEventListener("click", prevImg);

lightBoxNext.addEventListener("click", nextImg);

// cerrar galería

function closeLightBox() {
	lightBoxContainer.style.display = "none"
}

lightBoxExit.addEventListener("click", closeLightBox);