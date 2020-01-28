// $(document).ready(function(){
//   // add navbar background when scroll
//   $(window).scroll(function() {
//     if($(window).scrollTop() > 56) {
//       $(".navbar").addClass("bg-dark")
//     } else {
//       $(".navbar").removeClass("bg-dark")
//     }
//   })
//   // If Mobile, add background color when toggler is clicked
//   $(".navbar-toggler").click(function(){
//     if(!$(".navbar-collapse").hasClass("show")){
//       $(".navbar").addClass("bg-dark")
//     } else {
//       if($(window).scrollTop() < 56) {
//         $(".navbar").removeClass("bg-dark")
//       } else {

//       }
//     }
//   })
// })

// gsap.set(".svg, .astronaut", {transformOrigin: "50% 50%"});
// gsap.to(".svg, .astronaut", {duration: 2, rotation: 360});

// var myObject = {rotation: 0}
// gsap.to(myObject, {duration: 2, rotation: 360, onUpdate: function() {
//     console.log(myObject.rotation)
// }});

// gsap.from(".svg", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"})
// gsap.from(".circle", {duration:1, opacity:0, y: "random(-200, 200)", stagger: 0.25})
var t1 = gsap.timeline();

t1.addLabel("begin")
t1.to(".left-img", {duration: 2, y:"-70%"}, "begin")
t1.to(".right-img", {duration:2, y:"30%"}, "begin")
t1.timeScale(1.5)
t1.from(".text",  {duration:2, opacity: 0, ease: "linear.inOut(1, 0.3)" }, "begin")
t1.from(".line", {duration:2, y: "-500", stagger: 0.25}, "begin")




