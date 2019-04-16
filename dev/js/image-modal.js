export default function initImageModal() {
  const modalNode = document.querySelector('.js-image-modal');
  const modalImageNode = document.querySelector('.js-image-modal__img');

  document.addEventListener('click', ({target}) => {
    const buttonNode = getButtonNode(target);
    if (!buttonNode) {
      modalNode.classList.remove('image-modal--is-visible');
      return;
    }
    const imageSrc = buttonNode.getAttribute('data-modal-src');
    modalImageNode.src = imageSrc;
    modalNode.classList.add('image-modal--is-visible');
  });

  function getButtonNode(target) {
    if (target.parentNode.hasAttribute('data-modal-src')) {
      return target.parentNode;
    }
    if (target.parentNode.parentNode.hasAttribute('data-modal-src')) {
      return target.parentNode.parentNode;
    }
    return null;
  }
}