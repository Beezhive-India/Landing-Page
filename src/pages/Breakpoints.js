const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const ScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const ScrollToTop2 = () => {
  if (window.screen.width <= 800) {
    window.scrollTo({
      top: 680,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};
const ScrollToTop3 = () => {
  if (window.screen.width >= 800) {
    window.scrollTo({
      top: 680,
      left: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: "smooth",
    });
  }
};

export default {
  responsive,
  responsive1,
  responsive2,
  ScrollToTop,
  ScrollToTop2,
  ScrollToTop3,
};
