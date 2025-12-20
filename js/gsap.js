gsap.timeline()
  .to(".animate", {  
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power4.out"
  })
  .to(".animate-para", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out"
  }, "-=0.4"); // overlap for smooth flow
 
  document.addEventListener("DOMContentLoaded", () => {

  gsap.from(".b1", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.8 // after heading + paragraph
  });

});

gsap.utils.toArray(".ImgSection img").forEach(img => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      once: true
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".FeatureDiv > div").forEach((card, i) => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true
      }
    });

    // icon
    tl.from(card.querySelector("img"), {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.out"
    })

    // title
    .from(card.querySelector("h2"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.2")

    // paragraph
    .from(card.querySelector("p"), {
      opacity: 0,
      y: 15,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.3");

  });
});


document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".AbtDiv",
      start: "top 80%", // adjust as needed
      once: true
    }
  });

  tl.to(".AbtDiv h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out"
  })
  .to(".AbtDiv p", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out"
  }, "-=0.5") // overlaps slightly for smooth flow
  .to(".AbtDiv .btn2", {
    opacity: 1,
    y: 0,
    scale: 1.05, // subtle pop
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4");
});


gsap.registerPlugin(ScrollToPlugin); // register the plugin

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href'); // e.g., "#section1"

    gsap.to(window, {
      duration: 2.5,          // slow scroll duration in seconds
      scrollTo: {
        y: targetId,          // scroll to this element
        offsetY: 0            // optional offset
      },
      ease: "power2.inOut"     // smooth easing
    });
  });
});
