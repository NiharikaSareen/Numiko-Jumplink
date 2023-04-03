/* 
 * This module manages the progress bar 
 * that becomes visible while 
 * scrolling through the jumplinks section.
 */

//onScoll function is called
window.onscroll = function () {
  progressBarScroll();
};

function progressBarScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const contentHeight = document.querySelector(".section-jumplinks").offsetHeight;
  const contentOffssetTop = document.querySelector(".section-jumplinks").offsetTop;


  let ScrollBarWidth
  const diff = winScroll - contentOffssetTop
  if (diff <= 0) {
    ScrollBarWidth = 2
  } else {
    //check if we hav reached div bottom 
    if ((winScroll + 100) <= (contentOffssetTop + contentHeight)) {
      ScrollBarWidth = 2 + ((diff / contentHeight) * 100);
    } else {
      ScrollBarWidth = 100
    }
  }
  document.getElementById("progressBar").style.width = ScrollBarWidth + "%";
}