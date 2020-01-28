$(document).ready(function(){
    // add navbar background when scroll
    $(window).scroll(function() {
      if($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark")
      } else {
        $(".navbar").removeClass("bg-dark")
      }
    })
    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function(){
      if(!$(".navbar-collapse").hasClass("show")){
        $(".navbar").addClass("bg-dark")
      } else {
        if($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark")
        } else {
  
        }
      }
    })
  })

// gsap.from(".col-img", 2, {x:-300, ease:power4.easeOut})
var t1 = gsap.timeline({});
t1.from("p", {duration: 2, y: -500,  ease: "bounce.inOut"});
t1.set(".col-img1", {transformOrigin: "50% 50%"});
// gsap.to(".col-img1", {duration: 2});
t1.from(".col-img1", {duration: 2, x: 900, scale:1.3});
t1.set(".col-img2", {transformOrigin: "50% 50%"});
// gsap.to(".col-img2", {duration: 2});
t1.from(".col-img2", {duration: 2, x: -800, scale:1.3});