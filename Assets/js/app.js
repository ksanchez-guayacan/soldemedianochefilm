photos = [
  { title: 'Photo Title', description: 'My content', imageUrl: '/ase' },
  ...
];

/*
<div class="col-md-4 col-xs-12">
  <figure>
    <img src="photo.imageUrl" alt="photo.title" class="center-block makingimg">
    <figcaption>
      <a href="#" target="_blank">photo.title</a>
      <p>photo.description</p>
    </figcaption>
  </figure>
</div>
*/

// Photo html component
photoHtml = function(photo) {
  var html = "" + "";
  return html;
};

// Render
main = function() {
  photosHtml = [];
  for (var i = 0; i < photos.length; i++) {
    photosHtml.push(photoHtml(photos[i]));
  }
  $('.photos-list').html(photoHtml.join(''));
};

main();
