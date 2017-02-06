
$('.alert').on('click', function() {
  confirm('You deleted your profile.');
});

$(document).ready(function(){
    $('.collapsible').collapsible();
  });


$(document).ready(function(){
    $('.collapsible').collapsible();
  });


var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');



if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}

document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});

function convertImageToCanvas(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0);

  return canvas;
}



function convertCanvasToImage(canvas, callback) {
  var image = new Image();
  image.onload = function(){
    callback(image);
  }
  image.src = canvas.toDataURL("image/png");
}
