const header = document.querySelector('#header');
const footer = document.querySelector('#footer');


document.onscroll = logScroll;
imgContainers.forEach(container => container.addEventListener('mouseover', productHover));
imgContainers.forEach(container => container.addEventListener('mouseout', productHoverOff));

function logScroll() {
  footer.style.backgroundPositionY = `${-window.pageYOffset}px`;
  header.style.backgroundPositionY = `${-window.pageYOffset}px`;
}