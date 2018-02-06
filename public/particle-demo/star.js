$(function() {
   "use strict";


   // $("body").mousemove(function(e) {
   //   $(".radialOrb").offset({
   //     top: e.pageY,
   //     left: e.pageX
   //   });
   // });
   // $(document).click(function(e) {
   //   if (clicked == true) {
   //     clicked = false;
   //     $("body").mousemove(function(e) {
   //       $(".radialOrb").offset({
   //         top: e.pageY,
   //         left: e.pageX
   //       });
   //       $(".coordinates").text("X: " + e.pageX + ", " + "Y: " + e.pageY);
   //     })
   //   } else {
   //     clicked = true;
   //     $(".radialOrb").offset({
   //       top: e.pageY,
   //       left: e.pageX
   //     });
   //     $('body').off("mousemove");
   //   }
   //   $(".coordinates").text("X: " + e.pageX + ", " + "Y: " + e.pageY);
   // });
   $(".release-btn").click(function(event) {
     event.preventDefault();
     var message = $("#star-message").val().trim();
     var release = $(".starSpan")
     var formRelease = $(".starForm")
     console.log('button clicked-----' + message);
     formRelease.fadeOut(500, function() {
       // $(".radialOrb").fadeIn(20000, function() {
       // });
       release.fadeOut(9000, function() {
         console.log(message)
       });
     });
   });
   particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "body",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 3,
          "duration": 9,
          "opacity": 1,
          "speed": 9
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
 }); // CLOSURE