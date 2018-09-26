import * as React from "react";
import SearchBar from "./SearchBar";
import { BASEURL } from "../../../config/const";

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
                <a href="tel://1-800-488-6040" className="phonenumber">
                  <span className="mm-phone-number">1-800-488-6040</span>
                </a>
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/TonyRobbins/"
                    target="_blank"
                  >
                    <i className="icon-social-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/tonyrobbins" target="_blank">
                    <i className=" icon-social-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-utilities">
              <ul>
                <li className="nav-item hidden-xs hidden-sm" id="login">
                  <a href="#" className="login-trigger" id="members-portal">
                    Login
                  </a>
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
                  <img src="https://www.tonyrobbins.com/wp-content/themes/tonyrobbins2016/images/tr-logo-blk-on-wht.svg" />
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
                  <a title="Ask Tony" href="/ask-tony/">
                    Giới thiệu <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Ask Tony Anything" href="/ask-tony/">
                        Về Mr.Share
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="About">
                    Khóa học <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        title="About Tony Robbins"
                        href={BASEURL+'page/khoa-hoc'}
                      >
                        Tất cả khóa học
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Store">
                    Lịch sự kiện
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Experiences">
                    Video <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="All Upcoming Events" href={BASEURL+'page/video'}>
                        Tất cả video
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Coaching" href={BASEURL+'page/sach'}>
                    Sổ tay
                  </a>
                </li>
                <li className="menu-item">
                  <a title="Blog">
                    Blog <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Read All Blogs" href={BASEURL+'page/blog'}>
                       Tất cả blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Blog">
                    Quà tặng <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Read All Blogs" href={BASEURL+'page/qua-tang'}>
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
