import * as React from "react";
import { RESOURCE } from "../../../../config/const";

class EbookHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid client-ebook-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 buy-now">
              <div>
                <p>What is Riopagez Ebook?</p>
                <p>Trendy Landing Page To Sell Your EBook</p>
              </div>
              <button className="btn btn-sm">BUY NOW</button>
            </div>
            <div className="col-sm-6">
                <img
                    style={{
                        width: '80%',
                        float: 'right'
                    }}
                    src={RESOURCE+'images/client/ebook2.png'} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EbookHeader;
