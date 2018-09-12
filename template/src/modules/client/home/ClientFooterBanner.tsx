import * as React from "react";

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
                  <div className="get-access btn btn-sm btn-info">Đăng ký <i className="ti-angle-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CLientFooterBanner