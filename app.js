// console.log('hello log');
// alert('hello alert');
$(".demo").champ({
  active_tab : "6"
});
// $(".demo").champ({
//   // active_tab : "6"
//   side: 'left',
// });

var swiper = new Swiper('.construction-slider', {
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    1380:{
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768:{
      slidesPerView: 1,
    },
  }
});

var swiper = new Swiper('.shop-slider', {
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints:{
    1380:{
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768:{
      slidesPerView: 1,
    },
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

var menuTrigger = document.querySelector('.menu-trigger');
var mobileMenu  = document.querySelector('.site-nav');
menuTrigger.addEventListener('click', function(){
  mobileMenu.classList.toggle('mobile-drag');
});