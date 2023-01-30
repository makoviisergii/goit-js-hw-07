import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector("div.gallery");
const galleryArr = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="Image description"
    />
  </a>
</div>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", galleryArr);

list.addEventListener("click", openOriginalImg);

function openOriginalImg(event) {
  event.preventDefault();
  let ImagSource;
  if (event.target.nodeName === "IMG") {
    ImagSource = event.target.dataset.source;
  } else {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${ImagSource}" width="800" height="600">  
`);
  instance.show();
  list.addEventListener("keydown", closeByEsc);

  function closeByEsc(e) {
    if (e.key === "Escape") {
      instance.close();
      list.removeEventListener("keydown", closeByEsc);
    }
  }
}
