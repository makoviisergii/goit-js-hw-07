import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

// Переделать

// const modalText = document.querySelector(".modal-text");
// const button = document.querySelector("button");
// const backdrop = document.querySelector(".backdrop");

// list.addEventListener("click", openModal);

// function openModal({ target }) {
//   let content;
//   if (target.nodeName === "P") {
//     content = target.textContent;
//   } else if (target.nodeName === "LI") {
//     content = target.firstElementChild.textContent;
//   } else {
//     return;
//   }

//   modalText.textContent = content;
//   backdrop.classList.add("open");

//   window.addEventListener("keydown", closeByEsc);
// }

// button.addEventListener("click", closeModal);
// backdrop.addEventListener("click", (event) => {
//   if (event.target === event.currentTarget) {
//     closeModal();
//   }
// });

// function closeModal() {
//   modalText.textContent = "";
//   backdrop.classList.remove("open");
//   window.removeEventListener("keydown", closeByEsc);
// }

// function closeByEsc({ code }) {
//   if (code === "Escape") {
//     closeModal();
//   }
// }
