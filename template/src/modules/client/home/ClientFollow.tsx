import * as React from "react";

class ClientFollow extends React.Component {
  render() {
    return (
      <div className="container follow paddingY-64">
        <div className="row">
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Nhận bài động lực hàng ngày</h3>
              <a
                href="https://www.facebook.com/NguyenMinhChi.MrShare/"
                target="_blank"
              >
              <div className="btn btn-sm btn-info" style={{
                  background: '#4267b2',
                  border: 'none'
                }}><i className=" icon-social-facebook"/>Facebook</div>
                </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Kênh Youtube bài học</h3>
              <a
                href="https://www.youtube.com/channel/UCHCeMi9tGx9VCMSHHbscrLg?sub_confirmation=1"
                target="_blank"
              >
                <div className="btn btn-sm btn-info" style={{
                  background: 'red',
                  border: 'none'
                }}><i className="icon-social-youtube"/> Youtube</div>
              </a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Nhóm phát triển bản thân</h3>
              <a
                href="https://www.facebook.com/groups/MatMaThoiSinhVien/"
                target="_blank"
              >
                <div className="btn btn-sm btn-info" style={{
                  background: '#4267b2'
                }}><i className=" icon-social-facebook"/> Group Facebook</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientFollow;
