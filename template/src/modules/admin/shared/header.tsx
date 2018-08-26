import * as React from "react";
import {Helmet} from "react-helmet";
import { RESOURCE } from "../../../config/const";
class Header extends React.Component {
  render() {
    return (
      <>
       <Helmet>
            <link rel="stylesheet" href={RESOURCE+'css/custom.css'}/>
        </Helmet>
        <nav className="navbar navbar-default navbar-static-top m-b-0">
          <div className="navbar-header">
            <div className="top-left-part">
              <a className="logo" href="index.html">
                <b>Admin</b>
              </a>
            </div>
            {/* /Logo */}
            {/* Search input and Toggle icon */}
            <ul className="nav navbar-top-links navbar-left">
              <li>
                <a
                  href="javascript:void(0)"
                  className="open-close waves-effect waves-light visible-xs"
                >
                  <i className="ti-close ti-menu" />
                </a>
              </li>
              {/* /.dropdown */}
            </ul>
            <ul className="nav navbar-top-links navbar-right pull-right">
              <li className="dropdown">
                <a
                  className="dropdown-toggle profile-pic"
                  data-toggle="dropdown"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  {" "}
                  <img
                    src="https://wrappixel.com/ampleadmin/ampleadmin-html/plugins/images/users/varun.jpg"
                    alt="user-img"
                    width={36}
                    className="img-circle"
                  />
                  <b className="hidden-xs">Steave</b>
                  <span className="caret" />{" "}
                </a>
                <ul className="dropdown-menu dropdown-user animated flipInY">
                  <li>
                    <div className="dw-user-box">
                      <div className="u-img">
                        <img
                          src="https://wrappixel.com/ampleadmin/ampleadmin-html/plugins/images/users/varun.jpg"
                          alt="user"
                        />
                      </div>
                      <div className="u-text">
                        <h4>Steave Jobs</h4>
                        <p className="text-muted">varun@gmail.com</p>
                        <a
                          href="profile.html"
                          className="btn btn-rounded btn-danger btn-sm"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-user" /> My Profile
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-wallet" /> My Balance
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-email" /> Inbox
                    </a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-settings" /> Account Setting
                    </a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </li>
                </ul>
                {/* /.dropdown-user */}
              </li>
            </ul>
          </div>
          {/* /.navbar-header */}
          {/* /.navbar-top-links */}
          {/* /.navbar-static-side */}
        </nav>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav">
            <div className="sidebar-head">
              <h3>
                <span className="fa-fw open-close">
                  <i className="ti-menu hidden-xs" />
                  <i className="ti-close visible-xs" />
                </span>{" "}
                <span className="hide-menu">Navigation</span>
              </h3>{" "}
            </div>
            <ul className="nav" id="side-menu">
              <li className="user-pro">
                <a href="javascript:void(0)" className="waves-effect">
                  <img
                    src="../plugins/images/users/varun.jpg"
                    alt="user-img"
                    className="img-circle"
                  />{" "}
                  <span className="hide-menu">
                    {" "}
                    Steve Gection
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul
                  className="nav nav-second-level collapse"
                  aria-expanded="false"
                  style={{ height: 0 }}
                >
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-user" />{" "}
                      <span className="hide-menu">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-wallet" />{" "}
                      <span className="hide-menu">My Balance</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-email" />{" "}
                      <span className="hide-menu">Inbox</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="ti-settings" />{" "}
                      <span className="hide-menu">Account Setting</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-power-off" />{" "}
                      <span className="hide-menu">Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="active">
                {" "}
                <a href="javascript:void(0)" className="waves-effect active">
                  <i className="mdi mdi-av-timer fa-fw" data-icon="v" />{" "}
                  <span className="hide-menu">
                    {" "}
                    Dashboard <span className="fa arrow" />{" "}
                    <span className="label label-rouded label-inverse pull-right">
                      4
                    </span>
                  </span>
                </a>
                <ul className="nav nav-second-level in collapse">
                  <li>
                    {" "}
                    <a href="index.html" className="active">
                      <i className=" fa-fw">1</i>
                      <span className="hide-menu">Dashboard 1</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="index2.html">
                      <i className=" fa-fw">2</i>
                      <span className="hide-menu">Dashboard 2</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="index3.html">
                      <i className=" fa-fw">3</i>
                      <span className="hide-menu">Dashboard 3</span>
                    </a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="javascript:void(0)" className="waves-effect ">
                  <i className="mdi mdi-content-copy fa-fw" />{" "}
                  <span className="hide-menu">
                    Pages
                    <span className="fa arrow" />
                    <span className="label label-rouded label-warning pull-right">
                      30
                    </span>
                  </span>
                </a>
                <ul className="nav nav-second-level two-li collapse">
                  <li>
                    <a href="starter-page.html">
                      <i className="ti-layout-width-default fa-fw" />{" "}
                      <span className="hide-menu">Starter Page</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-email fa-fw" />{" "}
                      <span className="hide-menu">Email Templates</span>
                      <span className="fa arrow" />
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        {" "}
                        <a href="../email-templates/basic.html">
                          <i className="fa-fw">B</i>{" "}
                          <span className="hide-menu">Basic</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="../email-templates/alert.html">
                          <i className="ti-alert fa-fw" />{" "}
                          <span className="hide-menu">Alert</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="../email-templates/billing.html">
                          <i className="ti-wallet fa-fw" />{" "}
                          <span className="hide-menu">Billing</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="../email-templates/password-reset.html">
                          <i className="ti-more fa-fw" />{" "}
                          <span className="hide-menu">Reset Pwd</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blank.html">
                      <i className="ti-layout-sidebar-left fa-fw" />{" "}
                      <span className="hide-menu">Blank Page</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-lock fa-fw" />
                      <span className="hide-menu">Authentication</span>
                      <span className="fa arrow" />
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        <a href="login.html">
                          <i className="fa-fw">L</i>{" "}
                          <span className="hide-menu">Login Page</span>
                        </a>
                      </li>
                      <li>
                        <a href="login2.html">
                          <i className="fa-fw">L</i>{" "}
                          <span className="hide-menu">Login v2</span>
                        </a>
                      </li>
                      <li>
                        <a href="register.html">
                          <i className="fa-fw">R</i>{" "}
                          <span className="hide-menu">Register</span>
                        </a>
                      </li>
                      <li>
                        <a href="register2.html">
                          <i className="fa-fw">R</i>{" "}
                          <span className="hide-menu">Register v2</span>
                        </a>
                      </li>
                      <li>
                        <a href="register3.html">
                          <i className="fa-fw">3</i>{" "}
                          <span className="hide-menu">3 Step Registration</span>
                        </a>
                      </li>
                      <li>
                        <a href="recoverpw.html">
                          <i className="fa-fw">R</i>{" "}
                          <span className="hide-menu">Recover Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="lock-screen.html">
                          <i className="fa-fw">L</i>{" "}
                          <span className="hide-menu">Lock Screen</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="lightbox.html">
                      <i className="ti-file fa-fw" />{" "}
                      <span className="hide-menu">Lightbox Popup</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="icon-bulb fa-fw" />{" "}
                      <span className="hide-menu">
                        Icons
                        <span className="fa arrow" />
                      </span>
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        {" "}
                        <a href="fontawesome.html">
                          <i className="fa-fw">F</i>
                          <span className="hide-menu">Font awesome</span>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="themifyicon.html">
                          <i className="fa-fw">T</i>
                          <span className="hide-menu">Themify Icons</span>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="simple-line.html">
                          <i className="fa-fw">S</i>
                          <span className="hide-menu">Simple line Icons</span>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="material-icons.html">
                          <i className="fa-fw">M</i>
                          <span className="hide-menu">Material Icons</span>
                        </a>{" "}
                      </li>
                      <li>
                        <a href="linea-icon.html">
                          <i className="fa-fw">L</i>
                          <span className="hide-menu">Linea Icons</span>
                        </a>
                      </li>
                      <li>
                        <a href="weather.html">
                          <i className="fa-fw">W</i>
                          <span className="hide-menu">Weather Icons</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="treeview.html">
                      <i className="ti-folder fa-fw" />{" "}
                      <span className="hide-menu">Treeview</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-info-alt fa-fw" />
                      <span className="hide-menu">Error Pages</span>
                      <span className="fa arrow" />
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        <a href="400.html">
                          <i className="ti-info-alt fa-fw" />{" "}
                          <span className="hide-menu">Error 400</span>
                        </a>
                      </li>
                      <li>
                        <a href="403.html">
                          <i className="ti-info-alt fa-fw" />{" "}
                          <span className="hide-menu">Error 403</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <i className="ti-info-alt fa-fw" />{" "}
                          <span className="hide-menu">Error 404</span>
                        </a>
                      </li>
                      <li>
                        <a href="500.html">
                          <i className="ti-info-alt fa-fw" />{" "}
                          <span className="hide-menu">Error 500</span>
                        </a>
                      </li>
                      <li>
                        <a href="503.html">
                          <i className="ti-info-alt fa-fw" />{" "}
                          <span className="hide-menu">Error 503</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="search-result.html">
                      <i className="fa-fw">S</i>{" "}
                      <span className="hide-menu">Search Result</span>
                    </a>
                  </li>
                  <li>
                    <a href="utility-classes.html">
                      <i className="fa-fw">U</i>{" "}
                      <span className="hide-menu">Utility Classes</span>
                    </a>
                  </li>
                  <li>
                    <a href="custom-scroll.html">
                      <i className="fa-fw">C</i>{" "}
                      <span className="hide-menu">Custom Scrolls</span>
                    </a>
                  </li>
                  <li>
                    <a href="animation.html">
                      <i className="fa-fw">A</i>{" "}
                      <span className="hide-menu">Animations</span>
                    </a>
                  </li>
                  <li>
                    <a href="profile.html">
                      <i className="fa-fw">P</i>{" "}
                      <span className="hide-menu">Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="invoice.html">
                      <i className="fa-fw">I</i>{" "}
                      <span className="hide-menu">Invoice</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <i className="fa-fw">F</i>{" "}
                      <span className="hide-menu">FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <i className="fa-fw">G</i>{" "}
                      <span className="hide-menu">Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html">
                      <i className="fa-fw">P</i>{" "}
                      <span className="hide-menu">Pricing</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mega-nav">
                {" "}
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-format-color-fill fa-fw" />{" "}
                  <span className="hide-menu">
                    UI
                    <span className="fa arrow" />{" "}
                    <span className="label label-rouded label-info pull-right">
                      20
                    </span>{" "}
                  </span>
                </a>
                <ul
                  className="nav nav-second-level collapse"
                  style={{ width: 1349 }}
                >
                  <li>
                    <a href="panels-wells.html">
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">Panels and Wells</span>
                    </a>
                  </li>
                  <li>
                    <a href="panel-ui-block.html">
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">Panels With BlockUI</span>
                    </a>
                  </li>
                  <li>
                    <a href="buttons.html">
                      <i className="ti-layout-menu fa-fw" />{" "}
                      <span className="hide-menu">Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="sweatalert.html">
                      <i className="ti-alert fa-fw" />{" "}
                      <span className="hide-menu">Sweat alert</span>
                    </a>
                  </li>
                  <li>
                    <a href="typography.html">
                      <i
                        data-icon="k"
                        className="linea-icon linea-software fa-fw"
                      />{" "}
                      <span className="hide-menu">Typography</span>
                    </a>
                  </li>
                  <li>
                    <a href="grid.html">
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">Grid</span>
                    </a>
                  </li>
                  <li>
                    <a href="tabs.html">
                      <i className="ti-layers fa-fw" />{" "}
                      <span className="hide-menu">Tabs</span>
                    </a>
                  </li>
                  <li>
                    <a href="tab-stylish.html">
                      <i className=" ti-layers-alt fa-fw" />{" "}
                      <span className="hide-menu">Stylish Tabs</span>
                    </a>
                  </li>
                  <li>
                    <a href="modals.html">
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">Modals</span>
                    </a>
                  </li>
                  <li>
                    <a href="progressbars.html">
                      <i className="ti-line-double fa-fw" />{" "}
                      <span className="hide-menu">Progress Bars</span>
                    </a>
                  </li>
                  <li>
                    <a href="notification.html">
                      <i className="ti-info-alt fa-fw" />{" "}
                      <span className="hide-menu">Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="carousel.html">
                      <i className="ti-layout-slider fa-fw" />{" "}
                      <span className="hide-menu">Carousel</span>
                    </a>
                  </li>
                  <li>
                    <a href="list-style.html">
                      <i
                        data-icon=""
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">List &amp; Media object</span>
                    </a>
                  </li>
                  <li>
                    <a href="user-cards.html">
                      <i className="ti-user fa-fw" />{" "}
                      <span className="hide-menu">User Cards</span>
                    </a>
                  </li>
                  <li>
                    <a href="timeline.html">
                      <i
                        data-icon="/"
                        className="linea-icon linea-basic fa-fw"
                      />{" "}
                      <span className="hide-menu">Timeline</span>
                    </a>
                  </li>
                  <li>
                    <a href="timeline-horizontal.html">
                      <i className="ti-layout-list-thumb fa-fw" />{" "}
                      <span className="hide-menu">Horizontal Timeline</span>
                    </a>
                  </li>
                  <li>
                    <a href="nestable.html">
                      <i className="ti-layout-accordion-separated fa-fw" />{" "}
                      <span className="hide-menu">Nesteble</span>
                    </a>
                  </li>
                  <li>
                    <a href="range-slider.html">
                      <i className=" ti-layout-slider-alt fa-fw" />{" "}
                      <span className="hide-menu">Range Slider</span>
                    </a>
                  </li>
                  <li>
                    <a href="tooltip-stylish.html">
                      <i className="ti-comments-smiley fa-fw" />{" "}
                      <span className="hide-menu">Stylish Tooltip</span>
                    </a>
                  </li>
                  <li>
                    <a href="bootstrap.html">
                      <i className="ti-rocket fa-fw" />{" "}
                      <span className="hide-menu">Bootstrap UI</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="devider" />
              <li>
                {" "}
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-clipboard-text fa-fw" />{" "}
                  <span className="hide-menu">
                    Forms
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level two-li collapse">
                  <li>
                    <a href="form-basic.html">
                      <i className="fa-fw">B</i>
                      <span className="hide-menu">Basic Forms</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-layout.html">
                      <i className="fa-fw">L</i>
                      <span className="hide-menu">Form Layout</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-advanced.html">
                      <i className="fa-fw">A</i>
                      <span className="hide-menu">Form Addons</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-material-elements.html">
                      <i className="fa-fw">M</i>
                      <span className="hide-menu">Form Material</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-float-input.html">
                      <i className="fa-fw">F</i>
                      <span className="hide-menu">Form Float Input</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-upload.html">
                      <i className="fa-fw">U</i>
                      <span className="hide-menu">File Upload</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-mask.html">
                      <i className="fa-fw">M</i>
                      <span className="hide-menu">Form Mask</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-img-cropper.html">
                      <i className="fa-fw">C</i>
                      <span className="hide-menu">Image Cropping</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-validation.html">
                      <i className="fa-fw">V</i>
                      <span className="hide-menu">Form Validation</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-dropzone.html">
                      <i className="fa-fw">D</i>
                      <span className="hide-menu">File Dropzone</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-pickers.html">
                      <i className="fa-fw">P</i>
                      <span className="hide-menu">Form-pickers</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-wizard.html">
                      <i className="fa-fw">W</i>
                      <span className="hide-menu">Form-wizards</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-typehead.html">
                      <i className="fa-fw">T</i>
                      <span className="hide-menu">Typehead</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-xeditable.html">
                      <i className="fa-fw">X</i>
                      <span className="hide-menu">X-editable</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-summernote.html">
                      <i className="fa-fw">S</i>
                      <span className="hide-menu">Summernote</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-bootstrap-wysihtml5.html">
                      <i className=" fa-fw">W</i>
                      <span className="hide-menu">Bootstrap wysihtml5</span>
                    </a>
                  </li>
                  <li>
                    <a href="form-tinymce-wysihtml5.html">
                      <i className="fa-fw">T</i>
                      <span className="hide-menu">Tinymce wysihtml5</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-table fa-fw" />{" "}
                  <span className="hide-menu">
                    Tables
                    <span className="fa arrow" />
                    <span className="label label-rouded label-danger pull-right">
                      9
                    </span>
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href="basic-table.html">
                      <i className="fa-fw">B</i>
                      <span className="hide-menu">Basic Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="table-layouts.html">
                      <i className="fa-fw">L</i>
                      <span className="hide-menu">Table Layouts</span>
                    </a>
                  </li>
                  <li>
                    <a href="data-table.html">
                      <i className="fa-fw">D</i>
                      <span className="hide-menu">Data Table</span>
                    </a>
                  </li>
                  <li>
                    <a href="bootstrap-tables.html">
                      <i className="fa-fw">B</i>
                      <span className="hide-menu">Bootstrap Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="responsive-tables.html">
                      <i className="fa-fw">R</i>
                      <span className="hide-menu">Responsive Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="editable-tables.html">
                      <i className="fa-fw">E</i>
                      <span className="hide-menu">Editable Tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="foo-tables.html">
                      <i className="fa-fw">F</i>
                      <span className="hide-menu">FooTables</span>
                    </a>
                  </li>
                  <li>
                    <a href="jsgrid.html">
                      <i className="fa-fw">J</i>
                      <span className="hide-menu">JsGrid Tables</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="last-nav">
                <a href="javascript:void(0)" className="waves-effect">
                  <i className="mdi mdi-apps fa-fw" />{" "}
                  <span className="hide-menu">
                    Apps
                    <span className="fa arrow" />
                  </span>
                </a>
                <ul className="nav nav-second-level collapse">
                  <li>
                    <a href="chat.html">
                      <i className="ti-comments-smiley fa-fw" />
                      <span className="hide-menu">Chat-message</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-desktop fa-fw" />
                      <span className="hide-menu">Inbox</span>
                      <span className="fa arrow" />
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        {" "}
                        <a href="inbox.html">
                          <i className="ti-email fa-fw" />
                          <span className="hide-menu">Mail box</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="inbox-detail.html">
                          <i className="ti-layout-media-left-alt fa-fw" />
                          <span className="hide-menu">Inbox detail</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="compose.html">
                          <i className="ti-layout-media-center-alt fa-fw" />
                          <span className="hide-menu">Compose mail</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="ti-user fa-fw" />
                      <span className="hide-menu">Contacts</span>
                      <span className="fa arrow" />
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        {" "}
                        <a href="contact.html">
                          <i className="icon-people fa-fw" />
                          <span className="hide-menu">Contact1</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="contact2.html">
                          <i className="icon-user-follow fa-fw" />
                          <span className="hide-menu">Contact2</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="contact-detail.html">
                          <i className="icon-user-following fa-fw" />
                          <span className="hide-menu">Contact Detail</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="javascript:void(0)" className="waves-effect">
                      <i className="mdi mdi-chart-bar fa-fw" />{" "}
                      <span className="hide-menu">
                        Charts
                        <span className="fa arrow" />
                      </span>
                    </a>
                    <ul className="nav nav-third-level collapse">
                      <li>
                        {" "}
                        <a href="flot.html">
                          <i className="fa-fw">F</i>
                          <span className="hide-menu">Flot Charts</span>
                        </a>{" "}
                      </li>
                      <li>
                        <a href="morris-chart.html">
                          <i className="fa-fw">M</i>
                          <span className="hide-menu">Morris Chart</span>
                        </a>
                      </li>
                      <li>
                        <a href="chart-js.html">
                          <i className="fa-fw">P</i>
                          <span className="hide-menu">Chart-js</span>
                        </a>
                      </li>
                      <li>
                        <a href="peity-chart.html">
                          <i className="fa-fw">P</i>
                          <span className="hide-menu">Peity Charts</span>
                        </a>
                      </li>
                      <li>
                        <a href="chartist-js.html">
                          <i className="fa-fw">C</i>
                          <span className="hide-menu">Chartist-js</span>
                        </a>
                      </li>
                      <li>
                        <a href="knob-chart.html">
                          <i className="fa-fw">K</i>
                          <span className="hide-menu">Knob Charts</span>
                        </a>
                      </li>
                      <li>
                        <a href="sparkline-chart.html">
                          <i className="fa-fw">S</i>
                          <span className="hide-menu">Sparkline charts</span>
                        </a>
                      </li>
                      <li>
                        <a href="extra-charts.html">
                          <i className="fa-fw">E</i>
                          <span className="hide-menu">Extra Charts</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    {" "}
                    <a href="map-google.html" className="waves-effect">
                      <i className="mdi mdi-google-maps fa-fw" />
                      <span className="hide-menu">Google Map</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="map-vector.html" className="waves-effect">
                      <i className="mdi mdi-map-marker fa-fw" />
                      <span className="hide-menu">Vector Map</span>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="calendar.html" className="waves-effect">
                      <i className="mdi mdi-calendar-check fa-fw" />{" "}
                      <span className="hide-menu">Calendar</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="devider" />
              <li>
                {" "}
                <a href="widgets.html" className="waves-effect">
                  <i className="mdi mdi-settings fa-fw" />{" "}
                  <span className="hide-menu">Widgets</span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
