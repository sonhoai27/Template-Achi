import * as React from "react";

class ClientFollow extends React.Component {
  render() {
    return (
      <div className="container follow paddingY-64">
        <div className="row">
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Nhận bài động lực hàng ngày</h3>
              <iframe
                src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNguyenMinhChi.MrShare%2F&width=84&layout=button_count&action=like&size=small&show_faces=false&share=false&height=21&appId=1440913602698681"
                width={84}
                height={21}
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder={0}
                allowTransparency={true}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Kênh Youtube bài học</h3>
              <div className="g-ytsubscribe" data-channelid="UCHCeMi9tGx9VCMSHHbscrLg" data-layout="default" data-count="default"></div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social-callout">
              <h3 className="text-center">Nhóm phát triển bản thân</h3>
              <a href="https://www.facebook.com/groups/MatMaThoiSinhVien/" target="_blank"><div className="btn btn-sm btn-info">Group Facebook</div></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientFollow;
