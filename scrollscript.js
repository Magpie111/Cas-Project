let lastKnownScrollPosition = 0;
let ticking = false;
let maxsp = 100;

var r = document.querySelector(':root');


function doSomething(scrollPos) {
    console.log(scrollPos)
    document.getElementById("1").style.bottom = (50-10*Math.log10(scrollPos)).toString()+"vh"
    
    if (scrollPos != 0){
      document.getElementById("header").style.height = "10vh"
      document.getElementById("h21").style.fontSize  = "5vh"
    }else{
      document.getElementById("header").style.height = "15vh"
      document.getElementById("h21").style.fontSize  = "10vh"
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



