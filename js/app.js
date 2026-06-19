gsap.registerPlugin(ScrollTrigger);

// GSAP Menu Animation

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const openMenu = document.getElementById("open-menu");

const tl = gsap.timeline({
  paused: true,
});

// Menu Slide Down
tl.fromTo(
  "#menu",
  {
    yPercent: -100,
  },
  {
    yPercent: 0,
    duration: 0.5,
    ease: "power4.inOut",
  },
);

// Nav Links
tl.from(
  "nav li",
  {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    ease: "power3.out",
  },
  "-=0.3",
);

// Social Title
tl.from(
  ".social-title",
  {
    x: 50,
    opacity: 0,
    duration: 0.2,
    ease: "power3.out",
  },
  "-=0.3",
);

// Social Icons
tl.from(
  ".social-icons a",
  {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.2,
    ease: "power3.out",
  },
  "-=0.2",
);
let isOpen = false;

// Open Menu
menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    tl.play();

    openMenu.classList.add("hidden");
    openMenu.classList.remove("flex");
    closeBtn.classList.remove("hidden");

    isOpen = true;
  } else {
    tl.reverse();

    tl.eventCallback("onReverseComplete", () => {
      closeBtn.classList.add("hidden");

      openMenu.classList.remove("hidden");
      openMenu.classList.add("flex");

      isOpen = false;
    });
  }
});

// Hero Video Scroll Animation
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true,
  },
});

heroTl
  .to(
    ".video-wrapper video",
    {
      scale: 1.4,
      ease: "none",
      opacity: 0.5,
    },
    0,
  )

  .to(
    ".hero-title",
    {
      scale: 0.6,
      filter: "blur(20px)",
      opacity: 0,
      ease: "none",
    },
    0,
  )

  .to(
    ".floating-img",
    {
      opacity: 0,
      filter: "blur(20px)",
      scale: 0.8,
      ease: "none",
    },
    0,
  );
