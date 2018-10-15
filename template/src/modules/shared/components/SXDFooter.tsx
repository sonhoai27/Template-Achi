import * as React from "react";

class SXDFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-xs-12 sxd-footer">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2>Vui Lòng Liên Hệ Để Tham Gia Chương Trình Sớm Nhất:</h2>
                <h2>Nguyễn Minh Chí - Sống Xứng Đáng</h2>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <div>
                  <a
                    href="https://www.facebook.com/NguyenMinhChi.MrShare/"
                    target="_blank"
                  >
                    <span className="fa fa-facebook" />
                    &nbsp;Facebook
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.facebook.com/groups/MatMaThoiSinhVien/"
                    target="_blank"
                  >
                    <span className="fa fa-comment" />
                    &nbsp;Facebook Group
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                    target="_blank"
                  >
                    <span className="fa fa-youtube" />
                    &nbsp;Youtube
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div>
                  <span className="fa fa-mobile-phone" />
                  &nbsp;0977545374
                </div>
                <div>
                  <span className="fa fa-inbox" />
                  &nbsp;info.songxungdang@gmail.com
                </div>
                <div>
                  <span className="fa fa-location-arrow" />
                  &nbsp;26/3 Phan Chu Trinh, Hiệp Phú, Quận 9, Tp.HCM
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SXDFooter;
