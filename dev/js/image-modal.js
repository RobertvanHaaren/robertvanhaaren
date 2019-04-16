export default function initImageModal() {
  const modalNode = document.querySelector('.js-image-modal');

  if (!modalNode) {
    return;
  }

  const modalImageNode = document.querySelector('.js-image-modal__img');

  document.addEventListener('click', ({target}) => {
    if (!target.hasAttribute('data-src') || target.parentNode.tagName === 'A') {
      modalNode.classList.remove('image-modal--is-visible');
      return;
    }
    const imageSrc = target.getAttribute('data-src');
    modalImageNode.src = imageSrc;
    modalNode.classList.add('image-modal--is-visible');
  });
}