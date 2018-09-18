import * as React from "react";
import { connect } from "react-redux";
import { reOrderEbook } from "../reEbook";
import { reIsDanger, reIsSuccess } from "../../../../reducers/init";

interface IProps {
  price: number;
  package: number;
  exit: any;
  resOrderEbook: any;
  reOrderEbook: (form: any) => void;
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface IState {
  order: {
    order_ebook_name: string;
    order_ebook_email: string;
    order_ebook_phone: string;
    order_ebook_package: number;
    order_ebook_discount: string;
    order_ebook_price: number;
  };
  stateNull: boolean;
}
class OrderEbook extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        order_ebook_name: "",
        order_ebook_email: "",
        order_ebook_phone: "",
        order_ebook_package: this.props.package,
        order_ebook_discount: "",
        order_ebook_price: this.props.price
      },
      stateNull: false
    };
  }
  componentDidUpdate(preProps) {
    if (this.props.resOrderEbook != preProps.resOrderEbook) {
      console.log(this.props.resOrderEbook.status);
      if (this.props.resOrderEbook.status === 200) {
        this.props.reIsSuccess(true);
        setTimeout(() => {
          this.props.reIsSuccess(false);
          this.props.exit();
        }, 2000);
      } else {
        this.props.reIsDanger(true);
        setTimeout(() => {
          this.props.exit();
          this.props.reIsDanger(false);
        }, 2000);
      }
    }
  }
  onChange = (e: any) => {
    // @ts-ignore
    this.setState({
      order: {
        ...this.state.order,
        [e.target.name]: e.target.value
      }
    });
  };
  onBuy = () => {
    if (
      this.state.order.order_ebook_name != "" &&
      this.state.order.order_ebook_email != "" &&
      this.state.order.order_ebook_phone != "" &&
      this.validateEmail(this.state.order.order_ebook_email)
    ) {
      this.props.reOrderEbook(this.state.order);
    } else {
      this.setState(
        {
          stateNull: !this.state.stateNull
        },
        () => {
          setTimeout(() => {
            this.setState({
              stateNull: !this.state.stateNull
            });
          }, 2000);
        }
      );
    }
  };
  validateEmail = (email: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };
  onExit = () => {
    this.props.exit();
  };
  render() {
    return (
      <>
        <div
          style={{ display: "block" }}
          className="modal fade in order-ebook"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={this.onExit}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">
                  <b style={{ fontWeight: 700 }}>
                    Đăng ký mua Sách: Gói {this.state.order.order_ebook_package}{" "}
                    Cuốn
                  </b>
                </h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="control-label">Họ và tên</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    className="form-control"
                    name="order_ebook_name"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Số điện thoại</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    className="form-control"
                    name="order_ebook_phone"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <input
                    type="email"
                    onChange={this.onChange}
                    className="form-control"
                    name="order_ebook_email"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Mã giảm giá</label>
                  <input
                    type="text"
                    onChange={this.onChange}
                    className="form-control"
                    name="order_ebook_discount"
                  />
                </div>
                {this.state.stateNull ? (
                  <p className="order_ebook-warning">Vui lòng xem lại</p>
                ) : (
                  ""
                )}
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.onExit}
                  type="button"
                  className="btn btn-default waves-effect"
                  data-dismiss="modal"
                >
                  Thoát
                </button>
                <button
                  onClick={this.onBuy}
                  type="button"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-backdrop fade in" />
      </>
    );
  }
}

const mapStateToProps = storeState => ({
  resOrderEbook: storeState.reOrderEbook.resOrderEbook
});
const mapDispatchToProps = {
  reOrderEbook,
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderEbook);
