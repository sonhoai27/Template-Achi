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
              src="http://nguyenminhchi.com/api/uploads/images/2baaedd86093850aaa201539450000000.MP4"
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
