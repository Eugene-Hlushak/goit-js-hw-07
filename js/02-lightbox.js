import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" title="${description}" />
</a>`;
    })
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onClickGalleryElement);
let lightbox = new SimpleLightbox(".gallery a");

function onClickGalleryElement(event) {
  event.preventDefault();
}
