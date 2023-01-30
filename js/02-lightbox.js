import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector("ul.gallery");
const galleryArr = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", galleryArr);

function openOrigImag(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
