import React from "react";
import styles from "./front.module.scss";
import AwesomeSwiper from "react-awesome-swiper";

const config = {
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSilde: false,
    disableOnInteraction: true
  },
  preloadImages: false,
  lazy: true,
  speed: 500,
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    bulletElement: "li",
    hideOnClick: true,
    clickable: true
  },
  on: {
    sildeChange: function () {
      console.log(this.activeIndex);
    }
  }
};
class Front extends React.Component {
  swiperRef = null;
  goNext = () => {
    //use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  };
  render() {
    return (
      <AwesomeSwiper
        ref={(ref) => (this.swiperRef = ref)}
        config={config}
        className="your-classname"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    );
  }
}

export default Front;
