import * as React from "react";
import { connect } from "react-redux";
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
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
      email_email: "",
      email_name: "",
      email_name_click: "",
      email_phone: ""
    };
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
                "url(http://nguyenminhchi.com/api/uploads/images/196050fbecd7a4d6f3801539450000000.jpg)"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h1 className="white" >
                    <b>
                    NGUYENMINHCHI.COM
                    </b>
                  </h1>
                  <p className="white">
                  Sở hữu quà tặng từ Mr.Share
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
                    <div className="col-xs-12 margin-b-32">
                      <h2 className="text-center">Thông Tin Đăng Ký</h2>
                    </div>
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
                    <div className="text-center">
                      <div className="btn">Nhận quà</div>
                    </div>
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
