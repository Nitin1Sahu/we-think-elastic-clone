const time = gsap.timeline();
time.to("#loader", {
  y: -1000,
  duration: 1.5,
  delay: 0.3,
});
time.from(".hello span", {
  duration: 0.1,
  y: 100,
  stagger: 0.3,
  opacity: 0,
});
time.from(".hero__sub-heading", {
  opacity: 0,
  duration: 1,
  y: 100,
  scrollTrigger: {
    trigger: ".hero__sub-heading",
    scroller: "body",
    scrub: 2
  },
});
gsap.from('.section__two video', {
  // width: "500px",
  scale: 2,
  duration: 1,
  scrollTrigger: {
    trigger: ".section__two video",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 200%",
    scrub: 1
  }
})