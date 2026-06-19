// GSAP

const tl = gsap.timeline({
  paused: true,
});

tl.fromTo(
  "#menu",
  {
    yPercent: -100,
  },
  {
    yPercent: 0,
    duration: 0.8,
    ease: "power4.inOut",
  },
);

tl.from(
  "nav li",
  {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
  },
  "-=0.3",
);

tl.from(
  ".social-title",
  {
    x: 50,
    opacity: 0,
    duration: 0.5,
  },
  "-=0.3",
)

  .from(
    ".social-icons a",
    {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
    },
    "-=0.2",
  );

let isOpen = false;

document.getElementById("menu-btn").addEventListener("click", () => {
  if (!isOpen) {
    tl.play();
  } else {
    tl.reverse();
  }

  isOpen = !isOpen;
});
