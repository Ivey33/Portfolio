

const app = {};

app.moveToTop = () => {
  
  const scrollTop = $('.backToTop');
    // show arrow at certain distance 
    $(window).scroll(function () {
      
      let topPos = $(this).scrollTop();
      // if user scrolls down - show scroll to top button
      if (topPos > 200) {
          $(scrollTop).css('opacity', '1');

      } else {
          $(scrollTop).css('opacity', '0');
      }
  });

   //Click event to scroll to top
    $(scrollTop).on('click', function () {
      console.log("clicked");
    $('html, body').animate({
        scrollTop: 0,
        easingType: 'linear',
    }, 1000);
    return false;
});


}


// Create the observer
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // If the element is visible add the animation class
//       entry.target.classList.add('fadeRight');
//     } else if (!entry.isIntersecting) {
//       // If the element is not visible remove the animation class
//       // entry.target.classList.remove('fadeRight');
//     }
//   });
// });


// // so I can add observer to other elements later
// const aboutMe = observer;
// const skills = observer;
// const portfolio = observer;
// const formSec = observer;
// const footer = observer;

// // Tell the observer which elements to track
// aboutMe.observe(document.querySelector('.aboutMeSection'));
// skills.observe(document.querySelector('.skillsSection'));
// skills.observe(document.querySelector('.portfolioSection'));
// portfolio.observe(document.querySelector('.testimonialSection'));
// formSec.observe(document.querySelector('.formSection'));
// footer.observe(document.querySelector('footer'));



app.testimonialActivation = () => {

  $('.carousel').slick({
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      // adaptiveHeight: true,
      
      cssEase: 'linear',
      prevArrow: '<button class="slick-prev prev-arrow"><i class="feather-arrow-left"></i></button>',
      nextArrow: '<button class="slick-next next-arrow"><i class="feather-arrow-right"></i></button>',
      responsive: [
      {
          breakpoint: 900,
          settings: {
              arrows: false,
          }
      }]
  });
}


app.init = () => {
  app.testimonialActivation();
  app.moveToTop();

}

app.init();
