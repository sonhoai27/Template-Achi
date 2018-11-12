import * as React from "react";
import { BASEURLADMIN } from "../../../config/const";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav">
            <div className="sidebar-head">
              <h3>
                <span className="fa-fw open-close">
                  <i className="ti-menu hidden-xs" />
                  <i className="ti-close visible-xs" />
                </span>
                <span className="hide-menu">Navigation</span>
              </h3>
            </div>
            <ul className="nav" id="side-menu">
              <li className="user-pro">
                <a href="javascript:void(0)" className="waves-effect">
                  <img
                    src=""
                    alt="user-img"
                    className="img-circle"
                  />
                  <span className="hide-menu">
                    
                    Steve Gection
                    <span className="fa arrow" />
                  </span>
                </a> </li>
              <li className="active">
                <a href={BASEURLADMIN} className="waves-effect active">
                  <i className="mdi mdi-av-timer fa-fw" data-icon="v" />
                  <span className="hide-menu">
                    Trang chủ <span className="fa arrow" />
                  </span>
                </a></li>
              <li>
                <a className="waves-effect ">
                  <i className="mdi mdi-content-copy fa-fw" />
                  <span className="hide-menu">
                    Khóa học
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href={BASEURLADMIN+'source'} >
                      <i className="ti-layout-width-default fa-fw" />
                      <span className="hide-menu">Danh sách khóa học</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'source/contact'}  className="waves-effect">
                      <i className="ti-email fa-fw" />
                      <span className="hide-menu">Liên hệ</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'source/order'} >
                      <i className="ti-layout-sidebar-left fa-fw" />
                      <span className="hide-menu">Đơn hàng</span>
                    </a>
                  </li>
                  <li>
                    <a  href={BASEURLADMIN+'source/add-source'}  className="waves-effect">
                      <i className="ti-lock fa-fw" />
                      <span className="hide-menu">Thêm mới khóa học</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-format-color-fill fa-fw" />
                  <span className="hide-menu">
                    Bài viết
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul
                  className="nav nav-second-level collapse">
                  <li>
                    <a href={BASEURLADMIN+'blog'} >
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />
                      <span className="hide-menu">Danh sách bài viết</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'blog/add'} >
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />
                      <span className="hide-menu">Thêm mới</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'source/comment'} >
                      <i className="ti-layout-menu fa-fw" />
                      <span className="hide-menu">Bình luận</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'blog/author'}>
                      <i className="fa-fw">A</i>
                      <span className="hide-menu">Tác giả</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'blog/category'}>
                      <i className="fa-fw">D</i>
                      <span className="hide-menu">Danh mục</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="devider" />
              <li>
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-clipboard-text fa-fw" />
                  <span className="hide-menu">
                    Video
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <Link to={BASEURLADMIN+'video'}>
                      <i className="fa-fw">B</i>
                      <span className="hide-menu">Danh sách video</span>
                    </Link>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'video/add'}>
                      <i className="fa-fw">L</i>
                      <span className="hide-menu">Thêm mới</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-table fa-fw" />
                  <span className="hide-menu">
                    Quà tặng
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href={BASEURLADMIN+'gift'} >
                      <i className="fa-fw">B</i>
                      <span className="hide-menu">Danh sách quà tặng</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'gift/add'} >
                      <i className="fa-fw">L</i>
                      <span className="hide-menu">Thêm mới quà tặng</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'gift/customers'} >
                      <i className="fa-fw">L</i>
                      <span className="hide-menu">Danh sách đăng ký</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="last-nav">
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-apps fa-fw" />
                  <span className="hide-menu">
                    UI
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href={BASEURLADMIN+'ui'} >
                      <i className="ti-comments-smiley fa-fw" />
                      <span className="hide-menu">Danh sách UI</span>
                    </a>
                  </li>
                  <li>
                    <a href={BASEURLADMIN+'ui/add'}  className="waves-effect">
                      <i className="ti-desktop fa-fw" />
                      <span className="hide-menu">Thêm mới</span>
                    </a>
                    </li>
                    <li>
                    <a href={BASEURLADMIN+'ui/page'}  className="waves-effect">
                      <i className="ti-desktop fa-fw" />
                      <span className="hide-menu">Trang</span>
                    </a>
                    </li>
                  </ul>
              </li>
              <li className="last-nav">
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-apps fa-fw" />
                  <span className="hide-menu">
                    Sổ tay
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href={BASEURLADMIN+'order-ebook'}>
                      <i className="ti-comments-smiley fa-fw" />
                      <span className="hide-menu">Danh sách đăng ký</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-desktop fa-fw" />
                      <span className="hide-menu">Quản lý gói</span>
                    </a>
                    </li>
                  </ul>
              </li>
                <li className="last-nav">
                    <a href="javascript:void(0)" className="waves-effect">
                        <i className="mdi mdi-apps fa-fw" />
                        <span className="hide-menu">
                    Thống kê
                    <span className="fa arrow" />
                  </span>
                    </a>
                    <ul className="nav nav-second-level collapse">
                        <li>
                            <a href={BASEURLADMIN+'order-ebook'}>
                                <i className="ti-comments-smiley fa-fw" />
                                <span className="hide-menu">Tổng quan</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="waves-effect">
                                <i className="ti-desktop fa-fw" />
                                <span className="hide-menu">Khóa học</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="waves-effect">
                                <i className="ti-desktop fa-fw" />
                                <span className="hide-menu">Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className="waves-effect">
                                <i className="ti-desktop fa-fw" />
                                <span className="hide-menu">Quà tặng</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
