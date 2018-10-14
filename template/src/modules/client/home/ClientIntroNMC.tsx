import * as React from "react";
import { BASEURL } from "./../../../config/const";

class ClientIntroNMC extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container paddingY-128">
          <div className="row flex-ver">
            <div className="col-sm-6">
              <div className="modal-body">
                <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IhZL4bQIo7Y" />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h1 style={{ fontWeight: 700, fontSize: 30 }} className="text-center">
                NGUYỄN MINH CHÍ - MR.SHARE
              </h1>
              <h3 style={{ fontWeight: 700 }} className="text-center">
                Chuyên gia Đào tạo bạn trẻ sống xứng đáng
              </h3>
              <p style={{textAlign: 'justify'}}>
                Mr.Share - Nguyễn Minh Chí hiện là <b>chủ tịch của 2 công ty</b>: Học
                viện Đào tạo thế hệ Sống xứng đáng, trung tâm anh ngữ Max Power.
                <b>Tác giả</b> của cuốn da Sống xứng đáng. Chinh phục <b>full marathon
                42km</b>. Với kinh nghiệm hơn <b>6 năm kinh nghiệm giảng dạy</b> trong lĩnh
                vực Đào tạo phát triển con người, đào tạo trực tiếp hơn <b>10.000
                học viên</b>. Diễn giả Mr.Share với khao khát chia sẻ những kiến
                thức, bài học với khát vọng phụng <b>sự tuổi trẻ Việt sống xứng
                đáng.</b>
              </p>
              <div
                style={{
                  textAlign: "center",
                  display: "block",
                  width: "128px",
                  margin: "auto"
                }}
              >
                <a href={BASEURL + "page/gioi-thieu"} className="white get-link btn">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientIntroNMC;
