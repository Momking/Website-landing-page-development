let cur = document.querySelector("#cursor");
let curs = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cur.style.left = dets.x + "px";
  cur.style.top = dets.y + "px";
  curs.style.left = dets.x - 150 + "px";
  curs.style.top = dets.y - 150 + "px";
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    cur.style.scale = 2;
    cur.style.border = "1px solid #fff";
    cur.style.backgroundColor = "transparent";
  });
  ele.addEventListener("mouseleave", function () {
    cur.style.scale = 1;
    cur.style.border = "0px solid #95c11e";
    cur.style.backgroundColor = "#95c11e";
  });
});
const scrollButton = document.getElementById("arrow");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
