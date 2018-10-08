import * as React from "react";
import { RESOURCE } from './../../../config/const';

class CLientFooterBanner extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="footer-banner col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-banner-img">
                <img
                  src={RESOURCE+'images/home/keys.jpg'}
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-6">
                <h2>Nhận miễn phí: 7 chìa khóa vàng để sống xứng đáng với những “tháng năm rực rỡ”.</h2>
                <h4>
                Hơn 3.000 nghìn người đã đăng ký nhận để sở hữu cuộc sống xứng đáng với tuổi trẻ của mình.
                </h4>
              </div>
              <div className="col-sm-3">
              <div className="form-get-access">
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="Email" />
                  <div className="get-access btn btn-sm btn-info">Nhận quà <i className="ti-angle-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CLientFooterBanner