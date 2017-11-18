$(document).ready(function(){
  $('.cart').click(function(){
    $('#myCartDash').css("width", "28.5%")
    $('#myArtistDash').css("width", "0px")
    $(".closebtn")
      .css("display", "inline")
      .click(function(){
        $('#myCartDash').css("width", "0px")
      })
  });


  $('.dashboard').click(function(){
    $('#myArtistDash').css("width", "28.5%")
    $('#myCartDash').css("width", "0px")
    $(".closebtn")
      .css("display", "inline")
      .click(function(){
        $('#myArtistDash').css("width", "0px")
      })
  });


  $(".closebtn").click(function(){
    $(this).css("display", "none")
  })


  $(".cartItem").hover(function(){
    $(this).css({
      "transform": "scale(1.1)"
    })
    .animate({transition: "0.2s"});
  },

  function() {
    $(this).css({
      "transform": "scale(1)"
    })
    .animate({transition: "1s"});
  })



// ARTIST DASH BUTTONS

$(".songupload").hover(function(){
    $(this).css({
      "height": "300px",
      "width": "45%",
      "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)",
      "box-shadow": "0 5px 20px -2px rgba(129,11,45,0.8)"
    })
      .animate({transition: "1s"})
    $(".songuploadSection").css({
        "display": "inline",
        "height": "auto"
      })
      .animate({transition: "3s"});
  },
  function(){
    $(this)
    .css({
      "height": "auto",
      "width": "20%",
      "box-shadow": "inset 1px 1px 20px 1px rgba(0,0,0,0.2)"
    })
      .animate({transition: "0.2s"});
    $(".songuploadSection").css("display", "none")
      .animate({transition: "0.2s"});
  }

)

$(".royalties").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".royaltiesSection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "26%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".royaltiesSection").css("display", "none")
    .animate({transition: "0.2s"});
}

)

$(".charityMoney").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".charityMoneySection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "35%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".charityMoneySection").css("display", "none")
    .animate({transition: "0.2s"});
}

)


$(".artistCharity").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".artistCharitySection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "41%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".artistCharitySection").css("display", "none")
    .animate({transition: "0.2s"});
}

)

$(".logoUpload").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".logoUploadSection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "20%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".logoUploadSection").css("display", "none")
    .animate({transition: "0.2s"});
}

)

$(".videoUpload").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".videoUploadSection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "20%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".videoUploadSection").css("display", "none")
    .animate({transition: "0.2s"});
}

)

$(".consumerData").hover(function(){
  $(this).css({
    "height": "300px",
    "width": "45%",
    "margin-bottom": "50px",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.4)"
  })
    .animate({transition: "0.2s"})
  $(".consumerDataSection").css("display", "inline")
    .animate({transition: "3s"});
},
function(){
  $(this)
  .css({
    "height": "60px",
    "width": "40%",
    "box-shadow": "inset 1px 1px 6px 1px rgba(0,0,0,0.2)"
  })
    .animate({transition: "0.2s"});
  $(".consumerDataSection").css("display", "none")
    .animate({transition: "0.2s"});
}

)


});
