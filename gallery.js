const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImg = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function(){
    galleryImg[currentlySelected].classList.remove("active");
    currentlySelected--;//currentlySelected = currentlySelected - 1
    galleryImg[currentlySelected].classList.add('active')
    nextBtn.disabled = false;
    if (currentlySelected === 0){
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function(){
    galleryImg[currentlySelected].classList.remove("active");
    currentlySelected++;//currentlySelected = currentlySelected + 1
    galleryImg[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
    if (galleryImg.length === currentlySelected + 1){
        nextBtn.disabled = true;
    }
});



