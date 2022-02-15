// Open the Modal
function openModal(folderName, imageAmount) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("myModalContent");

    for(i = 0; i < imageAmount; i++){
      var slide = document.createElement("div");
      slide.className = 'mySlides';

      var numberText = document.createElement("div");
      numberText.className = 'numbertext';
      numberText.innerText = `${i+1} / ${imageAmount}`;

      var image = document.createElement("img");
      image.src = `assets/images/${folderName}/${i+1}.jpg`;
      image.style = 'width:100%';

      slide.appendChild(numberText);
      slide.appendChild(image);
      modalContent.appendChild(slide);
    }

    modal.style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    const elements = document.getElementsByClassName("mySlides");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if(slides.length > 0)
    {
      slides[slideIndex-1].style.display = "block";
    }
  }