import * as React from "react";
import CLientFooterBanner from "./ClientFooterBanner";

class ClientBanner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="home-banner-video">
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
        <CLientFooterBanner/>
      </div>
    );
  }
}

export default ClientBanner;
