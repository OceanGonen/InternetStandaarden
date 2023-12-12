document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById('top');

    backToTopButton.classList.add('show');
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    backToTopButton.addEventListener('click', scrollToTop);
});
