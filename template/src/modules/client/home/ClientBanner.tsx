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
            poster="http://nguyenminhchi.com/api/uploads/images/0c70204d9323542f870e1540141200000.png"
            muted
          >
            <source
              src="http://nguyenminhchi.com/template/public/images/intro.MP4"
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
