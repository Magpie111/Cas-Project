let lastKnownScrollPosition = 0;
let ticking = false;
let maxsp = 100;

var r = document.querySelector(':root');

var NL = document.querySelectorAll('.Hlinks');
console.log(NL)

function doSomething(scrollPos) {
    var NL = document.querySelectorAll('.Hlinks');
    console.log(scrollPos)
    document.getElementById("1").style.bottom = (30-10*Math.log10(scrollPos)).toString()+"vh"
    
    if (scrollPos != 0){

      document.getElementById("h21").style.fontSize  = "3vh"
      document.getElementById("header").style.height = "8vh"
      NL.forEach(element => {
        element.style.fontSize = '2.5vh';
      });

    }else{

      document.getElementById("header").style.height = "10vh"
      document.getElementById("h21").style.fontSize  = "5vh"
      NL.forEach(element => {
        element.style.fontSize = '3vh';
      });
    }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});



