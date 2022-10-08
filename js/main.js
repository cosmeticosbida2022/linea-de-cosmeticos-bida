document.addEventListener("DOMContentLoaded", () => {
  const elementosCarousel = document.querySelectorAll(".carousel");
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -140,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false,
  });
});

const items = [] || [...document.getElementsByClassName("flip-card")];

items.forEach((item) => {
  item.addEventListener("click", () => {
    const inner = item.getElementsByClassName("flip-card-inner")[0];
    inner.classList.toggle("flip");
  });
});

const productos = [
  {
    img: "",
    title: "",
    precio: 12,
  },
  {
    img: "",
    title: "",
    precio: 12,
  },
  {
    img: "",
    title: "",
    precio: 12,
  },
  {
    img: "",
    title: "",
    precio: 12,
  },
];
