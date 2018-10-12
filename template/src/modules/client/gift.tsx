import * as React from "react";
import { connect } from "react-redux";
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import { RESOURCE } from "../../config/const";
interface IProps {}
interface IState {
  email_name: string;
  email_email: string;
  email_phone: string;
  email_name_click: string;
}

class ClientGift extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      email_email: '',
      email_name: '',
      email_name_click: '',
      email_phone: ''
  }
  }
  onchange = e => {
    // @ts-ignore
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <ClientHeader />
        <div className="col-xs-12 qua-tang page-source">
          <div
            className="row page-source_banner"
            style={{
              backgroundImage:
                "url(https://eraweb.co/attachment/banner/everyone-can-design-website.png)"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="white" style={{ marginBottom: 64 }}>
                    <b>
                      FROM A HISTORY-MAKING STANLEY CUP FINALS TO BUILDING A
                      PERSONAL AI
                    </b>
                  </h2>
                  <p className="white">
                    Where has Tony been recently – and what in the world is he
                    up to? Below is the latest edition of the Tony Tracker,
                    where you can see highlights from his journeys and read his
                    narration of some of his favorite experiences. Watching
                    history being made at the Stanley Cup Finals TONIGHT’S GAME
                    IS ONE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container paddingY-64">
            <div className="row flex-ver">
              <div className="col-sm-1" />
              <div className="col-sm-4">
                <img
                  width={"100%"}
                  src="https://eraweb.co/attachment/images/home/custom-domain.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-6" style={{ fontSize: 16 }}>
                Hiện là Giám đốc đào tạo – Công ty Tư vấn & Đào tạo Hiệu Quả Tác
                giả của hơn 30 cuốn sách về Kỹ năng mềm, Tâm lý ứng dụng, Giáo
                dục nhân bản và Nghệ thuật sống. Chuyên gia đào tạo Kỹ năng mềm
                cho đội ngũ nhân lực của các doanh nghiệp với hơn 10 năm kinh
                nghiệm. Giảng viên thỉnh giảng tại các trường đại học
              </div>
            </div>
            <div className="row margin-t-64 flex-ver">
              <div className="col-sm-6" style={{ fontSize: 16 }}>
                Hiện là Giám đốc đào tạo – Công ty Tư vấn & Đào tạo Hiệu Quả Tác
                giả của hơn 30 cuốn sách về Kỹ năng mềm, Tâm lý ứng dụng, Giáo
                dục nhân bản và Nghệ thuật sống. Chuyên gia đào tạo Kỹ năng mềm
                cho đội ngũ nhân lực của các doanh nghiệp với hơn 10 năm kinh
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-4">
                <img
                  width={"100%"}
                  src="https://eraweb.co/attachment/images/home/marketing.svg"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
          <div className="row">
            <div className="footer-banner col-xs-12">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 footer-banner-img">
                    <img
                      src={RESOURCE + "images/home/keys.jpg"}
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-sm-8">
                    <h2>
                      Nhận miễn phí: 7 chìa khóa vàng để sống xứng đáng với
                      những “tháng năm rực rỡ”.
                    </h2>
                    <h4>
                      Hơn 3.000 nghìn người đã đăng ký nhận để sở hữu cuộc sống
                      xứng đáng với tuổi trẻ của mình.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row paddingY-128 form-send-gift"
            style={{
              backgroundImage:
                "url(https://eraweb.co/attachment/images/bg/install-bg.jpg)"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-3" />
                <div className="col-sm-6">
                  <div className="gift-body">
                    <div className="form-group">
                      <label className="control-label">Họ và tên</label>
                      <input
                        onChange={this.onchange}
                        type="text"
                        className="form-control"
                        name="email_name"
                        placeholder={"Tên của bạn"}
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Số điện thoại</label>
                      <input
                        onChange={this.onchange}
                        type="text"
                        className="form-control"
                        name="email_phone"
                        placeholder={"Số điện thoại"}
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input
                        onChange={this.onchange}
                        type="email"
                        className="form-control"
                        name="email_email"
                        placeholder={"Thư điện tử"}
                      />
                    </div>
                    <div className="text-center"><div className="btn">Nhận quà</div></div>
                  </div>
                </div>
                <div className="col-sm-6" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  isSuccess: storeState.reInit.isSuccess,
  isDanger: storeState.reInit.isDanger,
  resAddContact: storeState.reSource.resAddContact
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientGift);
