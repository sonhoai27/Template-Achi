import * as React from "react";
import { RESOURCE } from "../../../../config/const";
// const images = [
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png',
//   RESOURCE+'images/ebook/1.png'
// ];
declare var $: any;
declare var Swiper: any;
class EbookPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $(window).resize(function(){
      var ww = $(window).width()
      if (ww>768){
        new Swiper(".swiper-container", {
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          slidesPerGroup: 3,
          delay: 500,
          loop: true,
          waitForTransition: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      }else {
        new Swiper(".swiper-container", {
          slidesPerView: 1,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          delay: 500,
          waitForTransition: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        });
      }
    })
    $(window).trigger('resize')
  }
  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/1.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/2.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/3.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/4.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/5.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/6.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/7.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/8.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={RESOURCE + "images/ebook/9.png"}
                alt=""
                className="img-responsive"
              />
            </div>
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </>
    );
  }
}

export default EbookPreview;
