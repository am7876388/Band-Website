
var imageUrls = [
    "10.avif",
    "11.jpg",
    "12.jpeg"
  ];
  var currentIndex = 0;
  function updateImage() {
    document.getElementById("Change").src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
  }
  updateImage();
  setInterval(updateImage, 5000); 
  
  