import * as React from "react";
import SearchBar from "./SearchBar";
import { BASEURL, RESOURCE } from "../../../config/const";

interface IState {
  isShowingMenu: boolean,
  isShowingSearch: boolean
}
class ClientHeader extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowingMenu: false,
      isShowingSearch: false
    }
  }
  showMenu = ()=> {
    if(this.state.isShowingMenu === false){
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = 'auto'
    }
    this.setState({
      isShowingMenu: !this.state.isShowingMenu
    })
  }
  render() {
    return (
      <>
        <div id="header-bar-desktop" className="header-bar">
          <div className="header-container">
            <div className="header-socials">
              <p className="phone">
                <a href="mailto://info.songxungdang@gmail.com" className="phonenumber">
                  <span className="mm-phone-number">info.songxungdang@gmail.com</span>
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
                  <a href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1" target="_blank">
                    <i className=" icon-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-utilities">
              <ul>
                <li className="nav-item hidden-xs hidden-sm white" id="login">
                Phụng sự tuổi trẻ việt
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav id="desktop-nav" className="clearfix">
          <div className="header-container">
            <div>
            <div className="mobile-nav nav-item hidden-md hidden-lg" onClick={this.showMenu}>
              <a id="hamburger">
                <span />
                <span />
                <span />
              </a>
            </div>
            <ul className="nav-logo">
              <li>
                <a href={BASEURL}>
                  <img src={RESOURCE+'images/home/1-logo-mrshare.png'} />
                </a>
              </li>
            </ul>
            <div className="nav-right search search-header-icon">
                <div className="nav-item left" onClick={()=> {
                  this.setState({
                    isShowingSearch: !this.state.isShowingSearch
                  })
                }}>
                  <a id="search">
                    <i className="fa fa-fw fa-lg fa-search" />
                  </a>
                </div>
              </div>
            </div>
            <div className="main-nav-wrapper">
              <ul id="menu-main-nav" className={'nav-link hidden-xs hidden-sm '+(this.state.isShowingMenu ? 'show': '')}>
                <li className="menu-item">
                  <a>
                    Giới thiệu <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Ask Tony Anything" href={BASEURL+'page/gioi-thieu'}>
                        Về Mr.Share
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Khóa học">
                    Khóa học <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        title="Tất cả khóa học"
                        href={BASEURL+'page/khoa-hoc'}
                      >
                        Tất cả khóa học
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Lịch sự kiện" href={BASEURL+'page/lich-su-kien'}>
                    Lịch sự kiện
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Video">
                    Video <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Tất cả video" href={BASEURL+'page/video'}>
                        Tất cả video
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Sổ tay" href={BASEURL+'page/sach'}>
                    Sổ tay
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Blog">
                    Blog <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Tất cả blog" href={BASEURL+'page/blog'}>
                       Tất cả blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Quà tặng">
                    Quà tặng <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Tất cả quà tặng" href={BASEURL+'page/qua-tang'}>
                       Tất cả quà tặng
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav-right search search-header-icon">
              <div className="nav-item hidden-xs hidden-sm left" onClick={()=> {
                  this.setState({
                    isShowingSearch: !this.state.isShowingSearch
                  })
                }}>
                <a id="search">
                  <i className="fa fa-fw fa-lg fa-search" />
                </a>
              </div>
            </div>
          </div>
          { this.state.isShowingSearch ? <SearchBar/> : ''}
        </nav>
      </>
    );
  }
}

export default ClientHeader;
