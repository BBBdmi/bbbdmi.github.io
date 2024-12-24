let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
 
function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // 循环到第一张图片
    images[currentIndex].classList.add('active');
}
 
// 设置定时器，每3秒切换一次图片
setInterval(showNextImage, 3000);// JavaScript DocumentJavaScript Document