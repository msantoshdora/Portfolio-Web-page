$(document).ready(function(){
  $(".nextLink").click(function(){
   var currentActiveImage = "image-shown";
   var nextActiveImage = currentActiveImage.next();
   currentActiveImage.removeClass("image-shown").addClass("image-hidden").css("z-index",-10);
   nextActiveImage.addClass("image-shown").removeClass("image-hidden").css("z-index",20);
   $("carousel-inner-images").css("z-index",1);
  });
});
