function sayHello() {
  alert("Hello from script.js!");
}


document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 1500); // Change every 1.5 seconds
});
