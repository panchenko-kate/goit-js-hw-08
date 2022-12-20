// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(SimpleLightbox);

const imgContainer = document.querySelector('.gallery');
const imgsCardsMarkup = createImageCardsMurkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', imgsCardsMarkup);

function createImageCardsMurkup (imgs) {
    return imgs.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `;
    })
    .join('')
;
};

new SimpleLightbox('.gallery__item', {captionsData: 'alt', captionDelay: 250,});
