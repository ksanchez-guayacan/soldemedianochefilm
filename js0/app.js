$(document).ready(function() {
  photos = [
    { title: 'Photo Title1', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0929.JPG' },
    { title: 'Photo Title2', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0930.JPG' },
    { title: 'Photo Title3', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0931.JPG' },
    { title: 'Photo Title4', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0932.JPG' },
    { title: 'Photo Title5', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0933.JPG' },
    { title: 'Photo Title6', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0934.JPG' },
    { title: 'Photo Title7', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0937.JPG' },
    { title: 'Photo Title8', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0938.JPG' },
    { title: 'Photo Title9', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0939.JPG' },
    { title: 'Photo Title10', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0942.JPG' },
    { title: 'Photo Title11', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0943.JPG' },
    { title: 'Photo Title12', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0944.JPG' },
    { title: 'Photo Title13', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0945.JPG' },
    { title: 'Photo Title14', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0946.JPG' },
    { title: 'Photo Title15', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0947.JPG' },
    { title: 'Photo Title16', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0950.JPG' },
    { title: 'Photo Title17', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0952.JPG' },
    { title: 'Photo Title18', description: 'My content', imageUrl: 'Assets\\Images\\IMG_0953.JPG' },
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
  };
  */

  // Photo html component
  photoHtml = function(photo) {
   var html = "<div class='col-md-4 col-xs-12'> <figure>" + "<img src='" + photo.imageUrl + "' alt=' " + photo.title + "' class='center-block makingimg'>" + "<figcaption>" + "<a href='#' target='_blank'>" + photo.title + "</a>" + "<p>" + photo.description + "</p>" + "</figcaption> </figure> </div>";
   return html;
  };

  // Render
  main = function() {
    photosHtml = [];
    for (var i = 0; i < photos.length; i++) {
      photosHtml.push(photoHtml(photos[i]));
    }
    $('.photos-list').html(photosHtml.join(''));
  };

  main();
});
