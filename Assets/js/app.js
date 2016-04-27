$(document).ready(function() {
  photos = [
    { title: 'Xavier and Laura', description: 'Practicing before the scene', imageUrl: 'Assets\\Images\\IMG_0929.JPG' },
    { title: 'Xavier', description: 'Selfie practicing his role', imageUrl: 'Assets\\Images\\IMG_0931.JPG' },
    { title: 'Director and Executive Producer', description: 'Discussing the scene, another take please', imageUrl: 'Assets\\Images\\IMG_0932.JPG' },
    { title: 'Director', description: 'Looking at the lighting and angle of the camera', imageUrl: 'Assets\\Images\\IMG_0933.JPG' },
    { title: 'Director and Javier', description: 'Discussing the scene, cut go again actors', imageUrl: 'Assets\\Images\\IMG_0934.JPG' },
    { title: 'Xavier', description: 'Nervous on the next scene, what will happen with Laura?', imageUrl: 'Assets\\Images\\IMG_0938.JPG' },
    { title: 'Pedro', description: 'Talking to the bartender', imageUrl: 'Assets\\Images\\IMG_0943.JPG' },
    { title: 'The Bar', description: 'One of the most authentic locations', imageUrl: 'Assets\\Images\\IMG_0944.JPG' },
    { title: 'Second Take of Pedro', description: 'Too much alcohol on set', imageUrl: 'Assets\\Images\\IMG_0945.JPG' },
    { title: 'Director looking at the location', description: 'That is a wrap everyone!', imageUrl: 'Assets\\Images\\IMG_0946.JPG' },
    { title: 'New Actor', description: 'Bring it on, Director!', imageUrl: 'Assets\\Images\\IMG_0947.JPG' },
    { title: 'Thank you, Honda!', description: 'Great Sponsorship!', imageUrl: 'Assets\\Images\\IMG_0950.JPG' },
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
