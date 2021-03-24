
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const btn = $('#btn-sleep');

    console.log(btn);


var holdStarter = null;

var holdDelay = 500;

var holdActive = false;







btn.mousedown(onMouseDown);
function onMouseDown(){
    btn.css("border", "1px solid var(--rosa");


    holdStarter = setTimeout(function() {
		holdStarter = null;
		holdActive = true; 
        

        let count = 20;

        interval = setInterval(function() {

            count += 2; 
            console.log("pasa");
            console.log(count);
            let percent = count + "%";
            

          
          btn.css("width", percent);
          btn.css("height", percent);

          if (count == 60) {

            window.open('../pages/elect.html', '_self');



             }

             if (holdActive !== true) {
                clearInterval(interval);

             }



          }, 50);   

         


        

     
	}, holdDelay);
}

btn.mouseup(onMouseUp);
function onMouseUp(){


  
	if (holdStarter) {
        btn.css("border", "1px solid var(--rosa)");

		clearTimeout(holdStarter);
	}

	else if (holdActive) {
		holdActive = false;
       console.log("paró de presionar")
	}
}


btn.mouseout( function(){
    onMouseUp();
});



particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
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
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
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
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
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
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
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






  });