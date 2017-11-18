$(document).ready(function(){
  // ARTIST INFO
    $(".artistInfo").hover(function(){
        $(this).css({
          "background-color": "rgba(129,11,45,0.9)",
          "color": "white",
          "box-shadow": "inset 1px 10px 30px 10px rgba(0,0,0,0.3)",
          "font-weight": "normal"
        })
        .animate({transition: "0.3s"});
        $(".artistInfoHeader").css({
          "-ms-transform": "translate(60%, 0px)", /* IE 9 */
          "-webkit-transform": "translate(60%, 0px)", /* Safari */
          "transform": "translate(60%, 0px)",
          "text-shadow": "3px 1px 10px rgba(0,0,0,0.7)",
        })
        .animate({transition: "1s"});
    },
    function(){
        $(this).css({
          "background-color": "white",
          "color": "black",
          "box-shadow": "inset -10px 0 20px -5px rgba(0,0,0,0.6)",
          "font-weight": "normal"
        })
        .animate({transition: "0.3s"});
        $(".artistInfoHeader").css({
          "-ms-transform": "translate(0px, 0px)", /* IE 9 */
          "-webkit-transform": "translate(0px, 0px)", /* Safari */
          "transform": "translate(0px, 0px)",
          "text-shadow": "0px 0px 0px rgba(0,0,0,0)",
        })
        .animate({transition: "1s"});
    });


// SONG LIST SECTION
    $(".songListing").hover(function(){
        $(this).css({
          "background-color": "rgba(129,11,45,0.9)",
          "color": "white",
          "box-shadow": "inset 1px 10px 30px 10px rgba(0,0,0,0.3)",
          "font-weight": "normal"
        })
        .animate({transition: "0.3s"});
        $(".songListingHeader").css({
          "-ms-transform": "translate(60%, 0px)", /* IE 9 */
          "-webkit-transform": "translate(50%, 0px)", /* Safari */
          "transform": "translate(50%, 0px)",
          "text-shadow": "3px 1px 10px rgba(0,0,0,0.7)",
        })
        .animate({transition: "1s"});
    },
    function(){
        $(this).css({
          "background-color": "white",
          "color": "black",
          "box-shadow": "inset -10px 0 20px -10px rgba(0,0,0,0.2)",
          "box-shadow": "0px 10px 20px -10px rgba(0,0,0,0.2)",
          "font-weight": "normal"
        })
        .animate({transition: "0.3s"});
        $(".songListingHeader").css({
          "-ms-transform": "translate(0px, 0px)", /* IE 9 */
          "-webkit-transform": "translate(0px, 0px)", /* Safari */
          "transform": "translate(0px, 0px)",
          "text-shadow": "0px 0px 0px rgba(0,0,0,0)",
        })
        .animate({transition: "1s"});
    });

  $(".lyricExit")
    .click(function(){
      $("#lovejoyLyrics").slideUp("slow")
  });

  $(".lovejoy")
    .click(function(){
      $("#lovejoyLyrics").slideDown("slow")
    });

  $(".song").hover(function(){
    $(this)
      .css({
        "-ms-transform": "translate(-40%, 0px)", /* IE 9 */
        "-webkit-transform": "translate(-40%, 0px)", /* Safari */
        "transform": "translate(-40%, 0px)",
        "transform": "scale(1.2)"
      })
      .animate({transition: "1s"});
  },
  function(){
    $(this)
      .css({
        "-ms-transform": "translate(0%, 0px)", /* IE 9 */
        "-webkit-transform": "translate(0%, 0px)", /* Safari */
        "transform": "translate(0%, 0px)",
        "transform": "scale(1)"
      })
      .animate({transition: "1s"});
  });
// -----------------------




// MENU
    $(".menuWrapper").hover(function(){
      $(this).css({
        "background-color": "rgba(129,11,45,0.9)",
        "color": "white",
        "box-shadow": "inset 1px 10px 30px 10px rgba(0,0,0,0.3)",
        "font-weight": "normal",
        "color": "white"
      })
        .animate({transition: "0.3s"});
        $(".menuWrapper hr, a").css({
            "border-color": "white",
            "color": "white"
          });
        $(".menuHeader").css({
          "-ms-transform": "translate(16%, 0px)", /* IE 9 */
          "-webkit-transform": "translate(16%, 0px)", /* Safari */
          "transform": "translate(16%, 0px)",
          "text-shadow": "3px 1px 10px rgba(0,0,0,0.7)",
          "color": "white"
        })
        .animate({transition: "0.3s"});
    },
    function(){
      $(this).css({
        "background-color": "white",
        "color": "black",
        "box-shadow": "0px 10px 20px -10px black",
        "box-shadow": "inset -10px 0 20px -10px rgba(0,0,0,0.2)",
        "box-shadow": "0px 10px 20px -10px rgba(0,0,0,0.2)",
        "font-weight": "normal"
      })
        $(".menuWrapper a , hr").css({
            "border-color": "black",
            "color": "black"
          })
        $(".menuHeader").css({
          "-ms-transform": "translate(0%, 0px)", /* IE 9 */
          "-webkit-transform": "translate(0%, 0px)", /* Safari */
          "transform": "translate(0%, 0px)",
          "text-shadow": "3px 1px 10px rgba(0,0,0,0)",
          "color": "black"
        })
        .animate({transition: "0.3s"});
    });
// -----------------------





// ITEMS
  $(".itemWrapperOne")
    .click(function(){
      $("#itemOne").slideDown("1000ms");
    });
  $(".itemWrapperTwo")
      .click(function(){
        $("#itemTwo").slideDown("1000ms");
      });
  $(".itemWrapperThree")
      .click(function(){
        $("#itemThree").slideDown("1000ms");
        });
  $(".itemWrapperFour")
      .click(function(){
        $("#itemFour").slideDown("1000ms");
        });
  $(".itemWrapperFive")
      .click(function(){
        $("#itemFive").slideDown("1000ms");
        });
  $(".itemWrapperSix")
      .click(function(){
        $("#itemSix").slideDown("1000ms");
        });

        $(".exitOne")
          .click(function(){
            $("#itemOne").slideUp("1000ms");
        });
        $(".exitTwo")
          .click(function(){
            $("#itemTwo").slideUp("1000ms");
        });
        $(".exitThree")
          .click(function(){
            $("#itemThree").slideUp("1000ms");
        });
        $(".exitFour")
          .click(function(){
            $("#itemFour").slideUp("1000ms");
        });
        $(".exitFive")
          .click(function(){
            $("#itemFive").slideUp("1000ms");
        });
        $(".exitSix")
          .click(function(){
            $("#itemSix").slideUp("1000ms");
        });
// -----------------------

// ARTIST NAV ------------

$(".rock").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".hiphop").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".edm").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".rb").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".country").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".pop").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".blues").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
})
.click(function(){
  $(this).css({
    "box-shadow": "1px 0 6px -2px rgba(0,0,0,0.5)",
    "background-color": "rgba(0,0,0,0.3)",
    "transition": ".2s"
  })
});

$(".gospel").hover(function(){
  $(this).css({
    "transform": "scale(1.34)",
    "transition": ".2s"
  })

},
function(){
  $(this).css({
    "transform": "scale(1)",
    "transition": ".2s"
  })
  $(".genre h2").css({
    "color": "rgba(129,11,45, 0.9)",
    "transition": "0.2s"
  })
});
// -----------------------



});
