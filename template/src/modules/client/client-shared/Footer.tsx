import * as React from "react";

class Footer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="col-xs-12 client-footer">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6 list-footer-menu">
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Events</a>
                    </li>
                    <li>
                      <a href="">Blogs</a>
                    </li>
                    <li>
                      <a href="">Source</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3"></div>
              </div>
              <div className="row footer-intro" style={{marginTop: 32}}>
                <div className="col-sm-3">
                  <h3>Điều quan trọng</h3>
                </div>
                <div className="col-sm-3">
                  <h3>Bài viết hay</h3>
                </div>
                <div className="col-sm-3">
                  <h3>kết nối với Mr.Share</h3>
                  <ul className="list-icons-social">
                    <li><a href=""><i className="mdi mdi-facebook-box"/></a></li>
                    <li><a href=""><i className="mdi mdi-youtube-play"/></a></li>
                    <li><a href=""><i className="mdi mdi-facebook-messenger"/></a></li>
                  </ul>
                </div>
                <div className="col-sm-3">
                  <h3>Địa chỉ</h3>
                  <ul className="list-icons-address">
                    <li><i className="ti-email"/> yoloschoolvn@gmail.com</li>
                    <li><i className="icon-phone"/> 097 7545 374</li>
                    <li><i className="icon-compass"/> 26/3 Phan Chu Trinh, Phường Hiệp Phú, Quận 9, Hồ Chí Minh</li>
                  </ul>
                </div>
              </div>
              <div className="row" style={{marginTop: 128, marginBottom: 16}}>
                <div className="col-xs-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <p>@ 2018 - NMC</p>
                  <p>made with love at sonH</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Footer