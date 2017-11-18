$(document).ready(function(){

  $(".artistthumbnail").hover(function(){
    $(this).css({
      "transform": "scale(1.3)",
      "background-color": "rgba(129,11,45,0.4)"
    })
    .animate({transition: "0.3s"});
  },

  function(){
    $(this).css({
      "transform": "scale(1)",
      "background-color": "lightgrey"
    })
    .animate({transition: "0.3s"});
  })


});
