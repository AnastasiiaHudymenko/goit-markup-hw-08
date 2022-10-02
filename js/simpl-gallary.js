// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

// import SimpleLightbox from 'simplelightbox';

// var lightbox = $('.gallery a').simpleLightbox({
//   /* options */
// });
var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 500,
});
