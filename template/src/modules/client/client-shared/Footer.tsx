import * as React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-xs-12 client-footer">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-sm-3" />
              <div className="col-sm-6 list-footer-menu">
                <ul>
                  <li>
                    <a href="">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="">Khóa học</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Sổ tay</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3" />
            </div>
            <div className="row footer-intro" style={{ marginTop: 32 }}>
              <div className="col-sm-3">
                <h3>Điều quan trọng</h3>
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-chevron-right" /> Đọc Blog
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-chevron-right" /> Video
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-chevron-right" /> Quà Tặng
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-chevron-right" /> Sổ Tay
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-chevron-right" /> Các Khóa Học Đầy Tự Hào
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h3>Bài viết hay</h3>
              </div>
              <div className="col-sm-3">
                <h3>kết nối với Mr.Share</h3>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNguyenMinhChi.MrShare%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1440913602698681"
                  width={'100%'}
                  height={154}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder={0}
                  allowTransparency={true}
                />

                <ul className="list-icons-social margin-t-16">
                  <li>
                    <a href="https://www.facebook.com/NguyenMinhChi.MrShare/"
                    target="_blank">
                      <i className="icon-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1" target="_blank">
                      <i className="icon-social-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/groups/MatMaThoiSinhVien/" target="_blank">
                      <i className="icon-paper-plane" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h3>Học viện thế hệ sống xứng đáng</h3>
                <ul className="list-icons-address">
                  <li>info.songxungdang@gmail.com</li>
                  <li> 097 7545 374</li>
                  <li>
                    26/3 Phan Chu Trinh, Phường Hiệp Phú, Quận 9, Hồ Chí Minh
                  </li>
                </ul>
              </div>
            </div>
            <div className="row" style={{ marginTop: 128, marginBottom: 16 }}>
              <div
                className="col-xs-12"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <p>@ 2018 - NMC</p>
                <p>made with love at sonH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
