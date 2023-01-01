// type js start

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 100;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  // Init On DOM Load
  document.addEventListener("DOMContentLoaded", init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
// banner part type js end

// about part onclick start
var tablinks = document.getElementsByClassName("about_link");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active_link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active_tab");
  }
  event.currentTarget.classList.add("active_link");
  document.getElementById(tabname).classList.add("active_tab");
}
// about part onclick end


// skills part circle progress bar start
$(function(){
  $('.circlechart').circlechart();
});











// skills part circle progress bar end



var mixer = mixitup('.mixit_body');





// navbar scroll show background start
$(function(){
  $(window).scroll(function(){
     var scrolling = $(window).scrollTop();

     if(scrolling > 20){
      $(".menu_bg").addClass("bg")
     }
     else{
      $(".menu_bg").removeClass("bg")
     }
  })
})
// navbar scroll show background end




// back2 top part start
$(".back2top i").click(function(){
  $('html, body').animate({
      scrollTop:0
  }, 2000)
})

$(window).scroll(function(){
  var scrolling = $(window).scrollTop()

  if(scrolling > 20){
      $(".back2top i").fadeIn()
  }
  else{
      $(".back2top i").fadeOut()
  }
})
// back2 top part end