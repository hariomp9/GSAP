gsap.from("#navbar #title " , {
    opacity:0,
    // delay:1,
    duration:1,
    y:-100,
})
gsap.from("#navbar #list" , {
    opacity:0,
    // delay:1,
    duration:1,
    y:-100,
})
gsap.to("#page2 h1" , {
   transform:"translateX(-55%)",
   duration:1,

   scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 0%",
    end:"top -150%",
    scrub:2,
    pin:true
  }, 
})
