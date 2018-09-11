import * as React from "react";

class ClientBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="home-banner-video">
          <h1>HEADLINE T300X</h1>
          <video
            autoPlay
            loop
            id="video-background"
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/screencap-wheel.png"
            muted
          >
            <source
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148422/Vienna-SD.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="footer-banner col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-banner-img">
                <img
                  src="https://brendon.com/wp-content/uploads/2018/02/Brendon-Burchard-Four-Breakthroughs_tablet.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-9">
                <h2>Free Access to Brendon’s “Four Breakthroughs”:</h2>
                <h4>
                  Join 2 million subscribers! Get 4 new strategies every week on
                  how to be more productive, confident, and happy.
                </h4>
                <div className="form-get-access">
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="email" />
                  <div className="btn btn-sm btn-info">Đăng ký <i className="ti-angle-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientBanner;
