import * as React from "react";
import { connect } from "react-redux";
import { reIsDanger, reIsSuccess, reIsLoading } from "../../../reducers/init";
import DatePicker from 'react-date-picker';
import Helmet from "react-helmet";
import { IOrderSourceModel } from "../../../models/orderSource";
import { reAddOrder } from "../../admin/source/order/reOrder";
import { reDetailSche } from "../../admin/source/reSource";
import { BASEURL } from "../../../config/const";
import { addTraffic } from "../../shared/traffic";
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
    addTraffic({
      type: 0,
      url:  window.location.href
    })
    this.props.reDetailSche(this.props.match.params.idSche);
  }
  componentDidUpdate(preProps) {
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
      if (this.props.resAddOrder.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.reIsLoading(!this.props.isLoading)
          window.location.href = BASEURL+'page/dang-ky-khoa-hoc/'+this.props.match.params.idSche
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.reIsDanger(false);
          window.location.href = BASEURL+'page/dang-ky-khoa-hoc/'+this.props.match.params.idSche
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
  getFullDate = (): string => {
    const date = new Date()
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
  }
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
    this.props.reAddOrder({
      ...this.state.order,
      source_order_birthday: this.makeDateText(this.state.order.source_order_birthday),
      source_order_created_date: this.getFullDate()
    })
   }
  };
  makeDateText = (day: any)=> {
    const date = new Date(day)
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
  }
  handleDayClick = (day: any) =>{
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
    const price = Number(this.state.source.source_sche_price)
    const sale = Number(this.state.source.source_sche_sale)
    const discount = price - sale
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
                src={this.state.source.source_banner}
                alt=""
                className={"img-responsive"}
                width={"100%"}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h2 style={{ fontWeight: 600, marginTop: 32 }}>
                {this.state.source.source_title}&nbsp;-&nbsp;{this.state.source.source_sche_khoa}
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
                  <p style={{textDecoration: 'line-through'}}>
                    {price.toLocaleString('VN')}đ
                  </p>
                </li>
                <li>
                  <p>Ưu đãi hiện tại: </p>
                  <p style={{color: 'red'}}>{discount.toLocaleString('VN')}đ</p>
                </li>
                <li>
                  <p>Thời gian: </p>
                  <p dangerouslySetInnerHTML={{__html: this.state.source.source_date_sche}}/>
                </li>
              </ul>
              <div dangerouslySetInnerHTML={{__html: this.state.source.source_sche_uu_dai}}/>
              <hr
                style={{
                  backgroundColor: "#999",
                  marginTop: 32,
                  marginBottom: 32
                }}
              />
            </div>
            <div className="col-sm-12">
            <b style={{color: 'red'}}>CHÚ Ý</b>: <b>Nhập chính xác các thông tin đăng ký</b> (theo  mẫu bên dưới) sau đó <b>check email</b> đăng ký để kiểm tra lại thông tin để đảm bảo chính xác (nếu sai hãy đăng ký lại thêm lần nữa), sau đó xác nhận email và làm theo hướng dẫn từ Sống Xứng Đáng.<br/>
            {/* <p style={{color: 'blue'}}>Có 2 hình thức hoàn tất phí:</p>
            <ol type="1" style={{color: 'blue'}}>
                <li>Trực tiếp tại văn phòng: 26/3 Phan Chu Trinh, Hiệp Phú, Quận 9, Hồ Chí Minh.</li>
                <li>Chuyển khoản qua ngân hàng theo thông tin dưới đây:
                  <ul>
                  <li>Ngân Hàng: VP Bank - Chi nhánh quận 10 </li>
                  <li>Chủ tài khoản: Nguyễn Minh Chí</li>
                  <li>Số tài khoản: 85461052</li>
                  <li>Nội dung chuyển khoản: Họ tên_Số điện thoại _Khóa học đăng ký​</li>
                  </ul>
                </li>
            </ol> */}
            <b style={{color: 'red'}}>Hotline hỗ trợ</b>: <b> 0977 545 374</b> để được giải đáp thêm thông tin.<br/>
                  Trân trọng,
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 form-order-source">
              <div className="row">
                <div className="col-sm-4">
                  <h3 style={{color: '#1f9080'}}>
                    <i className="icon-user" /> Học viên
                  </h3>
                </div>
                <div className="col-sm-4 text-center" style={{marginTop: 8,color: '#1f9080'}}>Điền chính xác thông tin bên dưới</div>
                <div className="col-sm-4"></div>
              </div>
              <div className="row form-order-source_form">
                <div className="col-sm-4" />
                <div className="col-sm-4">
                  <div className="form-group">
                    <label className="col-md-12">
                      <span className="help">* Email</span>
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
                      <span className="help">* Số điện thoại</span>
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
                      <span className="help">* Họ</span>
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
                      <span className="help">* Tên lót và tên</span>
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
                      <span className="help">* Giới tính</span>
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
                      <span className="help">* Ngày sinh</span>
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
