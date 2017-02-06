
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



function getImageDataURL(img) {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  var context = canvas.getContext('2d');
  context.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL('image/png');
  return dataURL;
}

var image = new Image();
image.onload = function() {
  var dataURL = getImageDataURL(image);
  document.getElementById('canvas').innerHTML = dataURL;
  image.src = dataURL;
  document.body.appendChild(image);
};
image.crossOrigin = 'anonymous';
image.src = "dataURL";

function convertCanvasToImage(canvas, callback) {
  var image = new Image();
  image.onload = function(){
    callback(image);
  }
  image.src = canvas.toDataURL("image/png");
}
