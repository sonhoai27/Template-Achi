import * as React from "react";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess, reIsLoading } from "../../../reducers/init";
import DatePicker from 'react-date-picker';
import Helmet from "react-helmet";
import { IOrderSourceModel } from "../../../models/orderSource";
import { reAddOrder } from "../../admin/source/order/reOrder";
import { reDetailSche } from "../../admin/source/reSource";
import { BASEURL, RESOURCE } from "../../../config/const";
import Footer from "../client-shared/Footer";
interface IState {
  order: IOrderSourceModel;
  source: any;
}
interface IProps {
  reAddOrder: (form: any) => void;
  reDetailSche: (id: number) => void;
  resAddOrder: any;
  resDetailSche: any;
  match: any;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reIsLoading: (status: boolean)=>void;
  isLoading: any;
}
class ClientOrderSource extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        source_order_id: Date.now() + "",
        source_order_id_source: 0,
        source_order_ten: "",
        source_order_email: "",
        source_order_birthday: new Date(),
        source_order_number_phone: "",
        source_order_ho: "",
        source_order_gender: "",
        source_order_price: 0
      },
      source: {}
    };
  }
  componentDidMount() {
    this.props.reDetailSche(this.props.match.params.idSche);
  }
  componentDidUpdate(preProps) {
    console.log((this.props.resDetailSche.list.source_sche_price - this.props.resDetailSche.list.source_sche_sale))
    if (preProps.resDetailSche != this.props.resDetailSche) {
      this.setState({
        source: this.props.resDetailSche.list,
        order: {
          ...this.state.order,
          source_order_id_source: this.props.resDetailSche.list.source_sche_id,
          source_order_price:(this.props.resDetailSche.list.source_sche_price - this.props.resDetailSche.list.source_sche_sale)
        }
      });
    }
    if (this.props.resAddOrder != preProps.resAddOrder) {
      console.log(this.props.resAddOrder.status);
      if (this.props.resAddOrder.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reIsLoading(!this.props.isLoading)
          window.location.href = BASEURL+'page/khoa-hoc/dang-ky/'+this.props.match.params.idSche
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href = BASEURL+'page/khoa-hoc/dang-ky/'+this.props.match.params.idSche
        }, 2000);
      }
    }
  }
  onChange = (e: any) => {
    this.setState({
      order: {
        ...this.state.order,
        [e.target.name]: e.target.value
      }
    });
  };
  addOrder = () => {
    this.props.reIsLoading(!this.props.isLoading)
   if(
     !this.validateEmail(this.state.order.source_order_email)
     || this.state.order.source_order_email === ""
     || this.state.order.source_order_ten === ""
     || this.state.order.source_order_ho === ""
     || this.state.order.source_order_number_phone === ""
     || this.state.order.source_order_gender === ""
    ){
      this.props.reIsDanger(true);
      setTimeout(() => {
        this.props.reIsDanger(false);
        this.props.reIsLoading(!this.props.isLoading)
      }, 2000);
   }else {
    this.props.reAddOrder(this.state.order)
   }
  };
  renderListdate = () => {
    if (this.props.resDetailSche.sche) {
      return this.props.resDetailSche.sche.map(element => {
        return (
          <p dangerouslySetInnerHTML={{ __html: element.date_source_time }} />
        );
      });
    } else {
      return <h1>null</h1>;
    }
  };
  handleDayClick = (day: any) =>{
    // const date = new Date(day)
    // date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    this.setState({
      order: {
        ...this.state.order,
        source_order_birthday: day
      }
    })
  }
  validateEmail = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  render() {
    return (
      <>
        <Helmet
          style={[
            {
              cssText: `
                .margin-top {
                    margin-top: 0px!important;
                }
            `
            }
          ]}
        />
        <div className="container order-source">
          <div className="row">
            <div className="col-sm-12">
              <img
                src={RESOURCE+'images/banner-dk-kh.png'}
                alt=""
                className={"img-responsive"}
                width={"100%"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2 style={{ fontWeight: 600, marginTop: 32 }}>
                {this.state.source.source_title} - Khóa{" "}
                {this.state.source.source_sche_id}
              </h2>
              <hr
                style={{
                  backgroundColor: "#999",
                  marginTop: 32,
                  marginBottom: 32
                }}
              />
            </div>
            <div className="col-sm-12 time">
              <ul>
                <li>
                  <p>Địa điểm diễn ra: </p>
                  <p>{this.state.source.source_sche_address}</p>
                </li>
                <li>
                  <p>Mức phí: </p>
                  <p>
                    <u>{this.state.source.source_sche_price}</u>
                  </p>
                </li>
                <li>
                  <p>Ưu đãi hiện tại: </p>
                  <p>{this.state.source.source_sche_sale}</p>
                </li>
                <li>
                  <p>Thời gian: </p>
                  <p>{this.renderListdate()}</p>
                </li>
              </ul>
              <ul>
                <li>
                  Để được hỗ trợ thêm, bạn có thể gọi hotline 24/7 của chúng tôi
                  bằng cách bấm vào đây.
                </li>
                <li>
                  Mỗi mức ưu đãi học phí đều chỉ có một số lượng suất đăng ký
                  nhất định.
                </li>
              </ul>
              <hr
                style={{
                  backgroundColor: "#999",
                  marginTop: 32,
                  marginBottom: 32
                }}
              />
            </div>
            <div className="col-sm-12">
              <h4>
                <b style={{ color: "red" }}>QUAN TRỌNG:</b> Vui lòng nhập chính
                xác <b style={{ color: "red" }}>email và số điện thoại</b> bạn
                thường dùng (ở mẫu đăng ký bên dưới) bởi vì NMC sẽ gửi cho bạn
                các thông tin sau:
              </h4>
              <ul
                style={{
                  listStyle: "circle",
                  padding: 0
                }}
              >
                <li style={{ marginLeft: 16 }}>
                  Xác nhận đăng ký thành công (email)
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 form-order-source">
              <h3>
                <i className="icon-user" /> Khách hàng
              </h3>
              <div className="row form-order-source_form">
                <div className="col-sm-4" />
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Email</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="source_order_email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div
                      className="col-sm-12"
                      style={{
                        fontWeight: 300,
                        fontSize: 12
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Số điện thoại</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="source_order_number_phone"
                        type="number"
                        className="form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Họ</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="source_order_ho"
                        type="text"
                        className="form-control"
                        placeholder="Họ"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Tên lót và tên</span>
                    </label>
                    <div className="col-md-12">
                      <input
                        onChange={this.onChange}
                        name="source_order_ten"
                        type="text"
                        className="form-control"
                        placeholder="Tên lót và tên"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Giới tính</span>
                    </label>
                    <div className="col-md-12">
                      <select
                        name="source_order_gender"
                        onChange={this.onChange}
                        className="form-control"
                      >
                        <option>Chọn</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help"> Ngày sinh</span>
                    </label>
                    <div className="col-md-12">
                    <DatePicker
                        onChange={this.handleDayClick}
                        value={this.state.order.source_order_birthday}
                    />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="btn btn-sm" onClick={this.addOrder}>
                      Đăng ký
                    </div>
                  </div>
                </div>
                <div className="col-sm-4" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resAddOrder: storeState.reOrder.resAddOrder,
  resDetailSche: storeState.reSource.resDetailSche,
  isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess,
  reAddOrder,
  reDetailSche,
  reIsLoading
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientOrderSource);
