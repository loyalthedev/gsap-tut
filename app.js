gsap.registerPlugin("ScrollTrigger");

gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square",
    start: "top 60%",
    end: "top 40%",
    toggleActions: "restart pause resume complete",
    // play pause restart completer resume reverse none reset
    //              onEnter onLeave onEnterBback onLeaveBack
    markers: {
      startColor: "purple",
      endColor: "fuchsia",
      fontSize: "3rem",
    },
  },
});

//  markers: {
//       startColor: "purple",
//       endColor: "fuchsia",
//       fontSize: "4rem",
//       indent: 200,
//     },
