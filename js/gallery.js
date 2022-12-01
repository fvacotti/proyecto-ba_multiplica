// --------------- GALERÍA ---------------

const galleryItem = document.getElementsByClassName("gallery-item");

// elemento para el lightbox

const lightBoxContainer = document.createElement("div");

// area del lightbox

const lightBoxContent = document.createElement("div");

// imagen del lightbox

const lightBoxImg = document.createElement("img");

// botones prev y next

const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

// genero las clases

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa-solid", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa-solid", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer)

// haciendo galería

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
	lightBoxContainer.style.animation = "500ms puff-in-center";

	let imageIndex = parseInt(this.getAttribute("data-index"));

	showLightbox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
	galleryItem[i].addEventListener("click", currentImg);
}

// slider

function sliderImg (n) {
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

function closeLightBox () {
	if(this === event.target){
		lightBoxContainer.style.display = "none"
	}
}

lightBoxContainer.addEventListener("click", closeLightBox);