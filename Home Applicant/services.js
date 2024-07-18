
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}


scrollToTopBtn.onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

document.addEventListener('DOMContentLoaded', function() {
    const section = document.getElementById('section-038fd224-4850-4a71-8f78-b57057237f7d');
    const images = [
        'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQxNDUyfQ&w=1920',
        'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1634849662801-a00d83441092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    const indicators = document.querySelectorAll('.indicator');
    let currentImageIndex = 0;

    // Preload images
    function preloadImages(urls) {
        urls.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    }

    preloadImages(images);

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        section.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url("${images[currentImageIndex]}")`;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentImageIndex);
        });
    }

    setInterval(changeBackgroundImage, 5000); 
    updateIndicators();
    changeBackgroundImage(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const previews = document.querySelectorAll('.preview-image');
    let currentIndex = 0;
    let interval; 

    const intervalTime = 5000; 


    items[currentIndex].classList.add('active');
    previews[currentIndex].classList.add('active');

    function changeCarousel() {
        items.forEach(item => item.classList.remove('active'));
        previews.forEach(preview => preview.classList.remove('active'));

        items[currentIndex].classList.add('active');
        previews[currentIndex].classList.add('active');


        clearInterval(interval);
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            changeCarousel();
        }, intervalTime);
    }


    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        changeCarousel();
    }, intervalTime);


    previews.forEach((preview, index) => {
        preview.addEventListener('click', () => {
            currentIndex = index;
            changeCarousel();
        });
    });
});

