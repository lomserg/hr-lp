
var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {  
   
    // when window width is <= 320px     
    320: {       
       slidesPerView: 1,
       spaceBetween: 10     
    },     
    // when window width is <= 480px     
    480: {       
       slidesPerView: 1,       
       spaceBetween: 20     
    },   

    // when window width is <= 640px     
    780: {       
       slidesPerView: 2,       
       spaceBetween: 30     
    } 

 } 
});
