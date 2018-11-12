import * as React from "react";
import { BASEURL } from "../../../config/const";
interface IState {
  isShowingSearch: boolean;
}
class NewMenu extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingSearch: false
    };
  }
  eventSearch = e => {
    const value = e.target.value;
    if (e.keyCode === 13 && value !== "") {
      window.location.assign(BASEURL+'page'+`/tim-kiem/${value}`);
    }
    return ''
  };
  render() {
    return (
      <>
        {this.state.isShowingSearch ? (
          <div className="search-bar row">
            <div className="col-sm-4" />
            <div className="col-sm-4">
              <input
                autoFocus={true}
                placeholder="Bạn muốn tìm gì"
                onKeyUp={e => this.eventSearch(e)}
              />
            </div>
            <div className="col-sm-4">
              <i
                className="ti-close"
                onClick={() => {
                  this.setState({
                    isShowingSearch: !this.state.isShowingSearch
                  });
                }}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="new-version-menu navbar-fixed-top">
          <div id="header-bar-desktop" className="header-bar">
            <div className="header-container">
              <div className="header-socials">
                <p className="phone">
                  <a
                    href="mailto://info.songxungdang@gmail.com"
                    className="phonenumber"
                  >
                    <span className="mm-phone-number">
                      info.songxungdang@gmail.com
                    </span>
                  </a>
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/NguyenMinhChi.MrShare/"
                      target="_blank"
                    >
                      <i className="icon-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                      target="_blank"
                    >
                      <i className=" icon-social-youtube" />
                    </a>
                  </li>
                  <li className="search">
                    <i
                      className="icon-magnifier"
                      onClick={() => {
                        this.setState({
                          isShowingSearch: !this.state.isShowingSearch
                        });
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className="nav-utilities">
                <ul>
                  <li className="nav-item hidden-xs hidden-sm white" id="login">
                    Phụng sự tuổi trẻ Việt
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href={BASEURL}>
                    <img
                      src="http://nguyenminhchi.com/template/public/images/home/1-logo-mrshare.png"
                      alt="Nguyễn Minh Chí"
                    />
                  </a>
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div id="navbar1" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Giới thiệu <span className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a
                            title="Ask Tony Anything"
                            href={BASEURL + "page/gioi-thieu"}
                          >
                            Về Mr.Share
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Khóa học <span className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a
                            title="Tất cả khóa học"
                            href={BASEURL + "page/khoa-hoc"}
                          >
                            Tất cả khóa học
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        title="Lịch sự kiện"
                        href={BASEURL + "page/lich-su-kien"}
                      >
                        Lịch sự kiện
                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Video <span className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a title="Tất cả video" href={BASEURL + "page/video"}>
                            Tất cả video
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a title="Sổ tay" href={"http://sotay.songxungdang.com"}>
                        Sổ tay
                      </a>
                    </li>
                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Blog <span className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a title="Tất cả blog" href={BASEURL + "page/blog"}>
                            Tất cả blog
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Quà tặng <span className="caret" />
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a
                            title="Tất cả quà tặng"
                            href={BASEURL + "page/qua-tang"}
                          >
                            Tất cả quà tặng
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
export default NewMenu;
