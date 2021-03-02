gsap.registerPlugin(ScrollTrigger);

gsap.to(".after", {
  paddingTop: "0",
  scrollTrigger: {
    trigger: ".after",
    start: "top 50%",
    end: "top 0",
    scrub: true,
    markers: false,
    id: "scrub1",
    duration: 3,
  },
});

gsap.to(".center", {
  opacity:0,
  y:'1000px',
  scrollTrigger: {
    trigger: ".center",
    start: "top 40%",
    end: "top 10px",
    scrub: true,
    markers: false,
    id: "scrub2",
    duration: 10,
  },
});

gsap.to(".bottom-left-2", {
  left:"100px",
  scrollTrigger: {
    trigger: ".bottom-left-2",
    start: "top 40%",
    end: "top 10px",
    scrub: true,
    markers: false,
    id: "scrub3",
    duration: 10,
  },
});

gsap.to(".bottom-left-3", {
  left:"680px",
  opacity:0,
  scrollTrigger: {
    trigger: ".bottom-left-3",
    start: "top 50%",
    end: "top 10px",
    scrub: true,
    markers: false,
    id: "scrub4",
    duration: 10,
  },
});

gsap.to(".bottom-left-5", {
  bottom:"-300px",
  opacity:1,
  scrollTrigger: {
    trigger: ".bottom-left-5",
    start: "top 50%",
    end: "bottom 10%",
    scrub: true,
    markers: false,
    id: "scrub5",
    duration: 3,
  },
});



// gsap.to(".center", {
//     opacity:1,
//     y:700,
//     scrollTrigger: {
//       trigger: ".center",
//       start: "top 57%",
//       end: "top 50px",
//       scrub: true,
//       markers: false,
//       id: "scrub2",
//       duration:3,
//     },
//   });

// const anim = gsap.to(".c", {
//   x: 400,
//   rotation: 360,
//   duration: 3,
// });

// ScrollTrigger.create({
//   trigger: ".c",
//   animation: anim,
//   markers: false,
//   start: "top center",
//   end: "top 100px",
//   toggleClass: "active",
//   pin: true,
//   scrub: 1,
// });

$(window).scroll(function () {
  let triggerOffsetTop = $(".trigger-set-after").offset().top,
    triggerOffsetMiddle = $(".trigger-set-center").offset().top;

  if ($(this).scrollTop() >= triggerOffsetTop) {
    $(".trigger-set-after").addClass("target-fade");
  } else {
    $(".trigger-set-after").removeClass("target-fade");
  }
});
