const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        lightbox.style.display = "flex";
        lightboxImg.src = images[currentIndex].src;
    });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Image
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Previous Image
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Filter Function
function filterImages(category) {
    const galleryItems = document.querySelectorAll(".gallery .image");

    galleryItems.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else if (item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}