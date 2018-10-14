import * as React from "react";
import { API } from './../../../config/const';
import axios from 'axios'
interface IState {
  gift: any;
  user: {
    send_gift_email: string;
    send_gift_name: string;
    send_gift_title: string;
    send_gift_phone: string;
  }
}
class CLientFooterBanner extends React.Component<{}, IState> {
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
      console.log(result)
      this.setState({
        gift: result.data.list,
        user: {
          ...this.state.user,
          send_gift_title: result.data.list.gift_name
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  onSendGift = ()=> {
      if(
        this.state.user.send_gift_email !== "" && this.state.user.send_gift_name != "" && this.state.user.send_gift_phone != ""
      ){
        axios.post(API+'')
      }else {
        alert("Nhập đủ")
      }
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
                  <input type="text" placeholder="Họ và tên" onChange={this.onChange} name="send_gift_name"/>
                  <input type="mail" placeholder="Email"  onChange={this.onChange} name="send_gift_email"/>
                  <input type="number" placeholder="Số điện thoại"  onChange={this.onChange} name="send_gift_phone"/>
                  <div className="get-access btn btn-sm btn-info" onClick={this.onSendGift}>Nhận quà <i className="ti-angle-right"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CLientFooterBanner