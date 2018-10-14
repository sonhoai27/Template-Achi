import * as React from "react";
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
                src={"http://nguyenminhchi.com/api/uploads/images/bdf60984143956f8f7951539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/036dc3a90ff5501ef6191539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/1534decea79b82bc2fe91539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/4d22f6abba817c9028401539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/a92f135863b01abdd79e1539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/ba471b19a669e9a385ca1539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/bd7d41f3c025f7be3e2d1539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/c7023ee3a8a920df61c41539450000000.png"}
                alt=""
                className="img-responsive"
              />
            </div>
            <div className="swiper-slide">
              <img
                src={"http://nguyenminhchi.com/api/uploads/images/fbf3e8d080f4413140111539450000000.png"}
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
