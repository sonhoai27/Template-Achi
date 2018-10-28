import * as React from "react";
import { API, BASEURL } from './../../../config/const';
import axios from 'axios'
import { connect } from "react-redux";
declare var $: any;
import { reIsSuccess, reIsDanger, reIsLoading } from "../../../reducers/init";
interface IState {
  gift: any;
  user: {
    send_gift_email: string;
    send_gift_name: string;
    send_gift_title: string;
    send_gift_phone: string;
  }
}
interface IProps {
  reIsSuccess: (status: boolean) => void;
  reIsDanger: (status: boolean) => void;
  reIsLoading: (status: boolean)=>void;
  isLoading: boolean;
}
class CLientFooterBanner extends React.Component<IProps, IState> {
  constructor(props){
    super(props)
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
    this.props.reIsLoading(!this.props.isLoading)
      if(
        this.state.user.send_gift_email !== "" && this.state.user.send_gift_name != "" && this.state.user.send_gift_phone != ""
      ){
        axios.post(API+'goi-qua-tang/add/', {
          gift: this.state.gift,
          user: this.state.user
        })
        .then(result => {
          if(result.data.status === 200){
            this.props.reIsSuccess(true);
            setTimeout(() => {
              this.props.reIsSuccess(false);
              this.setNull()
              window.location.href = BASEURL+'page/nhan-qua/'+this.state.gift.gift_id
            }, 2000);
          }else {
            this.props.reIsDanger(true);
            setTimeout(() => {
              this.props.reIsLoading(!this.props.isLoading)
              this.props.reIsDanger(false);
            }, 2000);
          }
        })
        .catch(err => {
        })
      }else {
        this.props.reIsLoading(!this.props.isLoading)
        alert("Vui lòng nhập đầy đủ thông tin.")
      }
  }
  setNull = ()=> {
    $("#send_gift_email").val('')
    $("#send_gift_name").val('')
    $("#send_gift_phone").val('')
  }
  onChange = (e: any)=> {
    // @ts-ignore
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  render(){
    return (
      <div className="footer-banner col-xs-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 footer-banner-img">
                <img
                  src={this.state.gift.gift_cover}
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-6">
                <h2>{this.state.gift.gift_name}</h2>
                <h4 dangerouslySetInnerHTML={{__html: this.state.gift.gift_promo}}/>
              </div>
              <div className="col-sm-3">
              <div className="form-get-access">
                  <input type="text" placeholder="Họ và tên" onChange={this.onChange} id="send_gift_name" name="send_gift_name"/>
                  <input type="mail" placeholder="Email"  onChange={this.onChange} id="send_gift_email" name="send_gift_email"/>
                  <input type="number" placeholder="Số điện thoại"  onChange={this.onChange} id="send_gift_phone" name="send_gift_phone"/>
                  <div className="get-access btn btn-sm btn-info" onClick={this.onSendGift}>Nhận quà <i className="ti-angle-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = storeState => ({
  isLoading: storeState.reInit.isLoading
});
const mapDispatchToProps = {
  reIsDanger,
  reIsSuccess,
  reIsLoading
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CLientFooterBanner);