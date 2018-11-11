
var nav = false;

function openNav() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    nav = true;
}


function closeNav() {
     var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("is-active");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    nav = false;
}


function toggleNav(){
    if(nav){
        closeNav();
    }else{
        openNav();
    }
}

var pageContent = document.querySelector(".contentViewport .content");
var pagecopy = pageContent.cloneNode(true);
var blurryContent = document.querySelector(".overlayViewport .content-wrapper");
var blurryContentViewport = document.querySelector(".overlayViewport");
blurryContent.appendChild(pagecopy);



window.onscroll = function() {
  console.log(window.pageYOffset);
  blurryContentViewport.scrollTop = window.pageYOffset;
};



function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}




