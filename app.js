

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
    $('html, body').animate({
        scrollTop: 0,
        easingType: 'linear',
    }, 1000);
    return false;
});


}


app.contactForm = () => {
  $('form').on('submit', (e) => {
    e.preventDefault();
    console.log("clicked");
  });
}

app.init = () => {
  app.contactForm();
  app.moveToTop();
}

app.init();
