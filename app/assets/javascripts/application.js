// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage

//= require_tree .


// $(function(){
//   $('.item-image').on('change', function (e) {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//       $(".item-image").attr('src', e.target.result);
//     }
//     reader.readAsDataURL(e.target.files[0]);
//   })
// })


  // $(function () {
  //   lightbox.option({
  //     'alwaysShowNavOnTouchDevices': false,
  //     'albumLabel': 'ギャラリー： %1 of %2',
  //     'disableScrolling': false,
  //     'fadeDuration': 600,
  //     'fitImagesInViewport': true,
  //     'imageFadeDuration': 600,
  //     'maxWidth': 400,
  //     'maxHeight': 400,
  //     'positionFromTop': 50,
  //     'resizeDuration': 700,
  //     'showImageNumberLabel': true,
  //     'wrapAround': false,
  //   });
  // });


$(function(){
  $('#post_image_image').on('change', function (e) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $(".image-item").attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
  });
})

$(function(){
  $('#user_profile_image').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(".image-item").attr('src', e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  });
})