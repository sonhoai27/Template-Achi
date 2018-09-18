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
                <p>
                  “Một cuộc sống xứng đáng không tự nhiên sinh ra mà được gieo
                  trồng, cuốn da này sẽ chỉ dẫn rất chi tiết và bước đi cùng bạn
                  trên hành trình đó”
                </p>
                <p></p>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                style={{
                  width: "80%",
                  float: "right"
                }}
                src={RESOURCE + "images/client/ebook2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EbookHeader;
