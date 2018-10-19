import * as React from "react";
import { connect } from "react-redux";
import ClientHeader from "./client-shared/Header";
import Footer from "./client-shared/Footer";
import axios from 'axios'
import { API } from "../../config/const";
import Helmet from 'react-helmet'
import { reIsDanger, reIsSuccess } from "../../reducers/init";
import { BASEURL } from './../../config/const';
interface IProps {
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
}
interface IState {
  gift: any;
  user: {
    send_gift_email: string;
    send_gift_name: string;
    send_gift_title: string;
    send_gift_phone: string;
  }
}

class ClientGift extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      gift: {},
      user: {
        send_gift_email: "",
        send_gift_name: "",
        send_gift_title: "",
        send_gift_phone: ""
      }
    }
  }
  onchange = e => {
    // @ts-ignore
     this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  };
  componentDidMount(){
    axios.get(API+'gift/detail/active')
    .then(result =>{
      this.setState({
        gift: result.data.list,
        user: {
          ...this.state.user,
          send_gift_title: result.data.list.gift_name
        }
      })
    })
    .catch(err => {
    })
  }
  onSendGift = ()=> {
    if(
      this.state.user.send_gift_email !== "" && this.state.user.send_gift_name != "" && this.state.user.send_gift_phone != ""
    ){
      axios.post(API+'goi-qua-tang/add/', {
        gift: this.state.gift,
        user: this.state.user
      })
      .then(result => {
        console.log(result)
        if(result.data.status === 200){
          this.props.reIsSuccess(true);
          setTimeout(() => {
            this.props.reIsSuccess(false);
            window.location.href = BASEURL+'page/nhan-qua/'+this.state.gift.gift_id
          }, 2000);
        }else {
          this.props.reIsDanger(true);
          setTimeout(() => {
            this.props.reIsDanger(false);
          }, 2000);
        }
      })
      .catch(err => {
      })
    }else {
      alert("Nhập đủ")
    }
}
  render() {
    return (
      <>
        <Helmet><title>Quà Tặng | Nguyễn Minh Chí</title></Helmet>
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
                  src={this.state.gift.gift_cover}
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-1" />
              <div className="col-sm-6" style={{ fontSize: 18 }}>
                <p dangerouslySetInnerHTML={{__html: this.state.gift.gift_promo}}/>
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
                    <div className="col-xs-12 margin-b-32">
                      <h2 className="text-center">Thông Tin Đăng Ký</h2>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Họ và tên</label>
                      <input
                        onChange={this.onchange}
                        type="text"
                        className="form-control"
                        name="send_gift_name"
                        placeholder={"Tên của bạn"}
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Số điện thoại</label>
                      <input
                        onChange={this.onchange}
                        type="text"
                        className="form-control"
                        name="send_gift_phone"
                        placeholder={"Số điện thoại"}
                      />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input
                        onChange={this.onchange}
                        type="email"
                        className="form-control"
                        name="send_gift_email"
                        placeholder={"Email"}
                      />
                    </div>
                    <div className="text-center">
                      <div className="btn" onClick={this.onSendGift}>Nhận quà</div>
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
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientGift);
