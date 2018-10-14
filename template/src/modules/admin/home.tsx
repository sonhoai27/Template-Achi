import * as React from "react";
import Header from "./shared/header";
import BreadCrumd from "./shared/breadcrumb";

const breadCrumb = [
  {
    title: "Admin",
    uri: "",
    active: false
  },
  {
    title: "Home",
    uri: "",
    active: true
  }
];
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div id="page-wrapper">
          <div className="container-fluid">
            <BreadCrumd uri={breadCrumb} title="Trang chủ" />
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Liên hệ hôm nay</h3>
                    <ul className="list-inline two-part">
                      <li>
                        <div id="sparklinedash">
                        <i className="ti-stats-up text-success num" />
                        </div>
                      </li>
                      <li className="text-right">
                        <span className="counter num text-success">659</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Đăng ký hôm nay</h3>
                    <ul className="list-inline two-part">
                      <li>
                        <div id="sparklinedash">
                        <i className="ti-stats-up text-success num" />
                        </div>
                      </li>
                      <li className="text-right">
                        <span className="counter num text-success">659</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Xem Blog</h3>
                    <ul className="list-inline two-part">
                      <li>
                        <div id="sparklinedash">
                        <i className="ti-stats-up text-success num" />
                        </div>
                      </li>
                      <li className="text-right">
                        <span className="counter num text-success">659</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Đăng ký khóa học</h3>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Nhận quà</h3>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="white-box analytics-info">
                    <h3 className="box-title">Liên hệ</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
