
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const btn = $('#btn-sleep');

    console.log(btn);


var holdStarter = null;

var holdDelay = 500;

var holdActive = false;







btn.mousedown(onMouseDown);
function onMouseDown(){



    holdStarter = setTimeout(function() {
		holdStarter = null;
		holdActive = true; 
        


        let count = 0;

        interval = setInterval(function() {

            count += 2; 
            console.log("pasa");
            console.log(count);
            let percent = count + "%";

            console.log(percent);
  
          btn.css("background-size", "100%" + percent);

          if (count == 100) {

            window.open('https://www.codexworld.com', '_blank');



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

        console.log("click")
	}
	else if (holdActive) {
		holdActive = false;
       console.log("paró de presionar")
	}
}


btn.mouseout( function(){
    onMouseUp();
});










  });