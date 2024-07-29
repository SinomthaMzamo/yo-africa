/**
 * 
 */


 // ROOTURL is (normally) brought in from wp_localize_script
 var RESTROOT  = "https://quotesondesign.com/wp-json";
 var RESTROUTE = RESTROOT + "/posts?filter[posts_per_page]=3";

 var page = 2;
 var hitEnd = false;
 var myCurrentSlide = 6; // Arbitrary

 var moreButton = ''; // Holds HTML for a button to load more on click.
 moreButton += '<button id="load_featured" class="button button--big button--wide">';
 moreButton += '  More Articles';
 moreButton += '</button>';

 var loader = ''; // HTML for spinning loader
 loader += '<div class="loader">';
 loader += '  <br /><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>';
 loader += '  <span class="sr-only">Loading...</span>';
 loader += '</div>';



 jQuery( document ).ready( function( $ ) { // jQuery noconflict

   function createFeaturedList(object){
     //console.info(object);
     if(hitEnd){
       return;
     }
     if (!object || object == null){
       $(".loader").remove(); // Remove loader
       $("#more-content").prepend("<p class='center'>End of results.</p>");

       hitEnd = true;
       return;
     }

     for (var i = 0; i < object.length; i++) {
       var article =
       '<article class="col-md-4 col-sm-6">' +
         '<div class="mdl-card mdl--border full-bleed">'+
           '<a class="block-link mdl-card__media" href="' + object[i].link + '">' +
             '<img width="375" height="210" src="https://via.placeholder.com/375x210" />' +
           "</a>" +
           '<div class="mdl-card__title">'+
             '<h2 class="mdl-card__title-text heading-6 font--light">'+
               object[i].title +
             '</h2>'+
           '</div>'+
           '<div class="mdl-card__supporting-text sans-serif">' +
             object[i].content +
           '</div>' +
           '<div class="mdl-card__actions center">' +
             '<a class="button button--wide" style="border: 1px solid #cdcdcd;"' +
                'href="' +object[i].link  + '">' +
               'Read More' +
             '</a>' +
           '</div>'+
         '</div>' +
       '</article>';
       $('#mdl').slick('slickAdd', article);

      // $('#mdl.news-grid').append(article);
     }
     $(".loader").remove(); // Remove loader
     setTimeout(function(){  
      $('#mdl').slick('slickGoTo', myCurrentSlide + perSlide);
       console.log(myCurrentSlide + ' ' + perSlide);
     }, 500);
     //$('#mdl').slick('slickNext');
    //  $("#more-content").append(moreButton); // Reconstruct "Load More" button
    //  // Have to add click handler again on reconstructed element
    //  $("#load_featured").click(function(){
    //    getFeatured();
    //  });
   }

   function getFeatured() {
     if(hitEnd){return;}

     // Show a loader
     $("#mdl").before(loader);
     // Remove "More Articles" button
     //$("#load_featured").remove();
     // Get JSON via AJAX
     $.ajax( RESTROUTE + '&page=' + page )
       .done(function(object){
         createFeaturedList(object);
       });
     page++;
   }

   $("#load_featured").click(function(){
     getFeatured();
   });

if(!$('#mdl').hasClass('slick-initialized')) {
   $('#mdl').slick({
     slidesToShow: 3,
     slidesToScroll: 3,
     infinite: false,
     arrows: true,
     responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: false,
                      arrows: true,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: false,
                      arrows: false,
                    }
                  }
                ]
   });
}
var perSlide = 3;
var onlast = false;

$('#mdl').on('afterChange', function(event, slick, currentSlide) {
  console.log(slick, currentSlide);

  if(slick.activeBreakpoint == 992){
    perSlide = 2;
  } else if(slick.activeBreakpoint == 767){
    perSlide = 1;
  } else {
    perSlide = 3;
  }
  if (slick.slideCount <= currentSlide + perSlide) {
    console.log("Last slide");
    myCurrentSlide = currentSlide;
    
    if(onlast){
      
      getFeatured();
      //$('#mdl').slick('slickGoTo', 1);
    }
    onlast = !onlast;
  }
});



 }); // End jQuery noconflict wrapper