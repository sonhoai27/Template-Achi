import * as React from "react";
import SearchBar from "./SearchBar";

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
                <a href="/">
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
                  <a title="About" href="/biography/">
                    About <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        title="About Tony Robbins"
                        href="https://www.tonyrobbins.com/biography/"
                      >
                        About Tony Robbins
                      </a>
                    </li>
                    <li className="menu-item">
                      <a title="Company Culture" href="/company-culture/">
                        Company Culture
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Contribution"
                        href="https://www.tonyrobbins.com/giving-back/"
                      >
                        Contribution
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Store" href="https://store.tonyrobbins.com">
                    Store <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        title="All Products"
                        href="http://store.tonyrobbins.com/collections/all/"
                      >
                        All Products
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Training Systems"
                        href="https://store.tonyrobbins.com/collections/breakthrough-app"
                      >
                        Training Systems
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Experiences" href="/events/">
                    Experiences <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="All Upcoming Events" href="/events/">
                        All Upcoming Events
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Unleash the Power Within"
                        href="/events/unleash-the-power-within/new-york-area-11-08-2018/"
                      >
                        Unleash the Power Within
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Date With Destiny"
                        href="/events/date-with-destiny/florida-12-07-2018/"
                      >
                        Date With Destiny
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Life & Wealth Mastery"
                        href="/events/life-wealth-mastery/"
                      >
                        Life &amp; Wealth Mastery
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Leadership Academy"
                        href="/events/leadership-academy/san-diego-08-26-2018/"
                      >
                        Leadership Academy
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Business Mastery"
                        href="/events/business-mastery/palm-beach/"
                      >
                        Business Mastery
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Business Results Training"
                        href="https://www.tonyrobbins.com/business-results-training/"
                      >
                        Business Results Training
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        title="Platinum Partnership"
                        href="/platinum-partnership/"
                      >
                        Platinum Partnership
                      </a>
                    </li>
                    <li className="menu-item">
                      <a title="Become a Crew Member" href="/community/">
                        Become a Crew Member
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Coaching" href="/coaching/">
                    Coaching <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        title="Results Coaching"
                        href="/coaching/results-coaching/"
                      >
                        Results Coaching
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a title="Blog" href="/blog/">
                    Blog <i className="fa fa-angle-down" />
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a title="Read All Blogs" href="/blog/">
                        Read All Blogs
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
