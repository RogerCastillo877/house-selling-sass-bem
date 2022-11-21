const images = document.querySelectorAll('.property__image')


window.addEventListener('scroll', () => {
  
  const scroll = this.scrollY / -20;

  images.forEach( (image) => {
    image.style.backgroundPositionY = `${ scroll }px`
  });
});