import * as React from "react";
import Slider from "react-slick";
import { RESOURCE } from "../../../../config/const";
import { Helmet } from "react-helmet";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
};
class Customer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
       <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <Slider {...settings} className="comment-reader_slider">
              <div className="item">
                <img
                  src={RESOURCE + "images/client/clients/client.png"}
                  className="img-responsive"
                />
                <div className="white">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur
                  </p>
                  <p className="primary-color">
                    — AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION
                  </p>
                </div>
              </div>
              <div className="item">
                <img
                  src={RESOURCE + "images/client/clients/client.png"}
                  className="img-responsive"
                />
                <div className="white">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur.
                  </p>
                  <p className="primary-color">
                    — AUSTIN DOE, PROGRAMMER - MNO ORGANIZATION
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="col-sm-2" />
        </div>
      </>
    );
  }
}

export default Customer;
